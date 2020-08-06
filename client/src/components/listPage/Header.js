import React from "react";
import { Breadcrumbs, Link } from "@material-ui/core";

const Header = (props) => (
  <Breadcrumbs>
    <Link>Prev</Link>
    <Link href="/">Home</Link>
    <Link>Next</Link>
  </Breadcrumbs>
);

export default Header;
