import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerContact from '../components/BannerContact'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Contact - Billy Schulze</title>
            <meta name="description" content="Contact Page" />
        </Helmet>

        <BannerContact/>

    </Layout>
)

export default Generic