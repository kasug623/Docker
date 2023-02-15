#!/bin/sh

deno cache /usr/src/deps.ts
deno cache /usr/src/main.ts
deno run --allow-net /usr/src/main.ts