/* eslint-disable arrow-body-style */
import React from 'react';

import Products from '../components/Products';

import initialState from '../initialState';

const App = () => {
  return <Products products={initialState.products} />;
};

export default App;
