import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

type Props = {
	children: JSX.Element;
};

export default function Layout({ children }: Props) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
