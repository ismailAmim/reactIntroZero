import React from 'react';
//import './Card.css';
 
// you can deconstruct props here 
// receiving the card properties and destructing them
const Card = ({id,name,email} /*props*/) => {
    //another way you can deconstruct props here 
    //const {id, name, email} = props;
    return ( 
        <div className ="tc bg-liht-green dib br3 pa3 ma3 grow bw2 shadow-5 ">
          {/* <img alt = "test" src = "https://robohash.org/test?200x200" / >*/}
         {/* 

          <img alt = "test" src = {`https://robohash.org/${props.id}?200x200`} />
           <h2>{props.name}</h2>
           <p>{props.email}</p>

        so we can use deconstructed properties directly
        */}
        <img alt = "test" src = {`https://robohash.org/${id}?200x200`} />
           <h2>{name}</h2>
           <p>{email}</p>
        </div>
    );
}
export default Card;