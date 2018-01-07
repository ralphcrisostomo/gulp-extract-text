# gulp-extract-text
By Ralph Crisostomo - 2018/01/07

## Description
A Gulp plugin for extracting text from a file.

## Install
```bash
npm install --save-dev gulp-extract-text
```

## Extract files
Extract text from different files like `.txt`, `.html`, `.css`, `.js` and etc.

## Parameters
```javascript
let extract_text_params = {
    pattern_start       : "<pattern start>",
    pattern_end         : "<pattern end>"
}
```

## Basic Usage
Let say we want to extract all the text inside `<head>` tag and export it to `dist` directory.

```javascript
const gulp              = require('gulp');
const extract_text      = require('gulp-extract-text');

let extract_text_params = {
    pattern_start       : "<head>",
    pattern_end         : "</head>"
}

gulp.task('deploy',function(){
    gulp.src(['src/index.html'])
    .pipe(extract_text(extract_text_params))
    .pipe(gulp.dist('./dist'))
});

```