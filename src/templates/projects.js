import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import pic11 from '../assets/images/pic11.jpg';

const Project = (props) => {
    const { title, shortdesc, repo, link, image, tags } = props.data.contentfulProject;
    return (
        <Layout>
            <Helmet>
                <title>{title} - Billy Schulze</title>
                <meta name="description" content="Project Page" />
            </Helmet>

            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>{title}</h1>
                        </header>
                        <h3>{shortdesc}</h3>
                        <pre><code>
                            { tags.join(", ") }
                        </code></pre>
                        <span className="image main"><img src={image.resolutions.src} alt="" /></span>
                        <p>
                            { repo && <a href={repo}>Project Repository</a> }
                            {
                                link && repo !== link && <>
                                    <br/><br/>
                                    <a href={link}>Project Link</a>
                                </>
                            }
                        </p>
                    </div>
                </section>
            </div>

        </Layout>
    );
}
 
export default Project;

export const pageQuery = graphql`
    query projectPageQuery($slug: String!) {
        contentfulProject(slug: {eq: $slug}) {
            title
            shortdesc
            repo
            link
            tags
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
`;