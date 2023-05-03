import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './main';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SelectBeast from './SelectBeast';

function App() {
  // displaying something on the webpage based on the current value of the state which I define 
  const [displaySelectedBeast, setDisplaySelectedBeast] = useState(false);
  const [dataArray, setDataArray] = useState(['merryChristmas', 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg', 'nanoB']);

  // use this function as a prop to pass it down to children elements 
  return (

    <div className="App">
      <Header />
      {/* Importing form component - rendering in browser under header above main  */}

      <Main updateFunction={setDisplaySelectedBeast} updateFunction2={setDataArray} data={data} />
      {/* conditionally display selected beast component with a state -- line 9*/}
      {displaySelectedBeast === true ? <SelectBeast dataArray={dataArray} close={setDisplaySelectedBeast} /> : <></>}
      {/* <SelectBeast /> */}
      {/* <Main /> */}
      {/* import from horned beast to main and from main to app  */}
      <Footer />


    </div>
  );
}

export default App;

