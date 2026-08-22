/**
 * Content contract check.
 *
 * Loads every catalogue record through its aggregate factory, so any missing
 * required field, malformed slug or unknown taxonomy id fails here rather than
 * halfway through a build. Also reports which records are still outlines and
 * whether cross-references point at records that exist.
 *
 * Run: npm run content:check
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register("./scripts/loader.mjs", pathToFileURL("./"));

const { serviceRepository } = await import("../src/modules/services/infrastructure/service.repository.js");
const { solutionRepository } = await import("../src/modules/solutions/infrastructure/solution.repository.js");
const { industryRepository } = await import("../src/modules/industries/infrastructure/industry.repository.js");
const { caseStudyRepository } = await import("../src/modules/case-studies/infrastructure/case-study.repository.js");
const { articleRepository } = await import("../src/modules/insights/infrastructure/article.repository.js");

const catalogues = [
  ["Service", serviceRepository.findAll()],
  ["Solution", solutionRepository.findAll()],
  ["Industry", industryRepository.findAll()],
  ["CaseStudy", caseStudyRepository.findAll()],
  ["Article", articleRepository.findAll()],
];

const known = new Map(catalogues.map(([name, records]) => [name, new Set(records.map((r) => r.slug))]));
const problems = [];

for (const [name, records] of catalogues) {
  const outlines = records.filter((record) => record.status === "outline" || record.status === "announced");
  console.log(`${name}: ${records.length} records, ${outlines.length} not yet fully authored`);

  for (const record of records) {
    check(name, record, "relatedSolutionSlugs", "Solution");
    check(name, record, "relatedServiceSlugs", "Service");
    check(name, record, "relatedIndustrySlugs", "Industry");
    check(name, record, "industrySlugs", "Industry");
    check(name, record, "solutionSlugs", "Solution");
    check(name, record, "relatedCaseStudySlugs", "CaseStudy");
  }
}

function check(ownerName, record, field, targetName) {
  for (const slug of record[field] ?? []) {
    if (!known.get(targetName).has(slug)) {
      problems.push(`${ownerName} "${record.slug}" references unknown ${targetName} "${slug}" via ${field}`);
    }
  }
}

if (problems.length) {
  console.error(`\n${problems.length} broken reference(s):`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log("\nContent contract OK.");
