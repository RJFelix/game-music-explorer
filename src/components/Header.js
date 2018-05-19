import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand
            tag={() => <Link to='/'>Game Music Explorer</Link>}
          />
          <Nav className='ml-auto' navbar>
            <Link to='/'><NavItem>Home</NavItem></Link>
          </Nav>
        </Navbar>
        <Breadcrumb>
          {this.props.crumbs.map(crumb => (
            <BreadcrumbItem key={crumb}>{crumb}</BreadcrumbItem>
          ))}
        </Breadcrumb>
      </div>
    )
  }
}

export default Header;