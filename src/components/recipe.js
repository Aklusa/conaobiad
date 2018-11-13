import React, { Component } from 'react';

import Logo from './logo';
import RecipeDetail from '../containers/recipe_detail';
import Footer from './footer';

export default class Recipe extends Component {
  
  
    render() {
      return (
        <div>
          <Logo />
          <RecipeDetail 
          id = { this.props.match.params.id } />
          <Footer />
        </div>
      );
    }
  }