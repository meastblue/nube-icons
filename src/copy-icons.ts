/**
 * Poro Icons - Copy Icons Script
 * Copies SVG icons from bearded-icons source
 */

import { copyFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SOURCE_DIR = "/tmp/bearded-icons/icons";
const TARGET_DIR = join(__dirname, "..", "icons");

console.log("\n🐾 Poro Icons - Copy Icons\n");
console.log("━".repeat(40));

// Check if source exists
if (!existsSync(SOURCE_DIR)) {
  console.error("\n❌ Source directory not found!");
  console.error("   Please clone bearded-icons first:");
  console.error("   git clone https://github.com/BeardedBear/bearded-icons.git /tmp/bearded-icons\n");
  process.exit(1);
}

// Create target directory
if (!existsSync(TARGET_DIR)) {
  mkdirSync(TARGET_DIR, { recursive: true });
}

// Copy all SVG files
const files = readdirSync(SOURCE_DIR).filter(f => f.endsWith(".svg"));

console.log(`\n📦 Copying ${files.length} icons...\n`);

let copied = 0;
for (const file of files) {
  const src = join(SOURCE_DIR, file);
  const dst = join(TARGET_DIR, file);
  copyFileSync(src, dst);
  copied++;
}

console.log(`✓ Copied ${copied} icons to ${TARGET_DIR}`);
console.log("\n" + "━".repeat(40));
console.log("\n✨ Icons copied successfully!");
console.log("   Run 'npm run build' to generate icons.json\n");
