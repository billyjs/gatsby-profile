import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const HomeIndex = ({ data }) => {
    return (
        <Layout>
            <Helmet
                title="Billy Schulze"
                meta={[
                    { name: 'description', content: 'Billy Schulze Profile' },
                    { name: 'keywords', content: 'profile, portfolio, developer, software, software engineer, web' },
                ]}
            >
            </Helmet>

            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    {
                        data.allContentfulProject.edges.map(project => {
                            return (
                                <article style={{backgroundImage: `url(${project.node.image.resolutions.src})`}}>
                                    <header className="major">
                                        <h3>{project.node.title}</h3>
                                        <p>{project.node.shortdesc}</p>
                                    </header>
                                    <Link to={"/projects/" + project.node.slug} className="link primary"></Link>
                                </article>
                            )
                        })
                    }
                </section>
                <section id="two">
                    <div className="inner">
                        <ul className="actions">
                            <li><a href="https://github.com/billyjs" className="button next">See More Projects</a></li>
                        </ul>
                    </div>
                </section>
            </div>

        </Layout>
    )
}

export default HomeIndex

export const projectQuery = graphql`
    {
        allContentfulProject {
            edges {
                node {
                    id
                    title
                    shortdesc
                    repo
                    link
                    tags
                    slug
                    image {
                        resolutions(width: 1600) {
                            width
                            height
                            src
                            srcSet
                        }
                    }
                }
            }
        }
    }
`