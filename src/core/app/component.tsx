import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from 'src/core/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import Navigation from '../navigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
