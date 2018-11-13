import axios from 'axios';
import _ from 'lodash';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_RECIPES = 'GET_RECIPES';
export const FETCH_RECIPE = 'FETCH_RECIPE';

const recipes = [
    {id: "1", ingredients: ['ziemniaki', 'kurczak', 'wieprzowina'], name: "dinner1", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nunc ac molestie venenatis. Quisque sollicitudin justo suscipit, euismod ex id, finibus ante.", imageURL:"https://st.depositphotos.com/1259239/3575/v/950/depositphotos_35755611-stockillustratie-zwarte-bestek-symbool.jpg"},
    {id: "2", ingredients: ['ziemniaki', 'wieprzowina', 'masło'], name: "dinner2", description:"Praesent tempor, ipsum eget pellentesque ornare, quam tellus interdum metus, ut condimentum magna odio vel est. Aenean eu lacus cursus, faucibus sem in, ornare ipsum.", imageURL:"https://st.depositphotos.com/1259239/3575/v/950/depositphotos_35755611-stockillustratie-zwarte-bestek-symbool.jpg"},
    {id: "3", ingredients: ['ziemniaki', 'wołowina', 'buraki czerwone'], name: "dinner3", description:"Sed malesuada nisi purus, nec suscipit dui ornare eu. Pellentesque pharetra tortor vel leo bibendum, vitae feugiat leo condimentum.", imageURL:"https://st.depositphotos.com/1259239/3575/v/950/depositphotos_35755611-stockillustratie-zwarte-bestek-symbool.jpg"},
    {id: "4", ingredients: ['ryż', 'kurczak', 'ananas'], name: "dinner4", description:"Nullam iaculis, eros egestas porttitor eleifend, nibh mauris volutpat metus, eu feugiat orci metus fringilla massa. Nunc sed nisi molestie, mattis ante id, maximus turpis.", imageURL:"https://st.depositphotos.com/1259239/3575/v/950/depositphotos_35755611-stockillustratie-zwarte-bestek-symbool.jpg"},
    {id: "5", ingredients: ['ryż', 'wieprzowina', 'ogórek'], name: "dinner5", description:"Fusce viverra eleifend ante ac pretium. Morbi eu erat ac nunc auctor rutrum. Quisque porta ipsum dictum, scelerisque ante eget, aliquam odio. Nulla dapibus tempor rutrum.", imageURL:"https://st.depositphotos.com/1259239/3575/v/950/depositphotos_35755611-stockillustratie-zwarte-bestek-symbool.jpg"},
    {id: "6", ingredients: ['ryż', 'wołowina', 'buraki czerwone'], name: "dinner6", description:"Fusce viverra eleifend ante ac pretium. Morbi eu erat ac nunc auctor rutrum. Quisque porta ipsum dictum, scelerisque ante eget, aliquam odio. Nulla dapibus tempor rutrum.", imageURL:"https://st.depositphotos.com/1259239/3575/v/950/depositphotos_35755611-stockillustratie-zwarte-bestek-symbool.jpg"},
    {id: "7", ingredients: ['mleko', 'ziemniaki', 'jaja'], name: "dinner7", description:"Fusce viverra eleifend ante ac pretium. Morbi eu erat ac nunc auctor rutrum. Quisque porta ipsum dictum, scelerisque ante eget, aliquam odio. Nulla dapibus tempor rutrum.", imageURL:"https://st.depositphotos.com/1259239/3575/v/950/depositphotos_35755611-stockillustratie-zwarte-bestek-symbool.jpg"},
    {id: "8", ingredients: ['mąka pszenna', 'mleko', 'ananas'], name: "dinner8", description:"Vivamus suscipit ut nibh sed pellentesque. Quisque justo elit, maximus vitae justo ac, porta faucibus mauris. Nunc vel tempus eros, eget lobortis turpis.", imageURL:"https://st.depositphotos.com/1259239/3575/v/950/depositphotos_35755611-stockillustratie-zwarte-bestek-symbool.jpg"},
    {id: "9", ingredients: ['mąka pszenna', 'mleko', 'wieprzowina'], name: "dinner9", description:"Vivamus condimentum aliquet libero, vel ultrices lectus accumsan ac. Pellentesque quis diam diam. Vestibulum ut ipsum eu lectus pellentesque fringilla.", imageURL:"https://st.depositphotos.com/1259239/3575/v/950/depositphotos_35755611-stockillustratie-zwarte-bestek-symbool.jpg"},
    {id: "10", ingredients: ['kurczak', 'wieprzowina', 'mąka pszenna'], name: "dinner10", description:"Donec pulvinar augue ex, vel laoreet elit faucibus at. Nam quis vulputate justo, sit amet sodales risus. Donec ut nibh massa. Sed id dapibus augue.", imageURL:"https://st.depositphotos.com/1259239/3575/v/950/depositphotos_35755611-stockillustratie-zwarte-bestek-symbool.jpg"}
];

export function getIngredients(){

    const ingredients = ['buraki czerwone','ryż','mąka pszenna','kasza jęczmnienna', 'kasza gryczana','ogórek','jaja','zsiadłe mleko', 'mleko', 'czosnek', 'ziemniaki', 'jabłko', 'wieprzowina', 'wołowina', 'kurczak', 'masło', 'ananas']

    return  {
        type: GET_INGREDIENTS,
        payload: ingredients
    }
}

export function getRecipes(userIngredients){

    

    let recipesFound = [];

    const conformance = function() {
        recipes.forEach(function(ingredient){
            
            let counter = 0;
            const z = ingredient.ingredients;
            z.forEach(function(zIngredient){
                
                userIngredients.forEach(function(userIngredient){
                                        
                    if (userIngredient === zIngredient){
                        counter++
                }                
                })
                                
            })
            if (counter >= 2 && counter >= (2/3)*z.length){
                recipesFound.push(ingredient)
                
            }            
        })
       } 
       conformance();
   

    return {
        type : GET_RECIPES,
        payload : recipesFound
    }

}

export function fetchRecipe(id){

    const recipesById = _.mapKeys(recipes, 'id');
    
    
    return {
        type: FETCH_RECIPE,
        payload: recipesById[id]
    }

}