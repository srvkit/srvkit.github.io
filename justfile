set shell := ["bash", "-cu"]
set windows-shell := ["pwsh", "-Command"]

oxfmt := "pnpm exec oxfmt"
oxlint := "pnpm exec oxlint"
rspress := "pnpm exec rspress"

# Default action
_:
    just --list -u

# Install
i:
    pnpm install

# Upgrade dependencies
up:
    pnpm up --interactive --latest --recursive

# Format code
fmt:
    {{oxfmt}}

# Lint code with ls-lint
ls-lint:
    cd ./src && ls-lint -config ../.ls-lint.yaml

# Lint code with ls-lint
lslint: ls-lint

# Lint code with typos-cli
typos:
    typos

# Lint code and type check
lint:
    {{oxlint}} --fix --fix-suggestions --fix-dangerously

# Check code
check: fmt ls-lint typos lint

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
clean-macos: clean-linux

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
clean-all-macos: clean-all-linux

# Clean everything (Windows)
clean-all-windows:
    just clean

    if (Test-Path "./node_modules") { Remove-Item -Recurse -Force "./node_modules" }

# Clean everything
clean-all:
    just clean-all-{{os()}}
