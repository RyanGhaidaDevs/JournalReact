import React, { Component } from 'react'


const DashBoard  = (props) =>   {
  return(
    <div>
        <div>
          <h1> DashBoard </h1>
          <h1> Status: {props.loggedInStatus}</h1>
          
        </div> 
    </div>
  )
}
export default DashBoard;

