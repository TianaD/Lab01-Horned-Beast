import React from 'react';
import HornedBeast from './hornedbeast';
import DataArray from "./data.json"

class Main extends React.Component {
    render() {
        return (
            <>            
            <HornedBeast title="CloseUpBigHornedSheep" imageURL="https://modernfarmer.com/wp-content/uploads/2014/08/bighornsheep12001.jpg" description="Close Up Of Big Horned Sheep"/>
            <HornedBeast title="Chameleon" imageURL="https://upload.wikimedia.org/wikipedia/commons/1/12/Jackson%27s_Chameleon_2_edit1.jpg" description="image of green chameleon with pink flowers"/>
            {DataArray.map(animals => {
               return <HornedBeast title={animals.title} imageURL={animals.image_url} description={animals.description}/>
            })}
            
            
            
            </>
        )

    }
}

export default Main;
