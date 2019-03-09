import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <StaticQuery
                query={graphql`
                    {
                        allContentfulDetails {
                            edges {
                                node {
                                    email
                                    phone
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <section className="split">
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-envelope"></span>
                                <h3>Email</h3>
                                <a href={`mailto:${data.allContentfulDetails.edges[0].node.email}`}>{data.allContentfulDetails.edges[0].node.email}</a>
                            </div>
                        </section>
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-phone"></span>
                                <h3>Mobile</h3>
                                <span>{data.allContentfulDetails.edges[0].node.phone}</span>
                            </div>
                        </section>
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-location-arrow"></span>
                                <h3>Location</h3>
                                <span>Brisbane, Queensland, Australia</span>
                            </div>
                        </section>
                    </section>
                )}
            />
            
        </div>
    </section>
)

export default Contact
