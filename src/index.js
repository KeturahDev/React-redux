import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {Provider} from "react-redux"
import {createStore} from "redux"
import rootReducer from "./reducers"

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//coming back from lunch:
//sort not working becuase database is now an object full of objects attach to keys.. how can I sort? should I do away with sorting? can you sort by key values of an OBJECT
//replace instances of setState with getState... refer to bean proj?
//I can do iiiiit

