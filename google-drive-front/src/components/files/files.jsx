import React, { useEffect, useState } from 'react';
import {url} from '../url'
import axios from 'axios';
import { File } from '../file/file';
import './files.css'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

function Files () {

  const [files, setFiles] = useState([]);
  const [filesupload, setFilesupload] = useState([]);
  const [open, setOpen] = useState(false)

  const fetchData = async () => {
  const response = await axios.get(url + 'file/files')
  setFiles(response.data.files)
    }

useEffect(() => {
    fetchData()
  }, []);

  const handleChange = (e) => {
    const file = e.target.files
    setFilesupload(file)
    setOpen(false)
  }

  const submitFiles = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for(const fl of filesupload) {
      data.append('files', fl)
    }
    axios.post(url + 'file/upload', data)
    .then((res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          color: 'white',
          background: 'rgba(0,0,0,0.9)',
          title: res.data.Message,
          timer: 1000,
          toast: true,
          showCancelButton: false,
          showConfirmButton: false
        })
        const newFile = res.data.files
        setFilesupload(newFile)
        e.target.reset()
        setOpen(prevState => !prevState)
        fetchData()
      })
    .catch((err) => {
        console.log(err)
      })
  }


return (
<div>
    <div className='container' >
      <div className='row' >
          <div>
            <Form onSubmit={submitFiles} className='mb-3' >
              <Form.Group>
                <Form.Control onChange={handleChange} style={{marginTop: 20}} type='file' multiple />
              </Form.Group>
              {!filesupload.length ? <h4 style={{marginTop: 10, marginLeft: 10}}> Seleccione sus archivos para subir </h4> : <Button style={{marginTop: 10}} disabled={open} variant='primary' type='submit' > Upload files </Button> }
            </Form>
          </div>
          {!files.length && <h1 style={{textAlign: 'center'}} >NO CONTENT FILES</h1>}
        {
          files.map((item, index) => {
            return (
              <div className='col-md-2'key={index} >
              <File item={item}  />
              </div>
            )
          })
        }
      </div>
    </div>
    </div>
  )

  }

export {Files};
