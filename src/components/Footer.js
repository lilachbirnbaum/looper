import React from "react";
import './Footer.css'

const date = new Date();
const year = date.getFullYear();

const Footer = (props) =>{
   return( 
       <footer className="footer">
   
          {props.children}
          <p> © Lilach Birnbaum {year}</p>
   </footer>
   );
}
export default Footer;