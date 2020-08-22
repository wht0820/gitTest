const gulp = require("gulp");
const scss = require("gulp-sass");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const connect = require("gulp-connect");
//别忘了先运行一遍每个任务

//html
gulp.task("copy-html", function () {
    return gulp
      .src("*.html")
      .pipe(
        htmlmin({
          removeEmptyAttibutes: true,
          collapseWhitespace: true,
        })
      )
      .pipe(gulp.dest("dist/"))
      .pipe(connect.reload());
  });

//css
gulp.task("index-scss", function(){
    return gulp.src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})


//js
gulp.task("script", function(){
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

//images
gulp.task("images", function(){
    return gulp.src("*.{png,jpg}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

//处理数据
gulp.task("data", function(){
    return gulp.src(["*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

//监听
gulp.task("watch", function(){
    gulp.watch("*.html", ["copy-html"])
    gulp.watch("stylesheet/index.scss", ["index-scss"])
    gulp.watch(["*.js", "!gulpfile.js"], ["script"])
    gulp.watch("*.{png,jpg}", ["images"])
    gulp.watch(["*.json", "!package.json"], ["data"])
})

//服务器
gulp.task("server", function(){
    connect.server({
        root: "dist",
        port: 0820,
        livereload: true
    })
})

//启动
gulp.task("default", ["server", "watch"])