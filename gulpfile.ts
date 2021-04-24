const gulp = require('gulp');

gulp.task('copy', async () => {
  return new Promise<void>((resolve,reject) => {
    gulp.src('README.md').pipe(gulp.dest("dist/"))
    gulp.src("src/module.json").pipe(gulp.dest('dist/'))
    gulp.src("src/languages/**").pipe(gulp.dest('dist/languages/'))
    gulp.src("src/templates/**").pipe(gulp.dest('dist/templates/'))
    gulp.src("src/styles/**").pipe(gulp.dest('dist/styles/'))
    gulp.src("src/assets/**").pipe(gulp.dest('dist/assets/'))
    resolve();
  });
});

gulp.task('build', gulp.parallel('copy'));



// This is supposed to copy the dist folder into the modules directory for testing. Only works if you've set it up the right way
// This works if development path is FoundryVTT/Data/dev/modules/swade-item-macros
const MODULEPATH = "/dockerconfig/foundry/Data/modules/spellweaver/";

gulp.task('foundry', () => {
  return gulp.src('dist/**').pipe(gulp.dest(MODULEPATH));
});

gulp.task("update", gulp.series('build', 'foundry'));

