import React, { Component } from "react";
import { MenuItems } from "/Users/mac/camp/src/components/Navbar/MenuItems.js";
import "/Users/mac/camp/src/components/Footer/Footer.css";
import Newsletter from '/Users/mac/camp/src/components/Footer/Newsletter.js';

class Footer extends Component {


  render() {
    return (
        <>
 
        <div className="spacing"></div>
      <nav className="FooterItems">
        <h1 className="footer-logo">
          <pre>CA</pre>MP
        </h1>
        <Newsletter />
        <ul className="footernav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className="pages" href={item.url}>
                  {item.title1}
                </a>
              </li>
            );
          })}
        </ul>
       
      </nav>
      </>
    );
  }
}


export default Footer
