import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';


import myIMg from '../images/navbar/1.jpg'
import flag from '../images/navbar/uzb.png'

export default function MyNavbar(args) {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar {...args} expand='lg'>
                <NavbarBrand href="/">Bakery</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                       
                    </Nav>
                    <NavbarText>
                        time ?
                    </NavbarText>
                    <NavbarText>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                            <label className="form-check-label" for="flexSwitchCheckChecked">Checked</label>
                        </div>
                    </NavbarText>
                    <NavbarText className='navFlag'>
                        <img src={flag} className='img-fluid' alt="" />
                    </NavbarText>
                    <NavbarText className='myImgNav row'>
                        <div className="col-md-5">
                            <img src={myIMg} alt="" />
                        </div>
                        <div className="col-md-7">
                            <p>Khojiakbarbek</p>
                        </div>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}
