import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './main';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function App() {
  const [displaySelectedBeast, setDisplaySelectedBeast] = useState(true);

  // let SelectedBeast = <SelectedBeast/>
  // if(displaySelectedBeast === false){
  //   SelectedBeast = <></>
  // }

  // use this function as a prop to pass it down to children elements 
  return (

    <div className="App">
      <Header />
      <Button onClick={() => {
        console.log("test")
        if (displaySelectedBeast === true) {
          setDisplaySelectedBeast(false)
        } else {
          setDisplaySelectedBeast(true)
        }

      }}>display</Button>
      <Main updateFunction={setDisplaySelectedBeast} data={data} />
      {/* conditionally display selected beast component with a state -- line 9*/}
      {displaySelectedBeast === true ? <SelectedBeast /> : <></>}

      {/* <Main /> */}
      {/* import from horned beast to main and from main to app  */}
      <Footer />


    </div>
  );
}

export default App;

