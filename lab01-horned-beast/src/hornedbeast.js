// Importing essentials from different components
// import './App.css';
import { useState } from 'react';
// import { ReactComponent as Favorite } from './favorite.svg';
import { Card, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { propTypes } from 'react-bootstrap/esm/Image';
import React from 'react';


// class HornedBeast extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>{this.props.title}</h2>
//                 <img src={this.props.imageURL} alt="HornedAnimals"/>
//                 <p>{this.props.description}</p>
//             </div>
//         )
//     }
// }

// export default HornedBeast;


// add prop.selectedBeast function 

function HornedBeast(props) {
  // Setting a state for our color, clicks, and favorite so we can update it once it
  const [clicks, setClicks] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false)
  let heart = "🤍" // default heart color
  if (clicks === true) {
    heart = "💗"
  }


  return (
  <div style={{}}>
  <h1>{props.beast.title}</h1>
  <img width = {200} src = {props.beast.image_url} />
  <h1>{props.beast.description}</h1>
  <h1 onClick = {function () {
    if(isFavorited === 0){
      setIsFavorited(1)
    }
    setClicks(true)
    if(heart === "💗"){
      setIsFavorited(isFavorited + 1)
    }
  }}>{heart}{isFavorited}</h1>
  </div>
  );

}


export default HornedBeast;
