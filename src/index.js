import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/reducer";

//Load data stored in localStorage
function loadState() {
  const serializedState = localStorage.getItem("state");
  if (!serializedState) {
    return undefined;
  }
  return JSON.parse(serializedState);
}

//Save data to localStorage
function saveState(state) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
}

const persistedState = loadState();

//Create store with persisited data
const store = createStore(rootReducer, persistedState);

//save data to localStorage on updates
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
