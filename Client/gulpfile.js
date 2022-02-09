const gulp =require('gulp');
const gulpSass = require('gulp-sass');
const sass = gulpSass(require('sass'));


gulp.task('watching', async function(){
   gulp.watch('src/components/**/*.scss', async function(){
    gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))

   })
})