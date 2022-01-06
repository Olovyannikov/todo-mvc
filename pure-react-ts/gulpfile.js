const svg_folder = './src/client/resources/img/svg/*.svg';
const sprite_folder = './src/client/resources/img/sprite/';

const del = require('del');
const svg = require('gulp-svg-sprite');
const {dest, series, src} = require('gulp');

const clean = () => del(sprite_folder);

const sprite = () => {
    return src('./src/client/resources/img/svg/**/*.svg')
        .pipe(svg({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(dest('./src/client/resources/img/sprite/'))
};

exports.default = series(clean, sprite);