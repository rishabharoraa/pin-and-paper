import icon from "../../public/icon-scissors.png";
import cartIcon from "../../public/icon-shopping-cart.png";
import searchButtonIcon from "../../public/search-button-icon.png";
import styles from "./navbar.module.css";
import Image from "next/image";

const navbarLinks = [
	{ label: "Notebooks", url: "/notebooks" },
	{ label: "Pens", url: "/pens" },
	{ label: "Pencils", url: "/pencils" },
	{ label: "Paints", url: "/paint" },
	{ label: "Crafts", url: "/crafts" },
	{ label: "Miscellaneous", url: "/miscellaneous" },
];

export default function Navbar() {
	return (
		<nav className={styles.navbarOuter}>
			<div className={styles.navbarUpper}>
				<div className={`${styles.navInner} ${styles.companyLogo}`}>
					{/* <div className={styles.icon}>
						<Image src={icon} alt={""} layout="fill" />
					</div> */}
					Pin and Paper
				</div>
				<div className={`${styles.navInner}`}>
					{navbarLinks.map((navItem) => (
						<div className={styles.navInnerButton} key={navItem.label}>
							{navItem.label}
						</div>
					))}
				</div>
				<div className={styles.navInner}>
					<div className={styles.searchBarWrapper}>
						<input
							type="text"
							className={styles.searchBar}
							placeholder="Search for stationary..."
						/>
						<button className={styles.searchButton}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="24"
								height="24"
								viewBox="3 -2 30 30"
								fill=""
								className={styles.searchIcon}
							>
								<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
							</svg>
						</button>
					</div>
					<div className={styles.cartIcon}>
						<Image src={cartIcon} alt="cart" layout="fill" />
					</div>
					<div>Login</div>
				</div>
			</div>
		</nav>
	);
}
