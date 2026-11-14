// ai-joke-03 entry: writes one fixed joke to entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(
  `${OUTPUT_DIR}/entry.txt`,
  "I asked my agent to explain the code. It explained what it wished the code did.\n",
);
