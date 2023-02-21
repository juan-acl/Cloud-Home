import React, { useState } from 'react'
import { Files } from "../files/files";
import {NavBar} from '../navbar/navbar'


function Main() {

  const [searchValue, setSearchValue] = useState('')


return (
  <>
    <NavBar 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    <Files 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
  </> 
 )
}

export {Main};
