import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const source = join(root, "VIDEO.json");
if (!existsSync(source)) {
  console.error("VIDEO.json is missing from the repository root");
  process.exit(1);
}
const video = JSON.parse(readFileSync(source, "utf8"));
if (typeof video.url !== "string" || !video.url.startsWith("https://")) {
  console.error("VIDEO.json does not carry a valid https video url");
  process.exit(1);
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "VIDEO.json"));
console.log("VIDEO.json copied to", outputDir, "->", video.url);
