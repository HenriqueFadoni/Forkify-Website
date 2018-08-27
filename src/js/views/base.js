export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchDivAnimation: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list'),
    searchResButton: document.querySelector('.results__pages'),
    
};

export const elementStrings = {
    loader: 'loader'
};

export const renderLoaderAnimation = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoaderAnimation = () =>   {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) {
        loader.parentElement.removeChild(loader);
    }
};