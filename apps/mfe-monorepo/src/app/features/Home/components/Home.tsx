import { ProductsOnSale } from "../../Products";
import styles from "./Home.module.css";
import useScreenSize from "../../Products/hooks/useScreenSize";
import { Suspense, useEffect } from "react";
import React from "react";
import { importRemote } from '@module-federation/utilities';
import type ProductHeroType from 'hero/ProductHero';
import { eventBus, EventTypes } from '@mfe-monorepo/event-bus';

const ProductHero = React.lazy(() =>
	importRemote<{ default: typeof ProductHeroType }>({
		url: async () => Promise.resolve('http://localhost:3001'),
		scope: 'hero',
		module: './ProductHero',
		remoteEntryFileName: 'remoteEntry.js',
		esm: true,
	})
);

const App = React.lazy(() =>
	importRemote<any>({
		url: async () => Promise.resolve('http://localhost:3002'),
		scope: 'temp-mf',
		module: './App',
		remoteEntryFileName: 'remoteEntry.js',
		esm: true,
	})
);

//const ProductHero = React.lazy(() => import("hero/ProductHero"));

const bodyElement = document.querySelector("body")!;


const Home = () => {


	useEffect(() => {
		// Subscribe to an event
		const subscription = eventBus.on<string>(EventTypes.USER_LOGIN)
			.subscribe((data: any) => {
				// Perform actions in response to the event
				console.log("event listened in home", data)
			});

		return () => {
			// Clean up subscriptions
			subscription.unsubscribe();
		};
	}, []);

	const { isSmallScreen } = useScreenSize({
		htmlElement: bodyElement,
	});

	return (
		<section className={styles["home"]}>
			<Suspense>{!isSmallScreen && <ProductHero />}</Suspense>
			<Suspense>{!isSmallScreen && <App />}</Suspense >
			<ProductsOnSale />
		</section>
	);
};

export default Home;
