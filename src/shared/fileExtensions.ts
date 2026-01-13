/**
 * Poro Icons - File Extension Mappings
 */

import { audio, image, video } from "../data/media";
import { make } from "../helper";

export default {
  ...make(audio, "audio"),
  ...make(video, "video"),
  ...make(image, "image"),

  // Archives
  "7z": "zip",
  "7zip": "zip",
  bz2: "zip",
  bzip2: "zip",
  gz: "zip",
  gzip: "zip",
  rar: "zip",
  tar: "zip",
  tgz: "zip",
  xz: "zip",
  zip: "zip",
  zipx: "zip",
  zz: "zip",
  deflate: "zip",
  brotli: "brotli",

  // Programming Languages
  c: "c",
  h: "cheader",
  cpp: "cpp",
  hpp: "hpp",
  cs: "csharp",
  csx: "csharp",
  css: "css",
  d: "d",
  dart: "dartlang",
  go: "go",
  java: "java",
  js: "js",
  mjs: "js",
  cjs: "js",
  ts: "typescript",
  mts: "typescript",
  cts: "typescript",
  "d.ts": "typescriptdef",
  jsx: "reactjs",
  tsx: "reactts",
  kt: "kotlin",
  kts: "kotlins",
  lua: "lua",
  php: "php",
  py: "python",
  pyc: "binary",
  rb: "ruby",
  rs: "rust",
  rsx: "rust",
  scala: "scala",
  sc: "scala",
  swift: "swift",
  zig: "zig",

  // Web
  html: "html",
  htm: "html",
  vue: "vue",
  svelte: "svelte",
  astro: "astro",

  // Styles
  scss: "scss",
  sass: "scss",
  less: "less",
  styl: "stylus",
  postcss: "postcssconfig",
  pcss: "postcssconfig",

  // Data
  json: "json",
  json5: "json5",
  jsonld: "jsonld",
  yaml: "yaml",
  yml: "yaml",
  toml: "toml",
  xml: "xml",
  csv: "csv",
  sql: "sql",
  sqlite: "sqlite",
  sqlite3: "sqlite",
  db: "sqlite",
  db3: "sqlite",

  // Config
  env: "env",
  ini: "conf",
  cfg: "conf",
  conf: "conf",

  // Documentation
  md: "markdown",
  mdx: "markdownx",
  markdown: "markdown",
  mdown: "markdown",
  txt: "txt",
  pdf: "pdf",
  adoc: "adoc",
  rst: "restructuredtext",

  // Shell
  sh: "shell",
  bash: "shell",
  zsh: "shell",
  fish: "shell",
  ps1: "powershell",
  psm1: "powershellmodule",
  psd1: "powershelldata",
  bat: "bat",
  cmd: "cli",

  // Build Tools
  gradle: "gradle",
  "gradle.kts": "gradlekotlin",
  makefile: "makefile",

  // Templates
  ejs: "ejs",
  erb: "erb",
  hbs: "handlebars",
  mustache: "mustache",
  njk: "njk",
  pug: "pug",
  twig: "twig",
  liquid: "liquid",
  blade: "blade",
  "blade.php": "blade",

  // Other Languages
  ex: "elixir",
  exs: "exs",
  eex: "eex",
  erl: "erlang",
  elm: "elm",
  hs: "haskell",
  ml: "ocaml",
  fs: "fsharp",
  clj: "clojure",
  cljs: "clojure",
  cljc: "clojure",
  r: "r",
  jl: "julia",
  nim: "nim",
  nix: "nix",
  sol: "sol",
  wasm: "wasm",
  graphql: "graphql",
  gql: "graphql",
  prisma: "prisma",
  proto: "proto",

  // Tests
  "spec.js": "testjs",
  "spec.jsx": "testjs",
  "spec.ts": "testts",
  "spec.tsx": "testts",
  "test.js": "testjs",
  "test.jsx": "testjs",
  "test.ts": "testts",
  "test.tsx": "testts",
  "e2e-spec.ts": "testts",
  "e2e-spec.tsx": "testts",

  // Storybook
  "stories.js": "storybook",
  "stories.jsx": "storybook",
  "stories.ts": "storybook",
  "stories.tsx": "storybook",
  "stories.svelte": "storybook",
  "story.js": "storybook",
  "story.jsx": "storybook",
  "story.ts": "storybook",
  "story.tsx": "storybook",

  // Maps
  "js.map": "jsmap",
  "mjs.map": "jsmap",
  "cjs.map": "jsmap",
  "css.map": "cssmap",

  // Certificates
  cer: "cert",
  crt: "cert",
  csr: "cert",
  der: "cert",
  p12: "cert",
  p7b: "cert",
  p7r: "cert",
  pem: "key",
  key: "key",
  pvk: "pvk",
  pfx: "pfx",

  // Fonts
  ttf: "fontttf",
  otf: "fontotf",
  woff: "fontwoff",
  woff2: "fontwoff2",
  eot: "fonteot",

  // Images (specific)
  ico: "imageico",
  gif: "imagegif",
  png: "imagepng",
  jpg: "imagejpg",
  jpeg: "imagejpg",
  svg: "svg",
  webp: "imagewebp",

  // Office
  doc: "word",
  docx: "word",
  docm: "word",
  xls: "excel",
  xlsx: "excel",
  xlsm: "excel",
  ppt: "powerpoint",
  pptx: "powerpoint",
  pptm: "powerpoint",

  // Design
  psd: "photoshop",
  ai: "ai",
  sketch: "sketch",
  fig: "figma",
  xd: "xd",

  // Game Dev
  gd: "godot",
  godot: "godot",
  unity: "shaderlab",

  // Binary
  exe: "binary",
  dll: "binary",
  so: "binary",
  a: "binary",
  o: "binary",
  bin: "binary",
  class: "class",
  jar: "jar",

  // Lock files
  lock: "lock",

  // Logs
  log: "log",

  // Terraform
  tf: "terraform",
  tfstate: "terraform",
  tfvars: "terraformvars",

  // Docker
  dockerfile: "docker",

  // Misc
  diff: "diff",
  patch: "diff",
  todo: "todo",
  license: "license",
  licence: "license",
};
