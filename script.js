"use strict";

let personalMovieDB = {
    count: 0,
    movies: {
    },
    actors: {
    },
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    remeberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', '');
            let b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (this.count < 5 && this.count >= 0) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 50) {
            console.log("Вы классический зритель");
        } else if (this.count >= 50) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: () => {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyBD: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: () => {
        for (let i = 0; i < 1; i++) {
            const genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres == null || genres == '') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
};


// program part
