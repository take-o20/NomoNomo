import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function NavBar(props) {
  return (
    <div overflow-x="scroll" overflow-y="hidden" flex-wrap="nowrap">
    <nav className="navbar navbar-dark bg-primary fixed-top" overflow-x="scroll" overflow-y="hidden" flex-wrap="nowrap">
    <Link className="navbar-brand" to="/" overflow-x="scroll" overflow-y="hidden" flex-wrap="nowrap">
      Nomo<sup>2</sup>
    </Link>
    {/* <Link className="navbar-brand" to="/about">
      会社紹介
    </Link>
    <Link className="navbar-brand" to="/hage">
      はげ
    </Link>
    <Link className="navbar-brand" to="/hage">
      はげ
    </Link>
    <Link className="navbar-brand" to="/hage">
      はげ
    </Link><Link className="navbar-brand" to="/hage">
      はげ
    </Link><Link className="navbar-brand" to="/hage">
      はげ
    </Link> */}
  </nav>
  </div>
  );
}

export default withRouter(NavBar);