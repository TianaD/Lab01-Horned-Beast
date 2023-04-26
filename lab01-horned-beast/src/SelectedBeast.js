import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import HornedBeast from "./hornedbeast";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Form } from "react-bootstrap";

function SelectedBeast(props) {
    const {show, setShow} = useState(true);
    
    const {handleClose} = () =>(false);
    const {handleShow} = () =>(true);
  return (
    <>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{props.HornedBeast.title}</Modal.Title>
    </Modal.Header>
    {/* <img src={props.HornedBeast.image_url}></img> */}
    <Modal.Body>{props.HornedBeast.description}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer> 
    </Modal>
    </>
  );
}

export default SelectedBeast;