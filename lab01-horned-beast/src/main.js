import React from 'react';
import HornedBeast from './hornedbeast';
import DataArray from "./data.json"
import Data from './data.json';
import Container from 'react-bootstrap/Container';


class Main extends React.Component {
    render() {
        return (
      <Container style={{display: "flex", 'flex-wrap':"wrap","justify-content":'space-between','object-fit': 'contain'}}>
            <div className="imageDiv">            
            <HornedBeast title="CloseUpBigHornedSheep" imageURL="https://modernfarmer.com/wp-content/uploads/2014/08/bighornsheep12001.jpg" description="Close Up Of Big Horned Sheep"/>
            <HornedBeast title="Chameleon" imageURL="https://upload.wikimedia.org/wikipedia/commons/1/12/Jackson%27s_Chameleon_2_edit1.jpg" description="image of green chameleon with pink flowers"/>
            {DataArray.map(animals => {
               return <HornedBeast id={animals._id} title={animals.title} imageURL={animals.image_url} description={animals.description}/>
            })}
            </div>
        </Container>
        )
    }
}

export default Main;






