import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import store from 'components/redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store.store}>
     {/* <PersistGate loading={null} persistor={store.persistor}> */}
     <BrowserRouter basename="/rental-ua">
    <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
