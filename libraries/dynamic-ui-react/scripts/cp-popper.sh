#!/bin/bash

source_dir="./node_modules/@popperjs/core/dist"
target_dir="./dist/js"

mkdir -p "$target_dir"

find "$source_dir" -type f -name '*.js' | while read -r file; do
  relative_path="${file#$source_dir/}"
  target_file="$target_dir/$relative_path"
  mkdir -p "$(dirname "$target_file")"
  cp "$file" "$target_file"
done
