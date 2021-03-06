import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

/*
import the css module, which gives a default export, headerStyles. 
headerStyles is an object that contains properties for every class 
defined in the module.
*/
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to="/"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/member-profile"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Members
            </Link>
          </li>
          <li>
            <Link
              to="/auditions"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Auditions
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
