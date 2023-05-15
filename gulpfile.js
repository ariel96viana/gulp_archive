const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function sassCompilate() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./build/styles"));
}

function javascriptUglify() {
  return gulp
    .src("./source/script/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"));
}

function imageminCreator() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

exports.default = function () {
  gulp.watch(
    "./source/styles/*.scss",
    { ignoreInitial: false },
    gulp.series(sassCompilate)
  );
  gulp.watch(
    "./source/scripts/*.js",
    { ignoreInitial: false },
    gulp.series(javascriptUglify)
  );
  gulp.watch(
    "./source/images/*",
    { ignoreInitial: false },
    gulp.series(imageminCreator)
  );
};
