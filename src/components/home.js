import React, { Component } from 'react';
import Logo from './logo';
import SearchBox from '../containers/search_box';
import RecipesList from '../containers/recipes_list';
import Footer from './footer';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Logo />
        <SearchBox />
        <RecipesList />
        <Footer />
      </div>
    );
  }
}
