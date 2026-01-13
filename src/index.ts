/**
 * Nube Icons - Zed Icon Theme Generator
 * Generates the icons.json file in Zed-compatible format
 */

import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import fileExtensions from "./shared/fileExtensions";
import fileNames from "./shared/fileNames";
import folderNames from "./shared/folderNames";
import folderNamesExpanded from "./shared/folderNamesExpanded";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, "..");

console.log("\n🌍 Nube Icons Generator\n");
console.log("━".repeat(40));

// Get unique icon names from all mappings
function getUniqueIcons(): Set<string> {
  const icons = new Set<string>();

  // Add default icons
  icons.add("file");
  icons.add("folder");
  icons.add("folder_open");

  // From file extensions
  for (const icon of Object.values(fileExtensions)) {
    icons.add(icon as string);
  }

  // From file names
  for (const icon of Object.values(fileNames)) {
    icons.add(icon as string);
  }

  // From folder names
  for (const icon of Object.values(folderNames)) {
    icons.add(icon as string);
  }

  return icons;
}

// Build file_icons mapping
function buildFileIcons(icons: Set<string>): Record<string, { path: string }> {
  const fileIcons: Record<string, { path: string }> = {
    default: { path: "./icons/file.svg" },
  };

  for (const icon of icons) {
    if (icon === "file" || icon === "folder" || icon === "folder_open") continue;
    fileIcons[icon] = { path: `./icons/${icon}.svg` };
  }

  return fileIcons;
}

// Build file_suffixes (extension to icon mapping)
function buildFileSuffixes(): Record<string, string> {
  const suffixes: Record<string, string> = {};

  for (const [ext, icon] of Object.entries(fileExtensions)) {
    suffixes[ext] = icon as string;
  }

  return suffixes;
}

// Build file_stems (filename to icon mapping)
function buildFileStems(): Record<string, string> {
  const stems: Record<string, string> = {};

  for (const [name, icon] of Object.entries(fileNames)) {
    // Remove extension from filename for stem
    const stem = name.includes(".") ? name : name;
    stems[stem] = icon as string;
  }

  return stems;
}

// Build directory icons
function buildDirectoryIcons(): { collapsed: { path: string }; expanded: { path: string } } {
  return {
    collapsed: { path: "./icons/folder.svg" },
    expanded: { path: "./icons/folder_open.svg" },
  };
}

// Build named directory icons
function buildNamedDirectoryIcons(): Record<string, { collapsed: { path: string }; expanded: { path: string } }> {
  const namedDirs: Record<string, { collapsed: { path: string }; expanded: { path: string } }> = {};

  for (const [name, icon] of Object.entries(folderNames)) {
    const expandedIcon = folderNamesExpanded[name as keyof typeof folderNamesExpanded] || `${icon}_open`;
    namedDirs[name] = {
      collapsed: { path: `./icons/${icon}.svg` },
      expanded: { path: `./icons/${expandedIcon}.svg` },
    };
  }

  return namedDirs;
}

// Build the Zed icon theme
const uniqueIcons = getUniqueIcons();

const iconTheme = {
  $schema: "https://zed.dev/schema/icon_themes/v0.3.0.json",
  name: "Nube Icons",
  author: "meastblue",
  themes: [
    {
      name: "Nube Icons",
      appearance: "dark",
      directory_icons: buildDirectoryIcons(),
      named_directory_icons: buildNamedDirectoryIcons(),
      chevron_icons: {
        collapsed: { path: "./icons/chevron_right.svg" },
        expanded: { path: "./icons/chevron_down.svg" },
      },
      file_stems: buildFileStems(),
      file_suffixes: buildFileSuffixes(),
      file_icons: buildFileIcons(uniqueIcons),
    },
    {
      name: "Nube Icons Light",
      appearance: "light",
      directory_icons: {
        collapsed: { path: "./icons/folder_light.svg" },
        expanded: { path: "./icons/folder_light_open.svg" },
      },
      named_directory_icons: buildNamedDirectoryIcons(),
      chevron_icons: {
        collapsed: { path: "./icons/chevron_right.svg" },
        expanded: { path: "./icons/chevron_down.svg" },
      },
      file_stems: buildFileStems(),
      file_suffixes: buildFileSuffixes(),
      file_icons: {
        ...buildFileIcons(uniqueIcons),
        default: { path: "./icons/file_light.svg" },
      },
    },
  ],
};

// Write the icons.json file
const outputPath = join(ROOT_DIR, "icons.json");
const json = JSON.stringify(iconTheme, null, 2);

writeFileSync(outputPath, json, "utf-8");

console.log("\n✓ Generated icons.json (Zed format)");

// Count statistics
const extensionCount = Object.keys(fileExtensions).length;
const fileNameCount = Object.keys(fileNames).length;
const folderCount = Object.keys(folderNames).length;
const iconCount = uniqueIcons.size;

console.log("\n" + "━".repeat(40));
console.log("\n📊 Statistics:");
console.log(`   • Unique icons:     ${iconCount}`);
console.log(`   • File extensions:  ${extensionCount}`);
console.log(`   • File names:       ${fileNameCount}`);
console.log(`   • Folder names:     ${folderCount}`);

console.log("\n🚀 To install in Zed:");
console.log("   1. Copy to ~/.config/zed/extensions/nube-icons/");
console.log("   2. Or install via Zed extensions\n");
