import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { RootNavigator } from './src/navigation/RootNavigator';
import { colors } from './src/theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundDark}
      />
      <RootNavigator />
    </Provider>
  );
};

export default App;
