const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')

gulp.task('build', () => {
	return gulp.src(['index.js'])
	.pipe(sourcemaps.init())
	.pipe(babel())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('bundle'))
})

gulp.task('default', ['build'])
