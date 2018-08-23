// Global app controller
import axios from 'axios';

async function getResults(query){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'a1685a84cea0c16a0f75876629347f43';
    try{
        const result = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = result.data.recipes;
        console.log(recipes);
    }
    catch(error) {
        alert(error);
    }
}
getResults('pizza');