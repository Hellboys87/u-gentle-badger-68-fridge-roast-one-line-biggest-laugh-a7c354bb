import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You're the only 'smart' thing in this kitchen that needs a firmware update to make ice, a subscription to pour water, and a reboot to remember you're cold.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Roast line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("Roast line must not be blank");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Roast line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length}-character roast to ${join(outDir, "entry.txt")}`);
