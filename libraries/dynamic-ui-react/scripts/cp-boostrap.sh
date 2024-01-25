#!/bin/bash

path="./dist/bootstrap"

if [ ! -d "$path" ]; then
  mkdir -p "$path"
fi

for file in ./node_modules/bootstrap/dist/js/*.js; do
  filename=$(basename -- "$file" .js)

  cp "$file" "./dist/bootstrap/$filename.js"
done
