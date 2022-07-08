import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {MainStack} from './src/routes/config';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
