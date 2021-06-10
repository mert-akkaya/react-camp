import React,{useState} from "react";
import CartSummary from "./CartSummary";
import {  Container, Menu } from "semantic-ui-react";
import SingedOut from "./SingedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { NavLink } from 'react-router-dom';


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history = useHistory();

  function handleSıgnOut() {
    setIsAuthenticated(false)
  }

  function handleSıgnIn() {
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item name="home" as={NavLink} to="/" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary/>
            {isAuthenticated?<SignedIn signOut={handleSıgnOut} />:<SingedOut signIn={handleSıgnIn}/>}
            
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
