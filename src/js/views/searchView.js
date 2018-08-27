import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResButton.innerHTML = '';
};

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    });

    document.querySelector(`a[href="#${id}"]`).classList.add('results__link--active');
};


// 'Pasta with tomato and spinach'
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit){
        title.split(' ').reduce((acc, cur) =>{
            if ( acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        // return the result
        return `${newTitle.join(' ')} ...`;
    }
    return title;
} 


const renderRecipe = recipe =>{
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

const createButtonPages = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;

const renderButtonPages = (page, numResults, resPerPage) => {
    const numPages = Math.ceil(numResults / resPerPage);
    let button;

    if (page === 1 && numPages > 1){
        // Only button to go to next page
        button = createButtonPages(page, 'next');
    }
    else if (page < numPages){
        // Both buttons
        button = `
            ${createButtonPages(page, 'prev')}
            ${createButtonPages(page, 'next')}
        `;
    }
    else if (page === numPages && numPages > 1){
        // Only button to go to previous page
        button = createButtonPages(page, 'prev');
    }

    elements.searchResButton.insertAdjacentHTML('afterbegin', button);
};


export const renderResults = (recipes, page = 1, resPerPage = 10 ) => {
    // Render Results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    // render pagination
    renderButtonPages(page, recipes.length, resPerPage);
};