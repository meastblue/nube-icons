# Nube Icons

<p align="center">
  <strong>A comprehensive icon theme for <a href="https://zed.dev">Zed</a></strong>
</p>

<p align="center">
  370+ icons for files, folders, and languages with dark & light support
</p>

---

## Features

- **370+ SVG Icons** — Comprehensive coverage for modern development
- **170+ File Extensions** — From code to configs to media
- **194 Specific Filenames** — Package managers, configs, dotfiles
- **28 Folder Icons** — Special icons for common directories
- **60+ Language IDs** — Native Zed language integration
- **Dark & Light Themes** — Optimized for both appearances

---

## Supported Technologies

### Programming Languages

| Category | Languages |
|----------|-----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, SCSS, Vue, Svelte, Astro, React |
| **Systems** | C, C++, Rust, Go, Zig, Nim, Odin |
| **JVM** | Java, Kotlin, Scala, Groovy |
| **Scripting** | Python, Ruby, PHP, Perl, Lua |
| **Functional** | Haskell, OCaml, F#, Elixir, Erlang, Elm, Clojure |
| **Mobile** | Swift, Dart (Flutter), Kotlin |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Data** | SQL, GraphQL, Prisma |

### Frameworks & Libraries

| Category | Technologies |
|----------|--------------|
| **Frontend** | React, Vue, Svelte, Angular, Astro, Solid |
| **Backend** | Node.js, Nest.js, Express, Django, Rails |
| **Full-Stack** | Next.js, Nuxt, Remix, SvelteKit |
| **Mobile** | Flutter, React Native, Expo |
| **Desktop** | Electron, Tauri |

### Build Tools & Package Managers

| Category | Tools |
|----------|-------|
| **Package Managers** | npm, Yarn, pnpm, Bun, Cargo, Go modules |
| **Bundlers** | Webpack (66 variants!), Vite, Rollup, Parcel, esbuild |
| **Task Runners** | Gulp, Grunt, Make, Nx, Turbo |
| **Compilers** | TypeScript, Babel, SWC |

### DevOps & Infrastructure

| Category | Tools |
|----------|-------|
| **Containers** | Docker, Docker Compose, Kubernetes |
| **IaC** | Terraform, Ansible, Pulumi |
| **CI/CD** | GitHub Actions, GitLab CI, Jenkins, Travis, CircleCI |
| **Cloud** | AWS, Azure, Vercel, Netlify, Heroku |

### Config & Data Formats

| Category | Formats |
|----------|---------|
| **Data** | JSON, YAML, TOML, XML, CSV |
| **Config** | ENV, INI, Properties, EditorConfig |
| **Docs** | Markdown, MDX, RST, LaTeX |

### Media Files

| Category | Count | Examples |
|----------|-------|----------|
| **Audio** | 23 | MP3, WAV, FLAC, M4A, OGG |
| **Video** | 24 | MP4, WebM, MKV, AVI, MOV |
| **Images** | 20 | PNG, JPEG, WebP, SVG, GIF |
| **Design** | — | PSD, Sketch, Figma, AI |

---

## Installation

### From Zed Extensions (Recommended)

1. Open Zed
2. Press `Cmd+Shift+X` (macOS) or `Ctrl+Shift+X` (Linux)
3. Search for **"Nube Icons"**
4. Click **Install**

### Manual Installation

```bash
# Clone the repository
git clone https://github.com/nube/nube-icons.git

# Copy to Zed extensions
cp -r nube-icons ~/.config/zed/extensions/

# Restart Zed
```

---

## Development

### Prerequisites

- [Bun](https://bun.sh) v1.1.0+
- TypeScript 5.8+

### Setup

```bash
# Clone bearded-icons for SVG source
git clone https://github.com/BeardedBear/bearded-icons.git /tmp/bearded-icons

# Install dependencies
bun install

# Copy icons from source
bun run copy-icons

# Generate icons.json
bun run build

# Watch mode
bun run dev
```

### Project Structure

```
nube-icons/
├── src/
│   ├── index.ts              # Main generator
│   ├── types.ts              # TypeScript definitions
│   ├── icons.ts              # Icon list generator
│   ├── helper.ts             # Utility functions
│   ├── copy-icons.ts         # Icon copy script
│   ├── data/
│   │   ├── media.ts          # Audio/video/image extensions
│   │   └── bundler.ts        # Webpack config variants
│   └── shared/
│       ├── fileExtensions.ts # Extension → icon mappings
│       ├── fileNames.ts      # Filename → icon mappings
│       ├── folderNames.ts    # Folder → icon mappings
│       └── languageIds.ts    # Language ID mappings
├── icons/                    # 370 SVG icon files
├── icons.json                # Generated Zed icon theme
├── extension.toml            # Zed extension manifest
└── package.json
```

### Icon Resolution Flow

```
File opened in Zed
        ↓
Check exact filename (fileStems)
   └─ package.json → npm icon
        ↓
Check file extension (fileSuffixes)
   └─ .ts → typescript icon
        ↓
Use default icon
   └─ file.svg / file_light.svg
```

### Adding New Icons

1. Add SVG to `/icons/` directory
2. Add mapping in appropriate file:
   - `fileExtensions.ts` — For file extensions
   - `fileNames.ts` — For specific filenames
   - `folderNames.ts` — For folder names
   - `languageIds.ts` — For Zed language IDs
3. Run `bun run build`

**Example — Adding a new extension:**

```typescript
// src/shared/fileExtensions.ts
export default {
  // ... existing mappings
  "myext": "myicon",  // .myext files use myicon.svg
};
```

---

## Icon Categories

### File Type Icons

| Category | Examples |
|----------|----------|
| **Languages** | `typescript.svg`, `python.svg`, `rust.svg` |
| **Frameworks** | `react.svg`, `vue.svg`, `svelte.svg` |
| **Config** | `json.svg`, `yaml.svg`, `toml.svg` |
| **Tools** | `webpack.svg`, `docker.svg`, `git.svg` |

### Folder Icons

| Folder | Icon |
|--------|------|
| `src`, `source` | `_fd_src.svg` |
| `dist`, `build` | `_fd_dist.svg` |
| `node_modules` | `_fd_node.svg` |
| `components` | `_fd_components.svg` |
| `tests`, `__tests__` | `_fd_test.svg` |
| `.github` | `_fd_github.svg` |

### Special Files

| File | Icon |
|------|------|
| `package.json` | npm |
| `tsconfig.json` | TypeScript config |
| `Dockerfile` | Docker |
| `.gitignore` | Git |
| `README.md` | Readme |

---

## Statistics

| Metric | Count |
|--------|-------|
| **Total Icons** | 370 |
| **File Extensions** | 170+ |
| **Specific Filenames** | 194 |
| **Folder Names** | 28 |
| **Language IDs** | 60+ |
| **Webpack Variants** | 66 |

---

## Credits

Icon designs based on [Bearded Icons](https://github.com/BeardedBear/bearded-icons) by BeardedBear.

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/meastblue"><strong>meastblue</strong></a>
</p>
