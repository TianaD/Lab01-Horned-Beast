import { Modal, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
function SelectBeast(props) {
    return <Modal show={true} onHide={() => {props.close(false)}}>
        <Modal.Header>
        <Modal.Title>{props.dataArray[2]}</Modal.Title>
    </Modal.Header>
        <img src={props.dataArray[1]}></img>
        <Modal.Body>{props.dataArray[0]}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => {props.close(false)}}>
                Close
            </Button>
            <Button variant="primary" onClick={() => { }}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
}

export default SelectBeast