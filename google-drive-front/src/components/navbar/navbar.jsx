import { AppBar, FormGroup, Toolbar, Typography, Switch, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import {SearchFile} from './searchFile';


function NavBar({ searchValue, setSearchValue}) {

  const [theme, setTheme] = useState(true);

  const changeTheme = (e) => {
    setTheme(!theme);
  }

  return (
<>

    <div>
    <Box sx={{felxGrow: 1, }} > 
      <AppBar position="static" > 
          <Toolbar sx={{background: '#000', height: 80}} >
            <FormGroup>
              <FormControlLabel
                control={
                    <Switch
                      checked = {theme}
                      onChange = {changeTheme}
                      defaultChecked />
                }
            label= {theme ? 'Dark mode' : 'Light mode'}
            />
            </FormGroup>
            <Typography
                variant="h5"
                component='div'
                sx={{ flexGrow: 3, textAlign: 'center'}}
              >
              HOME CLOUD
            </Typography>
          <SearchFile
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
          </Toolbar>
      </AppBar>
  </Box>
    </div>

</>
  )
}

export {NavBar};
