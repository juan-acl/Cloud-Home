import React, { useEffect, useState } from "react";
import { Files } from "../files/files";
import {NavBar} from '../navbar/navbar'
import {url} from '../url';
import axios from 'axios';
import  Form  from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";


function Main() {

  const [fls, setFls] = useState([]);
  const [filesupload , setFilesupload] = useState([])

  useEffect(() => {
    axios.get(url + 'file/files')
    .then((res) => {
          console.log(res.data)
        })
    .catch((err) => {
        console.log('No vienen los archivos', err)
      })
  }, [filesupload])

  

  const handleChange = (e) => {
    const file = e.target.files 
    setFilesupload(file)
  }

  const cargarArchivos = (e) => {
    e.preventDefault();
    const data = new FormData();
    for(const fl of filesupload) {
      data.append('files', fl)
    }
   axios.post(url + 'file/upload', data)
    .then((res) => {
      console.log('archivos cargados')
    })
    .catch((err) => {
      console.log(err, 'NO se pudo cargar')
    })
    
  }


return (
  <>
      <NavBar />
      <Files />

  <Form className="mb-3" onSubmit={cargarArchivos} >
    <Form.Label> Upload files </Form.Label>
    <Form.Group>
          <Form.Control onChange={handleChange} type='file' multiple />
    </Form.Group>
    <Button variant="primary" type="submit" >
    Upload files
  </Button>
  </Form>
</> 
  
)
}

export {Main};
