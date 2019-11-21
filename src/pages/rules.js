import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BannerSection from '../components/comoon/banner';
import IndividualPrize from '../components/rules/individualprize';
import GroupPrize from '../components/rules/groupprize';
import WinPoints from '../components/rules/winpoints';
import { useStaticQuery, graphql } from 'gatsby';
import SecondBanner from '../components/comoon/second-banner'


const Rules = () => {

    const data = useStaticQuery( graphql`
        query {
            allContentfulBannerCalado(filter: {view: {eq: "Reglas"}}) {
                edges {
                    node {
                        title
                        principal
                        button
                        imageCalada {
                            file {
                                url
                            }
                        }
                        imagebg {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)

	return (
		<Layout>
			<SEO title="Reglas" />
			<BannerSection  data={ data.allContentfulBannerCalado.edges[0].node } />    
			<IndividualPrize />
			<GroupPrize />
			<WinPoints />
		</Layout>
	);
};

export default Rules;
