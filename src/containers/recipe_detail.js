import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../actions/index.js';
import { Link } from 'react-router-dom';



class RecipeDetail extends Component {
    
   componentDidMount() {
        
        console.log(this.props);
        this.props.fetchRecipe(this.props.id);
   }
   
    
   
    render() {
        if (this.props.recipe === []){
            return <div>Loading..</div>
        }
        return (
        <div>
            <p>{this.props.recipe.name}</p>
            <Link to="/"><button>Back</button></Link>
        </div>
        )
    
    }
}





function mapStateToProps(state){
    
    return {recipe: state.recipe};
}

export default connect(mapStateToProps, { fetchRecipe })(RecipeDetail);