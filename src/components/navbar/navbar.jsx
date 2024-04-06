import React from "react";
import * as SC from './navbarStyle';

const Navbar = () => {

  return (
    <SC.NavbarContainer>
      <SC.NavContainer>
				<SC.NavLogo>
        </SC.NavLogo>
        <SC.NavLocation>
					<img src="here.png" alt="location"/>
          서울시 노원구
        </SC.NavLocation>
      </SC.NavContainer>
    </SC.NavbarContainer>
  );
};

export default Navbar;