import styles from "./itemCard.module.css";
import Image from "next/image";

type Props = {
	item: any;
};

export default function ItemCard({ item }: Props) {
	return (
		<div key={item.id} className={styles.wrapper}>
			<div className={styles.thumbnail}>
				<Image
					src="https://images.pexels.com/photos/2280913/pexels-photo-2280913.jpeg?cs=srgb&dl=pexels-markus-spiske-2280913.jpg&fm=jpg&w=1920&h=1280"
					layout="fill"
					alt={item.name}
				/>
			</div>
			<div className={styles.detailsWrapper}>
				<div className={styles.itemName}>{item.name}</div>
				<div>₹{item.price}</div>
			</div>
			<div className={styles.buttonWrapper}>
				<button className={styles.button}>ADD TO CART</button>
			</div>
		</div>
	);
}
