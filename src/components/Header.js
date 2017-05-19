import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import s from '../styles/exampleComponent.style';


const Header = () => (
    <nav className="navbar navbar-light fixed-top">
  <div className="container-fluid">
    
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/"><img src="/static/images/book.svg"/></a>
    </div>

    
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Route
            exact path="/"
            render={() => (
                <Interactive
                  as={Link}
                  {...s.link}
                  to="/"
                >Home</Interactive>
            )}
          />
        </li>
        <li className="nav-item">
          <Link to="skills" className="nav-link">
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link to="demos" className="nav-link">
            Demos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="articles" className="nav-link">
            Articles
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)

export default Header