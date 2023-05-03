import { useState } from 'react';
import './App.css';
import React from 'react';
import HornedBeast from './hornedbeast';
import DataArray from "./data.json"
// import { Modal } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



// class Main extends React.Component {
//     render() {
//         return (
// // style={{"width":"100%", "justify-content":"center"}}>
//       <Container style={{'display': "flex", 'flex-wrap':"wrap", "justify-content":'space-between', 'object-fit':'contain'}}>
//             <div className="imageDiv">            
//             <HornedBeast title="CloseUpBigHornedSheep" imageURL="https://modernfarmer.com/wp-content/uploads/2014/08/bighornsheep12001.jpg" description="Close Up Of Big Horned Sheep"/>
//             <HornedBeast title="Chameleon" imageURL="https://upload.wikimedia.org/wikipedia/commons/1/12/Jackson%27s_Chameleon_2_edit1.jpg" description="image of green chameleon with pink flowers"/>
//             {DataArray.map(animals => {
//                return <HornedBeast id={animals._id} title={animals.title} imageURL={animals.image_url} description={animals.description}/>
//             })}
//             </div>
//         </Container>

//         )
//     }
// }

// export default Main;

function Main(props) {
    // map through array and create a new array of horned beast components
    const [filteredBeast, setFilteredBeast] = useState('');
    let filteredArray = DataArray.filter(function (element) {
        console.log(element.horns)
        if (element.horns == filteredBeast || filteredBeast == '') {
            return true
        } else {
            return false;
        }
    })
    
    // filter function returns and accepts one argument and returns true of false 
    let result = filteredArray.map(function (value, index) {

        return <HornedBeast updateFunction={props.updateFunction} updateFunction2={props.updateFunction2} hornedbeast={value} />
    })
    // console.log(result[1].props.hornedbeast.title)
    return (
        <div style={{}} >
            {/* form is a child component of main */}
            <Form>
                {/* this form contains a filter of the dif. num. of horns */}
                <Form.Group>
                    <Form.Label>
                        How Many Horns
                    </Form.Label>

                    <Form.Control as='select' onChange={(event) => {setFilteredBeast(event.target.value)}}>
                        <option value=''>AllHorns</option>
                        <option value='1'>one</option>
                        <option value='2'>two</option>
                        <option value='3'>three</option>
                        <option value='100'>oneHundred</option>
                    </Form.Control>

                </Form.Group>

            </Form>
            {result}


        </div>
    )

}

export default Main;