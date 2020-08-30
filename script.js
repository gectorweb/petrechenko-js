'use strict';

let numberOfFilms;


// function part
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {
    },
    genres: [],
    privat: false
};

function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', '');
        let b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (numberOfFilms < 5 && numberOfFilms >= 0) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms >= 10 && numberOfFilms < 50) {
        console.log("Вы классический зритель");
    } else if (numberOfFilms >= 50) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
    }
}

// program part

remeberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();

