import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { Container,
         RecipeContainer,
         RecipeList,
         Recipe,
         RecipeListImg,
         RecipeListTextContainer,
         Name,
         Description,
         Hr} from '../../style/recipesList'

class RecipesList extends Component {
    constructor(props){
        super(props);
        this.border = false;
    }

    componentDidMount(){
       this.border = true;
    }

   componentDidUpdate(){

   }
    

   componentWillReceiveProps(nextProps){
        nextProps.recipes.length===0? this.border = false: this.border = true;
        console.log(this.border)
         }
    
   
    render() {
        
        return (
        <Container border={this.border}>
            <RecipeList >
          { this.props.recipes.map((property)=>{
        
          return (
            <Recipe key={property.id}>
            <Link style={{ textDecoration: 'none' }} to={`/recipes/${property.id}`}>
              
                <RecipeContainer>
                    <RecipeListImg src={`${property.imageURL}`} />
                    <RecipeListTextContainer>
                        <Name>{property.name}</Name>
                        <Hr></Hr>  
                        <Description>{property.description}</Description>
                    </RecipeListTextContainer>
                </RecipeContainer>
              </Link>
              </Recipe>
         
          
            )
         })}
          </RecipeList>
        </Container>
        )
    
    }
}


function mapStateToProps(state){
    
    return {recipes: state.recipes};
}

export default connect(mapStateToProps)(RecipesList);