import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {searchRobots} from './reducers';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Hello from './Hello'; 
//import Card from "./Card";
//import {robots} from "./robots";
// robot import is not default 
//import CardList from "./CardList";
import App from './containers/App';

// create the redux store
const store = createStore(searchRobots);


ReactDOM.render(
      <div>{/* 
          <Card id={robots[0].id} 
                name ={robots[0].name}
                email = {robots[0].email}
          /><Card id={robots[1].id} 
                name ={robots[1].name}
                email = {robots[1].email}
          />
          <Card id={robots[2].id} 
                name ={robots[2].name}
                email = {robots[2].email}
          />

          we can create  a cardlist parent of card components
          */}
          {/*<CardList robots={robots}/>
             assign the store state as a property
          */}
          <Provider  store={store}>
               <App />
          </Provider>
    </div>

    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();