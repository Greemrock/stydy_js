/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

let promo__adv = document.querySelector(".promo__adv"),
  promo__bg = document.querySelector(".promo__bg"),
  promo__genre = promo__bg.querySelector(".promo__genre"),
  promo__interactive_item = document.querySelectorAll(
    ".promo__interactive-item"
  ),
  movieList = document.querySelector(".promo__interactive-list"),
  promo__adv_title = promo__adv.querySelectorAll(".promo__adv-title"),
  promo__adv_img = document.querySelectorAll(".promo__adv img");

//1
// for (let i = 0; i < promo__adv_img.length; i++) {
// promo__adv_img[i].remove();
// }
promo__adv_img.forEach((item) => {
  item.remove();
});

//2
// promo__genre.remove();
// const genre = document.createElement("div");
// genre.classList.add("promo__genre");
// genre.innerHTML = "Drama";
// promo__bg.prepend(genre);
promo__genre.textContent = "драмма";

//3
promo__bg.style.backgroundImage = "url('img/bg.jpg')";

//4,5
// movieDB.movies.sort();
// for (let i = 0; i < movieDB.movies.length; i++) {
//   movieDB.movies[i] = `${i + 1} ${movieDB.movies[i]}`;
//   promo__interactive_item[i].innerHTML = `
//     ${movieDB.movies[i]} <div class="delete"></div>
//     `;
// }

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
