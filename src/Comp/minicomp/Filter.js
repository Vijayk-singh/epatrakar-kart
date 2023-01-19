import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";

import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Filter() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
  });
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // sx={{border:'1px solid grey', color:'black', borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px'}}
      >
        <FilterListIcon /> Filter
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <label>Date : - </label> From
          <input type="date" /> To
          <input type="date" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <InputLabel
          id="demo-simple-select-label"
          placeholder="User"
          
        >
          User
        </InputLabel>
        <Select
          placeholder="User"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{width:'200px',height:'40px'}}
        >
          <MenuItem value={10}>vijay</MenuItem>
          <MenuItem value={20}>Kimo</MenuItem>
          <MenuItem value={30}>xiayu</MenuItem>
        </Select>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <InputLabel id="demo-simple-select-label">Categary</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{width:'200px',height:'40px'}}
          >
            <MenuItem value={10}>Sports</MenuItem>
            <MenuItem value={20}>Trending</MenuItem>
            <MenuItem value={30}>politics</MenuItem>
            <MenuItem value={30}>world</MenuItem>
          </Select>
        </MenuItem>
        <MenuItem >
        <InputLabel id="demo-simple-select-label">Provider</InputLabel>
          <Select  name="cars" id="cars"  label="Categary" value='categary' sx={{width:'200px',height:'40px'}}>
           <option value="Categary" sx={{width:'100px',height:'20px'}}>Categary</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </Select>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button>Apply</Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
