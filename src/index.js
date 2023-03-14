import './css/styles.css';
import debounce from 'lodash.debounce';

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

  fetchCountries(countryName).then(renderMarkUp);
}

function renderMarkUp(data) {
  if (data.length >= 2) {
    let markup = data
      .map(({ name, flags }) => {
        return `<li class="country__item"><img src="${flags.svg}" class="country__img" /><h2 class="country__heading">${name.official}</h2>
        </li>`;
      })
      .join('');
    console.log(markup);
    insertHtml(markup);
  }
}

function insertHtml(li = '', div = '') {
  listEl.innerHTML = li;
  divEl.innerHTML = div;
}
