import React from "react";
import styled from 'styled-components';
import * as SC from './navbarStyle';

const Navbar = () => {

  return (
    <SC.NavbarContainer>
      <SC.NavContainer>
				<SC.NavLogo>
        </SC.NavLogo>
        <SC.NavLocation>
					<img src="here.png"/>
          서울시 노원구
        </SC.NavLocation>
        <SC.NavMenu>
          <img src="gear.png"></img>
        </SC.NavMenu>
      </SC.NavContainer>
    </SC.NavbarContainer>
  );
};

export default Navbar;