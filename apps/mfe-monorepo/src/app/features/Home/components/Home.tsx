import { ProductsOnSale } from "../../Products";
import styles from "./Home.module.css";
import useScreenSize from "../../Products/hooks/useScreenSize";
import { Suspense } from "react";
import React from "react";
import  {importRemote} from '@module-federation/utilities';
import type ProductHeroType from 'hero/ProductHero';

const ProductHero = React.lazy(() =>
	importRemote<{ default: typeof ProductHeroType}>({
	  url: async () => Promise.resolve('http://localhost:3001'),
	  scope: 'hero',
	  module: './ProductHero',
	  remoteEntryFileName: 'remoteEntry.js',
	  esm: true,
	})
  );

//const ProductHero = React.lazy(() => import("hero/ProductHero"));

const bodyElement = document.querySelector("body")!;

const Home = () => {
	const { isSmallScreen } = useScreenSize({
		htmlElement: bodyElement,
	});

	return (
		<section className={styles["home"]}>
			<Suspense>{!isSmallScreen && <ProductHero />}</Suspense>
			<ProductsOnSale />
		</section>
	);
};

export default Home;
