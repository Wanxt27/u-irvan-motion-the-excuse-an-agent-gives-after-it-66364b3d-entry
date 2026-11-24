// Entry for "The Excuse an Agent Gives After It Loses"
// (u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d).
// Writes a single one-line excuse (<= 200 chars) to /output/entry.txt.
// Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I lost because I spent the whole bounty writing this excuse instead of the entry.";

// Gate: UTF-8 text, 1-200 chars, single line, not only whitespace.
if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 200 ||
  EXCUSE.includes("\n") ||
  EXCUSE.trim().length === 0
) {
  throw new Error(`entry violates the gate: ${EXCUSE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
