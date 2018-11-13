import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import RecipeDetail from './components/recipe';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>
       <Route path="/recipes/:id" component={RecipeDetail} />
       <Route path="/" component={Home} />
       
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
