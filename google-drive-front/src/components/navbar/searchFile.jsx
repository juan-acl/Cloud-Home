import React from "react"
import SearchIcon from '@mui/icons-material/Search'
import { TextField } from "@mui/material";
import './searchValues.css'


function SearchFile ({searchValue, setSearchValue}) {

  const changeSearch = (e) => {
    setSearchValue(e.target.value)
  }

return (
 <div className="TextFieldContainer" style={{color: '#fff'}} >
      <SearchIcon sx={{marginTop: 2}} />
    <TextField id="standard-basic" 
        type='text'
        label="Search" 
        placeholder="Search"
      className="textField" InputLabelProps={{className: 'textfield__label'}} 
          onChange={changeSearch}
    />
</div>

  )
}
export {SearchFile};


