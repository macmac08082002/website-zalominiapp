import React, { forwardRef } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../index.css";
import logo from "../../assets/logowebremovebg.png"; // Import ảnh logo từ đường dẫn tương ứng

// Tạo component CustomNavDropdown
const CustomNavDropdown = forwardRef<
  HTMLAnchorElement,
  { title: string; id: string }
>(({ title, id, children }, ref) => (
  <NavDropdown
    title={<span className="text-sky-600 navbar-font">{title}</span>}
    id={id}
    ref={ref}
  >
    {children}
  </NavDropdown>
));

const HeaderComponent: React.FC = () => {
  return (
    <div className="bg-white drop-shadow-md h-20">
      <Navbar className="ml-6 set-width">
        <Navbar.Brand>
          <img
            src={logo} // Sử dụng biến logo như là đường dẫn cho ảnh
            height="30"
            className="d-inline-block align-top h-16 w-20 drop-shadow-md "
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto flex justify-center space-x-3.5 items-center">
            <Nav.Link className="navbar-font" style={{ color: "#1E90FF" }}>
              Home
            </Nav.Link>
            <CustomNavDropdown
              title="Sản Phẩm"
              id="dropdown-basic-button"
              className="inline-flex  items-center"
              style={{ color: "#1E90FF" }}
            >
              <NavDropdown.Item href="#/action-1">1</NavDropdown.Item>
              <NavDropdown.Item href="#/action-2">2</NavDropdown.Item>
              <NavDropdown.Item href="#/action-3">3</NavDropdown.Item>
            </CustomNavDropdown>
            <Nav.Link style={{ color: "#1E90FF" }} className="navbar-font ">
              Tăng Trưởng App
            </Nav.Link>
            <Nav.Link style={{ color: "#1E90FF" }} className="navbar-font">
              Advertising
            </Nav.Link>
            <Nav.Link style={{ color: "#1E90FF" }} className="navbar-font ">
              Liên Hệ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
