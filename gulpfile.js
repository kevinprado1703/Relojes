const { src, dest, watch} = require ('gulp')
const sass = require('gulp-sass') (require ('sass'))
const plumber = require('gulp-plumber')

function css (done){

    // IDENTIFICAR EL ARCHIVO SASS
    src('src/scss/**/*.scss')
    //PLUMBER PARA QUE NO SE DETENGA LA TERMINAL
        .pipe(plumber())

    // COMPILARLO
        .pipe(sass())
    // ALMACENARLA EN EL DISCO DURO
        .pipe(dest('build/css'))
    done(); //Callback que avisa al gulp cuando llegamos al final
}

//FUNCION DE DESARROLLO
function dev(done){
    //ESCUCHA LOS CAMBIO DE TODOS LOS ARCHIVOS SASS Y EJECUTA LA FUNCION CSS
    watch("src/scss/**/*.scss", css); 
    done();    
}

exports.css = css;
exports.dev = dev;