import React, { useEffect, useState } from 'react';
import {url} from '../url'
import Axios from 'axios';
import  Box  from '@mui/material/Box';
import { Container } from '@mui/material';
import { File } from '../file/file';

function Files () {
  




  const [files, setFiles] = useState([])
  
  const getFiles = () => {
    Axios.get(url + 'file/files')
    .then((res) => {
      setFiles(res.data.files)
    })
    .catch((err) => {
      console.log(err)
    })}

  useEffect (() => {
    getFiles();
  }, []);

  return (
<div>
<div>
<div>
    <div className='container' >
      <div className='row' >
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
    </div>
    </div>
  )
}

export {Files};
