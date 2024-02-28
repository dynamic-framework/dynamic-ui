#!/bin/bash

rm -f ./dist/css/*
mkdir -p ./dist/css/

VERSION=$(node -p "require('./package.json').version")

read -r -d '' HEADER_COMMENT << EOM
/*!
 * dynamic-framework $VERSION
 */
EOM

for file in ./src/style/*.scss; do
  filename=$(basename -- "$file" .scss)
  if [[ $filename = _* ]] ; then continue ; fi

  echo "$HEADER_COMMENT" > ./dist/css/$filename.css
  echo "$HEADER_COMMENT" > ./dist/css/$filename.min.css

  sass --load-path=node_modules --no-source-map "$file" >> ./dist/css/$filename.css
  sass --load-path=node_modules --no-source-map --style=compressed "$file" >> ./dist/css/$filename.min.css
done

postcss ./dist/css/*.css --replace --use autoprefixer --no-map
