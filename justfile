set shell := ["bash", "-cu"]
set windows-shell := ["pwsh", "-Command"]

tsc := "pnpm exec tsc"
biome := "pnpm exec biome"
rspress := "pnpm exec rspress"

# Default action
_:
    just lint
    just fmt

# Install
i:
    pnpm install

# Format code
fmt:
    {{biome}} check --write .

# Lint code with ls-lint
ls-lint:
    cd ./src && ls-lint -config ../.ls-lint.yaml

# Lint code with ls-lint
lslint:
    just ls-lint

# Lint code with typos-cli
typos:
    typos

# Lint with TypeScript Compiler
tsc:
    {{tsc}} --noEmit

# Lint code
lint:
    just lslint
    just typos
    just tsc

# Lint code with Biome
lint-biome:
    {{biome}} lint .

# Check code
check:
    just fmt
    just lint
    just test

# Start development server
dev:
    {{rspress}} dev --port 3001

# Build site
build:
    {{rspress}} build

# Preview site
preview:
    {{rspress}} preview --port 3000

# Clean builds (Linux)
clean-linux:
    rm -rf ./dist

# Clean builds (macOS)
clean-macos:
    just clean-linux

# Clean builds (Windows)
clean-windows:
    if (Test-Path "./dist") { Remove-Item -Recurse -Force "./dist" }

# Clean
clean:
    just clean-{{os()}}

# Clean everything (Linux)
clean-all-linux:
    just clean

    rm -rf ./node_modules

# Clean everything (macOS)
clean-all-macos:
    just clean-all-linux

# Clean everything (Windows)
clean-all-windows:
    just clean

    if (Test-Path "./node_modules") { Remove-Item -Recurse -Force "./node_modules" }

# Clean everything
clean-all:
    just clean-all-{{os()}}
