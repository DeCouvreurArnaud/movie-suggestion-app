const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const terser = require("gulp-terser");

// sass
function compileSass() {
  return src("scss/style.scss")
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest("dist/css"));
}

// js
function compileJs() {
  return src("js/*.js").pipe(terser()).pipe(dest("dist/js"));
}

// watchtask
function watchTask() {
  watch("scss/style.scss", compileSass);
  watch("js/*.js", compileJs);
}

// default gulp
exports.default = series(compileSass, compileJs, watchTask);
