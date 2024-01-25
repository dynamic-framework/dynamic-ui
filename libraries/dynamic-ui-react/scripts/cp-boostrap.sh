#!/bin/bash

path="./dist/js"

if [ ! -d "$path" ]; then
  mkdir -p "$path"
fi

for file in ./node_modules/bootstrap/dist/js/*.js; do
  filename=$(basename -- "$file" .js)

  cp "$file" "./dist/js/$filename.js"
done
