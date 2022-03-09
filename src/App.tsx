import React from 'react';

import Navigation from './navigation';

const Main = () => {
  const currUser = {
    id: '2312-3213-231',
    firstName: 'Gian Joseph',
    lastName: 'Sanchez',
  };
  return <Navigation user={currUser} />;
};

const App = () => <Main />;

export default App;
