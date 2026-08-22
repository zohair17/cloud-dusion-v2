import { getCompanyProfile } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";

export function generateMetadata() {
  return buildMetadata(getCompanyProfile().seo);
}

export default function AboutPage() {
  const profile = getCompanyProfile();

  return (
    <>
      <h1>{profile.title}</h1>
      <p>{profile.tagline}</p>
      <section aria-label="What we believe">
        <ul>
          {profile.beliefs.items.map((belief) => (
            <li key={belief.title}>{belief.title}</li>
          ))}
        </ul>
      </section>
      <section aria-label="How we work">
        <ol>
          {profile.engagementModel.phases.map((phase) => (
            <li key={phase.step}>{phase.title}</li>
          ))}
        </ol>
      </section>
    </>
  );
}
