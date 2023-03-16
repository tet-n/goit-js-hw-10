import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const countryName = e.target.value.trim().toLowerCase();

  if (countryName === '') {
    insertHtml();
    return;
  }

  fetchCountries(countryName)
    .then(renderMarkup)
    .catch(error => {
      Notiflix.Notify.failure(error.message);
      insertHtml();
    });
}

function renderMarkup(data) {
  let markup = null;
  if (data.length >= 2 && data.length <= 10) {
    markup = data
      .map(({ name, flags }) => {
        return `<li class="country__item"><img src="${flags.svg}" alt="${flags.alt}" class="country__img" /><h2 class="country__heading">${name.official}</h2>
        </li>`;
      })
      .join('');
    insertHtml(markup);
    return;
  }
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }

  const { name, capital, population, flags, languages } = data[0];
  const allLanguages = Object.entries(languages)
    .map(item => item[1])
    .join(', ');
  markup = `
    <div class="country-info__wrapper"><img src="${flags.svg}" alt="${
    flags.alt
  }" class="country-info__img" />
        <h2 class="country-info__heading">${name.official}</h2></div>
        <ul class="country-info__list">
        <li class="country-info__item"><span class="country-info__name">Capital: </span>${capital}</li>
        <li class="country-info__item"><span class="country-info__name">Population: </span>${population}</li>
        <li class="country-info__item"><span class="country-info__name">Language${
          Object.keys(languages).length === 1 ? '' : 's'
        }: </span>${allLanguages}</li>
        </ul>
      `;
  insertHtml('', markup);
}

function insertHtml(intoUl = '', intoDiv = '') {
  listEl.innerHTML = intoUl;
  divEl.innerHTML = intoDiv;
}
