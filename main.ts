// Fridge Roast: one line, biggest laugh.
//
// Angle: the $3,000 "smart" fridge loses at its own core job — making ice —
// to a dumb $12 tray from 1987. The joke's turn is the price contrast at the
// end: all that Wi-Fi and firmware, outclassed by stamped plastic. It roasts
// the fridge itself (its ice maker and its "smart" pretensions), stays specific
// to smart fridges, and steers clear of the two tired angles — ordering
// groceries and spying on you.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You cost $3,000, run on Wi-Fi and firmware updates, and still make ice slower than a $12 tray from 1987.";

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
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Read back what we wrote: the entry file must contain exactly the roast line
// (plus a trailing newline), or the submission is silently wrong.
const written = readFileSync(outPath, "utf8");
if (written !== LINE + "\n") {
  throw new Error(`Verification failed: ${outPath} does not contain the roast line`);
}
console.log(`Wrote ${LINE.length}-character roast to ${outPath}`);
