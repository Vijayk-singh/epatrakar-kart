import React from 'react'
import Dashv from './Dashn'

const Dashmob = () => {
  return (
    
    <div className='dashmob row' >
        <button class="btn btn-primary col-3 text-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">CMS</button>
        <h4 className='col-9 text-center ps-5 pt-2' >EPATRAKAAR</h4>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Dashboard</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
   <div>
   <div class="d-flex" >
  <a href="#" class="d-flex">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
</div>
   </div>
      </div>
    </div></div>
  )
}

export default Dashmob