#!/bin/sh
cd "$(dirname "$0")"
exec node node_modules/.bin/vite --port "${PORT:-5174}"
