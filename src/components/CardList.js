import React from 'react';
//import './CardList.css';
import Card from './Card';

 // we will use robots as properties of cardlist
const CardList = ({robots}) => {
    // map the result of all robots
    // each component should have a key ref should be unicue
   /* 
    const cardComponent = robots.map((user,index)=> {
        return (<Card key = {index}
                    id={robots[index].id} 
                    name ={robots[index].name}
                    email = {robots[index].email}/>);
    });*/
    // integrate cardComponent directly in jsx code 
    /*
    if(true) {
         throw new Error("nooo");
    }*/
    return (
        
        <div>
            {
                /*<Card id={robots[0].id} 
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
             
           to do it dynamically

           we used the map result  
        
        /*
        
        we can call the javascript variable
        cardComponent
        
        or type the javascript directly
        
        */
                robots.map((user,index)=>{
                    return (<Card key = {index}
                        id={robots[index].id} 
                        name ={robots[index].name}
                        email = {robots[index].email}/>);
                })
            }
        </div>
    );
}
export default CardList;