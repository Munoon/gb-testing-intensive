import React from "react";
import { Link } from "react-router-dom";
import Profile from '../profile';

import './styles.css';

export default function Header() {
  return (
    <header className="header">
      Articles
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </header>
  )
}
