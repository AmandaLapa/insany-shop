import { NextPage } from "next";
import Hero from "./components/hero";
import Categories from "./components/categories";

const Home: NextPage = () => {
	return (
		<main>
			<Hero />
			<Categories />
		</main>
	);
};

export default Home;
