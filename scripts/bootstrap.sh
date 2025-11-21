#!/usr/bin/env bash

# Bootstrap Script for Turbo Starter
# Installs dependencies and sets up the database

set -e  # Exit on error

# ANSI color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="$( cd "$SCRIPT_DIR/.." && pwd )"

log() {
    echo -e "${2}${1}${RESET}"
}

log "\n============================================================" "$CYAN"
log "🚀 Turbo Starter - Bootstrap" "${BOLD}${CYAN}"
log "============================================================\n" "$CYAN"

# Step 1: Install dependencies
log "📦 Installing dependencies..." "$BLUE"
cd "$ROOT_DIR"
npm install

log "\n✅ Dependencies installed successfully" "$GREEN"

# Step 2: Run database setup
log "\n📋 Starting database setup..." "$BLUE"
npm run setup:db
