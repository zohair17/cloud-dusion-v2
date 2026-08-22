/**
 * Resolves the "@/..." path alias and extensionless imports for plain Node runs
 * (the content check). Next.js reads the alias from jsconfig.json; Node needs it
 * spelled out.
 *
 * Extension detection is by filesystem probe, not by regex: module names here
 * contain dots by convention (service.entity, site.config), so a trailing
 * ".entity" must not be mistaken for a file extension.
 */
import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve as resolvePath } from "node:path";

export function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("@/")) {
    const target = resolvePath(process.cwd(), "src", specifier.slice(2));
    return nextResolve(pathToFileURL(withExtension(target)).href, context);
  }

  if ((specifier.startsWith("./") || specifier.startsWith("../")) && context.parentURL) {
    const target = new URL(specifier, context.parentURL);
    return nextResolve(pathToFileURL(withExtension(fileURLToPath(target))).href, context);
  }

  return nextResolve(specifier, context);
}

function withExtension(target) {
  if (existsSync(target) && !existsSync(`${target}.js`)) return target;
  if (existsSync(`${target}.js`)) return `${target}.js`;
  if (existsSync(`${target}/index.js`)) return `${target}/index.js`;
  return target;
}
