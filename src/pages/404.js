import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>NOT FOUND</h1>
                <p><Link to="/" className="button back">Go Home</Link></p>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
