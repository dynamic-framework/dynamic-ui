#!/bin/bash

for file in ./src/style/*.scss; do
  filename=$(basename -- "$file" .scss)
  if [[ $filename = _* ]] ; then continue ; fi

  sass --load-path=node_modules --no-source-map "$file" ./dist/css/$filename.css
  sass --load-path=node_modules --no-source-map --style=compressed "$file" ./dist/css/$filename.min.css
done

postcss ./dist/css/*.css --replace --use autoprefixer --no-map
