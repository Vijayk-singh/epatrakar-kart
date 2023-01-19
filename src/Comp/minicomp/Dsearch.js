import React from "react";
import TextField from "@mui/material/TextField";
import Filter from "./Filter";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
export const Dsearch = () => {
  return (
    <div className=" d-flex justify-content-center" align="center">
      {" "}
      <div className=" ">
        {/* <Filter />{" "} */}
      </div>
      <div className="ds ">
        {/* <TextField
          size="small"
          id="Solid"
          label="Search Articals"
          defaultValue=""
          fullWidth="true"
          color=""
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">

          //     </InputAdornment>
          //   ),
          // }}
          sx={{
            border: "1px solid black",
            color: "black",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            width: "25rem",
          }}
        /> */}
        <div class="input-group input-group-sm searchb">
  <span class="" id="basic-addon1"><Filter/></span>
  <input type="text" class="form-control" placeholder="Search articals" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
      </div>
    </div>
  );
};
