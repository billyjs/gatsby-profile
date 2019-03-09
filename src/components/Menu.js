import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import resume from '../assets/files/BillySchulze_Resume_FEB2019.pdf'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                {/* <li><Link onClick={props.onToggleMenu} to="/projects">Projects</Link></li> */}
                <li><Link onClick={props.onToggleMenu} to="/contact">Contact</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href={resume} className="button special fit">Résumé</a></li>
                {/* <li><a href="#" className="button fit">Log In</a></li> */}
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu}>Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
