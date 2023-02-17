import React, { useState } from "react";
import { Files } from "../files/files";
import {NavBar} from '../navbar/navbar'
import {url} from '../url';
import axios from 'axios';
import { Archive } from "@mui/icons-material";




function Main() {


  const [filesupload , setFilesupload] = useState([])

  const handleChange = (e) => {
    const file = e.target.files[0]
    file.isUpLoading = true;
    setFilesupload([...filesupload, file])
  }

  const cargarArchivos = (e) => {
    e.preventDefault();
    axios.post(url + 'file/upload', filesupload)
    .then((res) => {
      console.log('archivos cargados')
    })
    .catch((err) => {
      console.log(err)
    })
  }


return (
  <div>
  <NavBar />
<div >
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label> Seleccione sus archivos: </label>
        <input name="files" id='files' onChange={handleChange} type='file' placeholder="browser" />

  </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={cargarArchivos} >Save changes</button>
      </div>
    </div>
  </div>
</div>

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
</div>
  <Files />
  </div>
)
}

export {Main};
