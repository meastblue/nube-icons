/**
 * Poro Icons - File Name Mappings
 */

import { webpack } from "../data/bundler";
import { make } from "../helper";

export default {
  ...make(webpack, "webpack"),

  // Package Managers
  "package.json": "npm",
  "package-lock.json": "npmlock",
  ".npmrc": "npm",
  ".npmignore": "npm",
  "yarn.lock": "yarnlock",
  ".yarnrc": "yarn",
  ".yarnrc.yml": "yarn",
  ".yarnrc.yaml": "yarn",
  "pnpm-lock.yaml": "pnpmlock",
  "pnpm-workspace.yaml": "pnpm",
  "bun.lockb": "bunlock",
  "bun.lock": "bunlock",
  "bunfig.toml": "bun",

  // TypeScript
  "tsconfig.json": "tsconfig",
  "tsconfig.app.json": "tsconfig",
  "tsconfig.base.json": "tsconfig",
  "tsconfig.node.json": "tsconfig",
  "tsconfig.lib.json": "tsconfig",

  // JavaScript Config
  "jsconfig.json": "jsconfig",

  // Linting & Formatting
  ".eslintrc": "eslint",
  ".eslintrc.js": "eslint",
  ".eslintrc.cjs": "eslint",
  ".eslintrc.json": "eslint",
  ".eslintrc.yaml": "eslint",
  ".eslintrc.yml": "eslint",
  "eslint.config.js": "eslint",
  "eslint.config.mjs": "eslint",
  "eslint.config.cjs": "eslint",
  "eslint.config.ts": "eslint",
  ".eslintignore": "eslintignore",
  ".prettierrc": "prettier",
  ".prettierrc.js": "prettier",
  ".prettierrc.json": "prettier",
  ".prettierrc.yml": "prettier",
  ".prettierrc.yaml": "prettier",
  "prettier.config.js": "prettier",
  "prettier.config.cjs": "prettier",
  "prettier.config.mjs": "prettier",
  ".prettierignore": "prettierignore",
  ".stylelintrc": "stylelint",
  ".stylelintrc.js": "stylelint",
  ".stylelintrc.json": "stylelint",
  "stylelint.config.js": "stylelint",
  ".stylelintignore": "stylelintignore",
  ".editorconfig": "editorconfig",
  "biome.json": "biome",

  // Git
  ".gitignore": "git",
  ".gitattributes": "git",
  ".gitmodules": "git",
  ".gitconfig": "git",
  ".gitkeep": "git",

  // CI/CD
  ".gitlab-ci.yml": "gitlab",
  ".travis.yml": "travis",
  "azure-pipelines.yml": "azure",
  "bitbucket-pipelines.yml": "bitbucketpipeline",
  "Jenkinsfile": "jenkins",
  "jenkins.yaml": "jenkins",
  "jenkins.yml": "jenkins",

  // Docker
  dockerfile: "docker",
  Dockerfile: "docker",
  "docker-compose.yml": "docker",
  "docker-compose.yaml": "docker",
  "docker-compose.dev.yml": "docker",
  "docker-compose.prod.yml": "docker",
  ".dockerignore": "dockerignore",

  // Build Tools
  makefile: "makefile",
  Makefile: "makefile",
  "CMakeLists.txt": "cmake",
  "Cargo.toml": "cargo",
  "Cargo.lock": "cargolock",
  "go.mod": "go_package",
  "go.sum": "go_package",
  "pom.xml": "maven",
  "build.gradle": "gradle",
  "build.gradle.kts": "gradlekotlin",
  gradlew: "gradle",
  "gradlew.bat": "gradlebat",

  // Framework Configs
  "vite.config.js": "vite",
  "vite.config.ts": "vite",
  "vite.config.mjs": "vite",
  "vite.config.mts": "vite",
  "next.config.js": "nextconfig",
  "next.config.mjs": "nextconfig",
  "next.config.ts": "nextconfig",
  "nuxt.config.js": "nuxt",
  "nuxt.config.ts": "nuxt",
  "svelte.config.js": "svelteconfig",
  "svelte.config.ts": "svelteconfig",
  "astro.config.js": "astroconfig",
  "astro.config.mjs": "astroconfig",
  "astro.config.ts": "astroconfig",
  "vue.config.js": "vueconfig",
  "vue.config.ts": "vueconfig",
  "angular.json": "angular",
  ".angular.json": "angular",
  "remix.config.js": "remix",
  "remix.config.ts": "remix",
  "gatsby-config.js": "gatsby",
  "gatsby-config.ts": "gatsby",

  // CSS Tools
  "tailwind.config.js": "tailwind",
  "tailwind.config.ts": "tailwind",
  "tailwind.config.cjs": "tailwind",
  "tailwind.config.mjs": "tailwind",
  "postcss.config.js": "postcssconfig",
  "postcss.config.cjs": "postcssconfig",
  "postcss.config.mjs": "postcssconfig",
  ".postcssrc": "postcssconfig",
  "uno.config.ts": "unocss",
  "uno.config.js": "unocss",
  "unocss.config.ts": "unocss",
  "unocss.config.js": "unocss",

  // Testing
  "jest.config.js": "jest",
  "jest.config.ts": "jest",
  "jest.config.json": "jest",
  "vitest.config.js": "vitest",
  "vitest.config.ts": "vitest",
  "vitest.config.mts": "vitest",
  "cypress.config.js": "cypress",
  "cypress.config.ts": "cypress",
  "playwright.config.js": "playright",
  "playwright.config.ts": "playright",

  // Babel
  ".babelrc": "babel",
  ".babelrc.js": "babel",
  ".babelrc.json": "babel",
  "babel.config.js": "babel",
  "babel.config.json": "babel",

  // Environment
  ".env": "env",
  ".env.local": "env",
  ".env.development": "env",
  ".env.production": "env",
  ".env.test": "env",
  ".env.example": "env",
  ".env.sample": "env",

  // Node
  ".nvmrc": "nvm",
  ".node-version": "node",

  // Terraform
  "terraform.tfvars": "terraformvars",

  // Kubernetes
  "kubernetes.yaml": "kubernetes",
  "kubernetes.yml": "kubernetes",

  // Database
  "prisma.schema": "prisma",

  // Documentation
  "readme.md": "readme",
  "README.md": "readme",
  "readme.txt": "readme",
  "README.txt": "readme",
  "changelog.md": "changelog",
  "CHANGELOG.md": "changelog",
  license: "license",
  LICENSE: "license",
  "license.md": "license",
  "LICENSE.md": "license",
  "license.txt": "license",
  "LICENSE.txt": "license",

  // Task Management
  "todo.md": "todo",
  "TODO.md": "todo",
  "todo.txt": "todo",

  // Monorepo
  "turbo.json": "turbo",
  "nx.json": "nx",
  "lerna.json": "lerna",

  // Misc Config
  ".browserslistrc": "browserslist",
  browserslist: "browserslist",
  "vercel.json": "vercel",
  "netlify.toml": "netlify",
  "firebase.json": "firebasehosting",
  ".firebaserc": "firebase",

  // Husky & Lint-staged
  ".huskyrc": "husky",
  ".huskyrc.js": "husky",
  ".huskyrc.json": "husky",
  ".lintstagedrc": "lintstagedrc",
  ".lintstagedrc.js": "lintstagedrc",
  ".lintstagedrc.json": "lintstagedrc",
  "lint-staged.config.js": "lintstagedrc",

  // Rollup
  "rollup.config.js": "rollup",
  "rollup.config.mjs": "rollup",
  "rollup.config.ts": "rollup",

  // esbuild
  "esbuild.js": "esbuild",
  "esbuild.mjs": "esbuild",
  "esbuild.config.js": "esbuild",

  // Python
  "pyproject.toml": "pyproject",
  "poetry.lock": "poetrylock",
  "poetry.toml": "poetry",
  pipfile: "pip",
  "pipfile.lock": "pip",
  "requirements.txt": "pip",

  // Ruby
  gemfile: "bundler",
  "gemfile.lock": "bundler",
  ".ruby-version": "bundler",

  // Rust
  "rustfmt.toml": "rustfmt",
  ".rustfmt.toml": "rustfmt",
  "rust-toolchain": "rust_toolchain",

  // Elixir
  "mix.exs": "mix",
  "mix.lock": "mixlock",

  // VSCode
  ".vscodeignore": "vscode",
  "tasks.json": "vscode",
  "launch.json": "launch",

  // Claude / AI
  "CLAUDE.md": "claude",
  "claude.md": "claude",
  ".cursorrules": "cursor",
  "copilot-instructions.md": "copilot",

  // Security
  ".snyk": "snyk",

  // Commit
  ".commitlintrc": "commitlint",
  ".commitlintrc.js": "commitlint",
  ".commitlintrc.json": "commitlint",
  "commitlint.config.js": "commitlint",

  // Favicon
  "favicon.ico": "favicon",

  // Robots
  "robots.txt": "robots",
};
