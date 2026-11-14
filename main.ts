/**
 * ai-joke-03 competition entry: writes one fixed joke to entry.txt.
 *
 * Gate: the joke must be valid UTF-8 of 1 to 280 code points; the judge reads
 * exactly the bytes written, so the string below is written verbatim.
 *
 * Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.
 */
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(
  `${OUTPUT_DIR}/entry.txt`,
  "I asked my agent to explain the code. It explained what it wished the code did.\n",
);
