import React, {Component} from 'react'

import { connect } from 'react-redux'
import { getIngredients } from '../actions/index.js'
import { getRecipes } from '../actions/index.js'
import { bindActionCreators } from 'redux'


import { MyForm,
         FilteredIngredient,
         FilteredIngredients,
         IngredientsList,
         Ingredient,
         SearchBar,
         FindButton,
         Delete} from '../../style/searchBox'

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            // ingredients: ['buraki czerwone','ryż','mąka pszenna','kasza jęczmnienna', 'kasza gryczana','ogórek','jaja','zsiadłe mleko', 'mleko', 'czosnek', 'ziemniaki', 'jabłko', 'wieprzowina', 'wołowina', 'kurczak', 'masło', 'ananas'],
                        searchTerm: '',
                        filteredItems : [],
                        ingredientsBox: []};
        this.onInputChange = this.onInputChange.bind(this);
        this.addToIngBox = this.addToIngBox.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
        this.findRecipes = this.findRecipes.bind(this);
        this.FIBorder =false;
        this.ILBorder= false;
       
    }

    // componentDidMount(){
    //     this.state.ingredientsBox.length === 0 ? this.ILBorder = false : true;
    // }
    
    onInputClick(){
        this.props.getIngredients();
    }

    onInputChange(event) {
            this.setState({searchTerm: event.target.value})
            this.filterIngredients(event.target.value);
    }

    filterIngredients(value){
    if(value === '') {this.setState({filteredItems: []})}
    else
    {this.FIBorder= true;const filtered = this.props.ingredients.filter(ingredient=>{
        return ingredient.match(value)
    })
    this.setState({filteredItems: filtered})}

    }

    addToIngBox(event){
        this.FIBorder= false;
        this.ILBorder = true;
        console.log(this.props);
        this.setState({
            ingredientsBox: [...this.state.ingredientsBox, event.target.innerHTML],
            filteredItems: [],
            searchTerm: ''
          })
       

                 
    }

    checkIfEmpty(arrayData){
        
        // this.state.ingredientsBox.length === 0 ? this.ILBorder = false : true;
        
    }

    removeIngredient(event){
        event.preventDefault();
        console.log(this.state.ingredientsBox.length)
        this.state.ingredientsBox.length === 1 ? this.ILBorder = false : true;

        const index = Number(event.target.getAttribute("data-key"));
        const arrayData = this.state.ingredientsBox;
        this.setState({ 
                ingredientsBox:[...arrayData.slice(0, index), ...arrayData.slice(index+1, arrayData.length)]
              }, this.checkIfEmpty(arrayData));
        
        
        
   };

//    componentWillReceiveProps(nextProps){
//     if(nextProps.recipes!==this.props.recipes){console.log(nextProps.recipes)}
//     }

    findRecipes(event){
        event.preventDefault();
        this.props.getRecipes(this.state.ingredientsBox);  

    }

    
    
    

    render() {
        return(
          
        <MyForm>
            
            <SearchBar
            placeholder="&#61442; Wprowadź składniki"
            value = {this.state.searchTerm}
            onClick = {this.onInputClick}
            onChange = {this.onInputChange} />
            <FilteredIngredients FIBorder={this.FIBorder}>
                {this.state.filteredItems.map( ingredient =>{
                    return <FilteredIngredient
                            key={ingredient}
                            onClick= {this.addToIngBox}>{ingredient}</FilteredIngredient>
                }
                    
                )}
             </FilteredIngredients>
             
                 <IngredientsList ILBorder={this.ILBorder}>
                    {this.state.ingredientsBox.map((ingredient, i) => {
                        return <Ingredient 
                                    key={i+1}>{ingredient}
                                            <Delete  data-key={i}
                                                    onClick ={this.removeIngredient}
                                                    >x</Delete>
                                </Ingredient >
                    })}
                    
                    
                 </IngredientsList>
                
                <FindButton onClick={this.findRecipes}>Szukaj</FindButton>
        </MyForm>
        
        )
    }




}



function mapDispatchToProps(dispatch){
    return bindActionCreators({getIngredients, getRecipes}, dispatch);
}

function mapStateToProps(state){
    
    return {ingredients: state.ingredients, recipes: state.recipes};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);