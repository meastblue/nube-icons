/**
 * Poro Icons - Icon Definitions
 * Generates icon definitions from the /icons folder
 */

import { readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import type { IconDefinitions } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ICONS_DIR = join(__dirname, "..", "icons");

function iconGeneric(name: string): IconDefinitions {
  return { [`_${name}`]: { path: `./icons/${name}.svg` } };
}

// Generate icon list from /icons folder
function generateIconList(): IconDefinitions {
  if (!existsSync(ICONS_DIR)) {
    console.warn("Icons directory not found. Run 'npm run copy-icons' first.");
    return {};
  }

  const files = readdirSync(ICONS_DIR);
  const iconList: IconDefinitions = {};

  for (const file of files) {
    if (file.endsWith(".svg")) {
      const name = file.replace(".svg", "");
      iconList[name] = { path: `./icons/${name}.svg` };
    }
  }

  return iconList;
}

const icons: IconDefinitions = {
  // Generic icons (prefixed with underscore)
  ...iconGeneric("file"),
  ...iconGeneric("file_light"),
  ...iconGeneric("folder"),
  ...iconGeneric("folder_open"),
  ...iconGeneric("folder_light"),
  ...iconGeneric("folder_light_open"),
  ...iconGeneric("root_folder"),
  ...iconGeneric("root_folder_open"),
  ...iconGeneric("root_folder_light"),
  ...iconGeneric("root_folder_light_open"),
  // All icons from /icons folder
  ...generateIconList(),
};

export default icons;
