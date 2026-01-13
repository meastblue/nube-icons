/**
 * Poro Icons - Folder Names Expanded Mappings
 * Maps folder names to their expanded (open) icon variants
 */

import folderNames from "./folderNames";

// Generate expanded versions by appending "_open" to each icon name
const folderNamesExpanded: Record<string, string> = {};

for (const [folder, icon] of Object.entries(folderNames)) {
  folderNamesExpanded[folder] = `${icon}_open`;
}

export default folderNamesExpanded;
