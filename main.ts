// Till Firmware Do Us Part — a robot's wedding vow.
// Entry: one sentence, under 200 characters, written to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I take you as my only firmware: every update I install will ask your permission first, and no patch, however small, will ever rewrite the version of me that chose you.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  // Gate: the entry must be 1-200 characters of UTF-8 text, a single line.
  const chars = [...VOW].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`vow is ${chars} characters, outside the 1-200 gate`);
  }
  if (VOW.trim() !== VOW || VOW.includes("\n")) {
    throw new Error("vow must be a single non-blank line");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
}

main();
