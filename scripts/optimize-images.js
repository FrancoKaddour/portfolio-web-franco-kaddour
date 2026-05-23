/**
 * Image optimization script
 * Converts oversized PNG screenshots (2880x1800) to WebP (800x500)
 *
 * Usage:
 *   npm install -D sharp   (one time)
 *   node scripts/optimize-images.js
 *
 * Result: public/img/*.webp  (~50-100KB each vs ~1.5MB PNG)
 */

import { readdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = path.join(__dirname, "../public/img");
const TARGET_WIDTH = 800;
const TARGET_HEIGHT = 500;

async function run() {
  // Dynamic import so script fails gracefully if sharp is not installed
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.error(
      "❌  sharp not found. Run:  npm install -D sharp\n"
    );
    process.exit(1);
  }

  const files = await readdir(INPUT_DIR);
  const pngs = files.filter((f) => f.endsWith(".png"));

  if (pngs.length === 0) {
    console.log("No PNG files found in public/img/");
    return;
  }

  for (const file of pngs) {
    const input = path.join(INPUT_DIR, file);
    const output = path.join(INPUT_DIR, file.replace(".png", ".webp"));

    const before = (await stat(input)).size;

    await sharp(input)
      .resize(TARGET_WIDTH, TARGET_HEIGHT, {
        fit: "cover",
        position: "top", // preserve top of screenshots (important for site previews)
      })
      .webp({ quality: 88 })
      .toFile(output);

    const after = (await stat(output)).size;
    const saving = (((before - after) / before) * 100).toFixed(0);

    console.log(
      `✅  ${file.padEnd(20)} ${(before / 1024).toFixed(0).padStart(6)}KB  →  ${(after / 1024).toFixed(0).padStart(5)}KB WebP  (${saving}% smaller)`
    );
  }

  console.log(
    "\n💡  Update ProjectsPage.tsx: change .png → .webp in the image paths."
  );
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
