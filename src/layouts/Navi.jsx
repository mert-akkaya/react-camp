import React,{useState} from "react";
import CartSummary from "./CartSummary";
import {  Container, Menu } from "semantic-ui-react";
import SingedOut from "./SingedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
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
            {cartItems.length>0&&<CartSummary/>}
            {isAuthenticated?<SignedIn signOut={handleSıgnOut} />:<SingedOut signIn={handleSıgnIn}/>}
            
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
