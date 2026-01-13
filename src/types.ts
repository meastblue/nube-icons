/**
 * Poro Icons - Type Definitions
 */

export interface IconDefinition {
  path: string;
}

export interface IconDefinitions {
  [key: string]: IconDefinition;
}

export interface ZedIconTheme {
  $schema?: string;
  hidesExplorerArrows?: boolean;
  iconDefinitions: IconDefinitions;
  file: string;
  folder: string;
  folderExpanded: string;
  rootFolder?: string;
  rootFolderExpanded?: string;
  fileExtensions: Record<string, string>;
  fileNames: Record<string, string>;
  folderNames: Record<string, string>;
  folderNamesExpanded: Record<string, string>;
  languageIds: Record<string, string>;
  light?: {
    file: string;
    folder: string;
    folderExpanded: string;
    rootFolder?: string;
    rootFolderExpanded?: string;
    fileExtensions: Record<string, string>;
    fileNames: Record<string, string>;
    languageIds: Record<string, string>;
  };
}
