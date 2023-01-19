import React from "react";
import Dashnav from "./Dashnav.js";
import Dashtop from "./Dashtop.js";
import Addarticle from './Add article/Addarticle'
import Dashmob from "./minicomp/Dashmob.js";
import Dashv from "./minicomp/Dashn.js";
import List from "./minicomp/List";
import {useState} from 'react'

export const Dash = () => {
  const [toggle,setToggle] = useState(false)

  const toggleFunc = () => {
    setToggle(!toggle)
    console.log('hlo')
  }
  return (
    <div style={{ overflow: "", display: "", float: "" }}>
      <Dashmob/>
      <Dashtop click={toggleFunc} />{" "}
     
      <div className="  row">
        <div className="dashval col col-lg-2">
          {" "}
          <Dashv />
        </div>
        {/* <Dashtop/> */}

        <div className="listal col" >
         {toggle ? <Addarticle/>:<List />} 
        </div>
        
      </div>
    </div>
  );
};
