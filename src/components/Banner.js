import React from 'react'

import resume from '../assets/files/BillySchulze_Resume_FEB2019.pdf'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Billy Schulze</h1>
            </header>
            <div className="content">
                <p>Software Engineer<br />
                Student at University of Queensland.</p>
                <ul className="actions">
                    <li><a href={resume} className="button next scrolly">Résumé</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
