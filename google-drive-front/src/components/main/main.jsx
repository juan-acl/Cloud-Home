import React, { useEffect, useState, useReducer } from "react";
import { Files } from "../files/files";
import {NavBar} from '../navbar/navbar'
import {url} from '../url';
import axios from 'axios';
import  Form  from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";


function Main() {

  const [filesupload , setFilesupload] = useState([])
  const [axiosGet, setAxiosGet] = useState([])


    useEffect(() => {
    const fetchData = async () => {
      const data = axios.get(url + 'file/files')
      .then((res) => {
          setFilesupload(res.data.files)
        })
      .catch((err) => {
          console.log(err)
        })
    }
    fetchData();
  }, [])

  const handleChange = (e) => {
    const file = e.target.files 
    setFilesupload(file)
  }

    
  const getFiles = (e) => {
  axios.get(url + 'file/files')
    .then((res) => {
        setAxiosGet(res.data.files)
      console.log('desde el main',res.data)
      })
    .catch((err) => {
        console.log(err, 'No vienen los archivos')
      })
  } 

  const cargarArchivos = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for(const fl of filesupload) {
      data.append('files', fl)
    }
   const result = await axios.post(url + 'file/upload', data)
    .then((res) => {
        setFilesupload(res.data.files)
    })
    .catch((err) => {
      console.log(err, 'NO se pudo cargar')
    })
    
  }






return (
  <>
      <NavBar />
      <Files/>

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
