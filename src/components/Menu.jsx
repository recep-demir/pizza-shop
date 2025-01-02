import "../styles/Menu.css";
import React from 'react'
import MenuItem from "./MenuItem";

const Menu = ({menuList,title}) => {
  return (
    <div className="menu" id="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        { 
          menuList.map((item, index)=><MenuItem key={index} {...item}/>)
        }
        
      </div>
    
    </div>
  )
}

export default Menu