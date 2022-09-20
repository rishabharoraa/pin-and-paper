import styles from "./banner.module.css";

export default function LandingPageBanner() {
	return (
		<div className={styles.bannerWrapper}>
			<div className={styles.banner}>
				<div className={styles.bannerTextWrapper}>
					<div className={styles.bannerTextLarge}>
						The ultimate stationery store
					</div>
					<div className={styles.bannerTextSmall}>
						Select from thousands of products <br />
						by thousands of trusted brands
					</div>
					<button className={styles.bannerButton}>Shop now</button>
				</div>
			</div>
		</div>
	);
}
