import { useEffect, useState } from "react";
import ItemCard from "../itemCard/itemCard";
import styles from "./landingPageTrendingItems.module.css";

function fetchPlantsGallery() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{ id: 1, name: "A4 Card Stock", price: 1200 },
				{ id: 2, name: "A3 Card Stock", price: 800 },
				{ id: 3, name: "Apsara Pencil (pack of 12)", price: 650 },
				{ id: 4, name: "Camlin Stapler", price: 1450 },
				{ id: 5, name: "Camel Scented Erasers (Box of 3)", price: 1300 },
				{ id: 6, name: "A4 Card Stock", price: 1200 },
				{ id: 7, name: "A3 Card Stock", price: 800 },
				{ id: 8, name: "Apsara Pencil (pack of 12)", price: 650 },
				{ id: 9, name: "Camlin Stapler", price: 1450 },
				{ id: 10, name: "Camel Scented Erasers (Box of 3)", price: 1300 },
			]);
		}, 1000);
	});
}

export default function TrendingItems() {
	const [items, setItems] = useState<any>([]);
	useEffect(() => {
		fetchPlantsGallery().then((items) => {
			setItems(items);
		});
	});

	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>Trending items</div>
			<div className={styles.itemsGrid}>
				{items.map((item: any) => (
					<ItemCard item={item} key={item.id} />
				))}
			</div>
		</div>
	);
}
