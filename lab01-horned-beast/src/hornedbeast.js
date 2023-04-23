// Importing essentials from different components
// import './App.css';
import { useState } from 'react';
// import { ReactComponent as Favorite } from './favorite.svg';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import React from 'react';


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




function HornedBeast(props) {
  // Setting a state for our color, clicks, and favorite so we can update it once it
  const [clicks, setClicks] = useState(0);
  let [isFavorited, setIsFavorited] = useState(false)
  let [defaultColor, setDefaultColor] = useState("White")

  function imageClick(){
   // This is a conditional check, if its favorited, it won't turn red, and if its white it will turn red
    setIsFavorited(!isFavorited);
    if (!isFavorited) {
      setDefaultColor("Red");
    } else {
      setDefaultColor("White");
    }
    // Another condition, if favorite is true the count wont be increased until its false
    if (isFavorited === true){
      return;
    }else {
      setClicks(clicks + 1) 
    }
 
  }
  return (
    // Here I'm forming a container div that contains my card
    <>
        {/* Here I'm creating a card, with my img, title, and text contained with my like button */}
        <Card style={{ width: '18rem' , color:'black'}}>  
            {/* This includes the Name of the beast, its alt,src,and title, and the description*/}
            <Card.Img variant="top"alt={props.alt} src={props.imageURL} title={props.title} className="dragons"/>
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text>{clicks}</Card.Text>
                {/* <Favorite stroke='red' stroke-width="14" fill={defaultColor} onClick={imageClick}/> */}
              </Card.Body>
        </Card>
</>

  
  );
}

export default HornedBeast;