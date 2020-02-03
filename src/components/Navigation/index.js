import React, { useState } from "react";
import logo from "src/media/logo.svg";
import Link from "@components/ui/Link";
import Container from "@components/ui/Container";
import Row from "@components/ui/Row";
import { NavBox, Logo } from "./styled";

const Navigation = props => {
  const [active, setActive] = useState(false);
  console.log(props);
  const toggleHamburger = () => setActive(!active);
  return (
    <nav role="navigation" aria-label="main-navigation">
      <Container fluid>
        <Row>
          <NavBox>
            <Link to="/" title="Logo">
              <Logo src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div data-target="navMenu" onClick={() => toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>

            <div className="navbar-start has-text-centered">
              <Link to="/about" activeClassName="active">
                About
              </Link>
              <Link to="/videos" activeClassName="active">
                Videos
              </Link>
              <Link to="/products" activeClassName="active">
                Products
              </Link>
              <Link to="/blog" activeClassName="active">
                Blog
              </Link>
              <Link to="/contact" activeClassName="active">
                Contact
              </Link>
              <Link to="/contact/examples" activeClassName="active">
                Form Examples
              </Link>
            </div>
          </NavBox>
        </Row>
      </Container>
    </nav>
  );
};

export default Navigation;
