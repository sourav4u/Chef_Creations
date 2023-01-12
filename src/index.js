import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addData } from './store/actions/action';
import firstReducer from './store/reducer/mainReducer';


export const store = createStore(firstReducer);



store.dispatch( addData() );




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store} >
      <App />
    </Provider>
  </>
);


