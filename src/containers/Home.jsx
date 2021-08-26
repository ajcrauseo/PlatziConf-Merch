/* eslint-disable arrow-body-style */
import React from 'react';
import { Helmet } from 'react-helmet';

import Products from '../components/Products';

import initialState from '../initialState';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Productos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ajcrauseo" />
        <meta name="twitter:creator" content="@ajcrauseo" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta name="twitter:image" content="shorturl.at/qISV2" />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta property="og:image" content="shorturl.at/qISV2" />
        <meta
          property="og:url"
          content="https://platzi-conf-merch-324000.web.app/"
        />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
};

export default App;
