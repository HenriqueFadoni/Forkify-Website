// Global app controller
import Search from './modules/Search';
import * as searchView from './views/searchView';
import { elements, renderLoaderAnimation, clearLoaderAnimation } from './views/base';

/** Global state of the app
 * - Search Object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput(); //TO DO

    if(query){
        // 2) New search object and add to the state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoaderAnimation(elements.searchDivAnimation);

        // 4) Search for recipes
        await state.search.getResults();

        // 5) Render results on UI
        clearLoaderAnimation();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResButton.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});