# gulp-extract-text
By Ralph Crisostomo - 2018/01/07

## Description
A Gulp plugin for extracting text from a file.

## Install
```bash
npm install --save-dev gulp-extract-text
```

## Extract files
Extract text from different files like `.txt`, `.html`, `.css`, '.js' and etc.

## Basic Usage
Let say we want to extract all the text inside head tag and export it to extracted.txt

```javascript
const gulp              = require('gulp');
const extract_text      = require('gulp-extract-text');

gulp.task('deploy',function(){
    gulp.src(['src/index.html'])
    .pipe(extract_text({
        pattern_start   : "<head>",
        pattern_end     : "</head>",
    }))
    .pipe(gulp.dist('dist/extracted.txt'))
});

```