import type { NextPage } from "next";
import Banner from "../components/landingPageBanner/banner";
import TrendingItems from "../components/landingPageTrendingItems/landingPageTrendingItems";

const Home: NextPage = () => {
	return (
		<div>
			<Banner />
			<TrendingItems />
		</div>
	);
};

export default Home;
