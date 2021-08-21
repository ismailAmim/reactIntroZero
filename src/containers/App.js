import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'; 
//import { robots } from './robots';
import './App.css';

// import actions and reducers and connect 
//  component that needs states
import {setSearchField,reuestRobots} from '../actions';

// we declare connect variabes
const mapStateToProps = state => {
    return  {
        // we searchField state from index.js store reducer
        // store = createStore(searchRobots);
        // props used searchField
        // because we have one state property 
        // searchField : state.searchField
        // if theres is multiple reducers 
        // we should define the exact reducer property
        searchField : state.searchRobots.searchField,
        robots : state.reuestRobots.robots,
        isPending :state.reuestRobots.isPending,
        isError : state.reuestRobots.isError
    }
}

// dispatch actions as properties
const mapDispatchToProps = (dispatch)=> {
    return { 
           // props used onSearchChange
           // event dispatch action of seraching a text input
           onSearchChange : (event)=>dispatch(setSearchField(event.target.value)),
           // redux-hunk expect as return of an action a function with a dispatch as a parameter
           // in our case reuestRobots(dispatch)
           // onReuestRobots :()=> reuestRobots(dispatch)
           onReuestRobots :()=> dispatch(reuestRobots())
        }
}

/*
const App =()=> {
         return ( you should always return one element 
                    we can grab all elemnts in one <div> 
                <div>
                   <h1>rofots friends </h1>
                   <SearchBox/>
                    <CardList robots = {robots}/>
                 </div>
         ) ;  

}*/
// to use state , we should use the class component syntax
// create an object that conatins infos from cardlist and searchbox
/*
const state = {
     robots : robots,
     searchfield: ""
};*/
class App extends Component {
    // we use state on constructor
  /*  constructor(){
     to use the Component parent  object
        super()
        this.state = {
             initial value an empty array
            robots : [],
            robots: robots,
            we get searchField from mapStateToProps
            searchfield : ""
        }
        console.log("constructor");
    }
*/
//  react hook componentDidMount() {}
componentDidMount () {
  // the store values
  //console.log(this.props.store.getState());


    // after component is mounted we can change the state of robots
    // we can fetch to make reuest for data from an API like this
    // get data as a JSON 
/*
   fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots :users} 
             {}  render() will do <h1>Loading </h1>  '));
        console.log(this.state)
*/
     // can replace the fetch users call  by onReuestRobots passed as property
    
     this.props.onReuestRobots();

   // or locally like this 
   // we first import robots from robots.js then we change the state
   // this.setState({robots:robots});
   // console.log("componenDidMount");
}

    // create custom searchChange function
   // if you create your own function you just create it with an arrow function
   
   // now we get this method from mapdispatchToProps
   /*
    onSearchChange= (event)=>{
        // result of text searched 
        this.setState({
            searchfield : event.target.value
        });
    }
*/

    render () {
        // we can filter cards on reponse of searchfiled change
        /*
        const filteredSearch = this.state.robots.filter(
            robot=> {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
             
        });*/

        // for readable code we can deconstruct the state 
        // const {robots/*,searchfield */}=this.state;
        // we get searchField an onSearchChange from props
        // we get robots from onReuestRobots
        //  contains  { robots, isPending , isError }
        const {searchField, onSearchChange,robots,isPending} =this.props;
        console.log(robots);
        const filteredSearch =robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase());
            });
        console.log("render");
        /*
        if (this.state.robots.length===0) {
            return <h1>Loading</h1>
        }else {
        return ( 
                <div className="tc">
                    <h1 className="f1">rofots friends </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    scroll can use cardlist properties 
                    <Scroll>
                    <CardList robots = { robots this.state.robots  filteredSearch}/>
                    </Scroll>
                 </div>  
        );
    }*/
         return isPending ? 
               <h1>Loading</h1> 
            : <div className="tc">
                 <h1 className="f1">rofots friends </h1>
                    <SearchBox searchChange={/*this.*/onSearchChange}/>
                        <Scroll>
                           <ErrorBoundary>
                               <CardList robots = {filteredSearch}/>
                            </ErrorBoundary>
                        </Scroll>
              </div>
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(App);