var gulp = require('gulp')
var fs = require('fs')

fs.readdirSync(__dirname + '/gulp')
.forEach(function (task) {
    require('./gulp/' + task)
})

gulp.task('watch:js', gulp.series('js', function(){
	gulp.watch('ng/**/*.js', ['js'])
}))

gulp.task('watch:css', function() {
    gulp.watch('css/**/*.styl', ['css'])
})

gulp.task('dev', gulp.series('watch:css', 'watch:js', 'dev:server'))
