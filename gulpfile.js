const gulp = require('gulp');
const tsc = require('gulp-typescript');
const jsonRepos = ['src/*.json', 'src/**/*.json'];

// creating the project as per tsconfig file 
const tscProject = tsc.createProject('tsconfig.json');

// transpiles the project and deliver into 'dist'
gulp.task('scripts', () => {
  const tscResult = tscProject.src()
  .pipe(tscProject());
  return tscResult.js.pipe(gulp.dest('dist'));
});

// to watch .ts files under src folder
gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assets', function() {
  return gulp.src(jsonRepos)
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'assets']);
