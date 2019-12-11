import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BannerSection from '../components/rules/banner';
import IndividualPrize from '../components/rules/individualprize';
import GroupPrize from '../components/rules/groupprize';
import WinPoints from '../components/rules/winpoints';

const Rules = () => {

	return (
		<Layout>
			<SEO title="Reglas" />
			<BannerSection />    
			<IndividualPrize />
			<GroupPrize />
			<WinPoints />
		</Layout>
	);
};

export default Rules;
