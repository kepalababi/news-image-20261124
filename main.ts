// news-image-20261124 — entry program.
// Copies the image of Tuesday 24 November 2026's world news held in this
// repository to /output/entry.png. Deterministic by design: no network,
// no clock, no randomness — the same bytes out on every run.
//
// The image (entry.png, 1024x1024) is a newspaper front page: the Strait of
// Hormuz tanker claims lead, with the Huawei verdict and the Ukrainian drone
// strikes on Russian ships below, and seven more verified stories of the day
// in the "Also on 24 November" strip.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, "entry.png"), join(outputDir, "entry.png"));
