import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Bounce, Flip, Hinge, JackInTheBox, Slide } from 'react-awesome-reveal';
import { Button, Fade, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function Note({note, getUserNotes}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit:updaeNote,
  });
  function updaeNote(values){
console.log(values)
axios.put(`https://note-sigma-black.vercel.app/api/v1/notes/${note._id}`,values,  {
  headers: {
    token: `3b8ny__${localStorage.getItem("userToken")}`,
  },
})
.then((res)=>{console.log(res)
  getUserNotes()
})

.catch((err)=>{console.log(err);
  
})
.finally(()=>{
  handleClose()
})
  }
  function deletNote(){
    axios
    .delete(`https://note-sigma-black.vercel.app/api/v1/notes/${note._id}`, {
      headers: {
        token: `3b8ny__${localStorage.getItem("userToken")}`,
      },
    })
    .then((res) => {
      console.log(res);
      getUserNotes()
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return<>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButten>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              onChange={formik.handleChange}
              className="form-control my-3"
              type="text"
              name="title"
              id="title"
              placeholder="please Enter Title"
            />
            <textarea
              onChange={formik.handleChange}
              className="form-control my-3"
              name="content"
              id="content"
            ></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={formik.handleSubmit}>
          Updae Note
          </Button>
        </Modal.Footer>
      </Modal>
     <div className="col-md-6 p-3">
     <Slide>
        <div>
        <Card style={{ width: '19rem' }}>
        <Card.Body>
        <Card.Title>{note?.title}</Card.Title>
        
        <Card.Text>{note?.content} </Card.Text>
        <i className="bi bi-pencil-square bi-x1 mx-3 " variant="primary" onClick={handleShow}></i>
        <i className="bi bi-trash-fill  mx-3" onClick={deletNote}></i>
      </Card.Body>
    </Card>
        </div>
        </Slide>
      
    
    </div>
    
  </>
 
}
