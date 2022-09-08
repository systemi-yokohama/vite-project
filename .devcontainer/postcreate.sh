#!/bin/sh
# vim:sw=4:ts=4:et

set -e

git config --global --add safe.directory /workspace

npx husky install

sudo chown node:node dist node_modules storybook-static

npm ci

exec "$@"
