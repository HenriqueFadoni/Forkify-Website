// Global app controller
import str from './modules/Search';
import {add as a, multiply, ID} from './views/searchView';
import * as searchView from './views/searchView';

console.log(`Using Imported Functions! ${searchView.add(searchView.ID, 2)} AND ${searchView.multiply(3, 5)}. ${searchView.str}`);