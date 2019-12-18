const { gulp, src, dest, watch, series, parallel } = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');

var paths = {
	fonts: {
		src: 'src/fonts/**/*.{woff,woff2}',
		dist: 'dist/assets/fonts/'
	},
	images: {
		src: 'src/img/**/*.{jpg,jpeg,png,svg,ico,webp}',
		dist: 'dist/assets/img/'
	},
	markup: {
		src: 'src/markup/pages/*.pug',
		dist: 'dist'
	},
	scripts: {
		src: 'src/js/**/*.js',
		dist: 'dist/assets/scripts/'
	},
	styles: {
		src: 'src/styles/**/*.styl',
		dist: 'dist/assets/styles/'
	}
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
	// You can use multiple globbing patterns as you would with `src`,
	// for example if you are using del 2.0 or above, return its promise
	return del(['assets']);
}



function fonts() {
	return src(paths.fonts.src)
		.pipe(dest(paths.fonts.dist))
}

function images() {
	return src(paths.images.src)
		.pipe(dest(paths.images.dist))
}

function markup() {
	return src(paths.markup.src)
		.pipe(pug({
			pretty: true
		}))
		.pipe(dest(paths.markup.dist))
}

function scripts() {
	return src(paths.scripts.src, { sourcemaps: true })
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(dest(paths.scripts.dist));
}

function styles() {
	return src(paths.styles.src)
		.pipe(stylus({
			compress: true
		}))
		// pass in options to the stream
		.pipe(rename({
			basename: 'style',
			suffix: '.min'
		}))
		.pipe(dest(paths.styles.dist));
}



// function watch() {
// 	watch(paths.scripts.src, scripts);
// 	watch(paths.styles.src, styles);
// 	watch(paths.images.src, images);
// }

const dev = series(clean, series(fonts, images, markup, styles, scripts))
const build = series(clean, parallel(fonts, images, markup, styles, scripts));


exports.clean = clean;
exports.fonts = fonts;
exports.images = images;
exports.markup = markup;
exports.scripts = scripts;
exports.styles = styles;

exports.watch = watch;

exports.dev = dev;
exports.build = build;

exports.default = dev;