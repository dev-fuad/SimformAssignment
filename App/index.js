import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import AppNavigation from './components/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
