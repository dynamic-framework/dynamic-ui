#!/bin/bash

source_dir="./node_modules/bootstrap-icons/font"
target_dir="./dist/css"

mkdir -p "$target_dir/fonts"

cp "$source_dir/bootstrap-icons.css" "$target_dir/"
cp "$source_dir/bootstrap-icons.json" "$target_dir/"
cp "$source_dir/bootstrap-icons.min.css" "$target_dir/"
cp "$source_dir/bootstrap-icons.scss" "$target_dir/"

cp "$source_dir/fonts/bootstrap-icons.woff" "$target_dir/fonts/"
cp "$source_dir/fonts/bootstrap-icons.woff2" "$target_dir/fonts/"
