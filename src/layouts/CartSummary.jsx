import React from 'react';
import {  Dropdown } from "semantic-ui-react";
import { Link, NavLink } from 'react-router-dom';

export default function CartSummary() {
    return (
        <div>
           <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>Acer laptop</Dropdown.Item>
                <Dropdown.Item>Asus laptop</Dropdown.Item>
                <Dropdown.Item>Dell laptop</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/cart"></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
