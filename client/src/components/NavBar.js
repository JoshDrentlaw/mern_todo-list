import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            loggedIn: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <nav>
                <Navbar color="dark" dark expand="sm">
                    <NavbarBrand href="/">MERN TodoList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                {
                                    this.state.loggedIn ? (
                                        <span>Hi, {this.props.user}</span>
                                    )
                                    : (
                                        <NavLink href="/login">Please Login</NavLink>
                                    )
                                }
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/JoshDrentlaw/mern_todo-list">GitHub</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://joshdrentlaw.com">Portfolio</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </nav>
        );
    }
}

export default NavBar;