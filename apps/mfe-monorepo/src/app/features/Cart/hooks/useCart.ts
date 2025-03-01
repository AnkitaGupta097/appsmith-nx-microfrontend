import { useAtom } from "jotai";
import { cartAtom } from "../store";
import { type Product } from "../../../types/Products";
import { tinyemitter }   from '@mfe-monorepo/event-bus';
import { useNavigate } from "react-router-dom";

const useCart = () => {
	const [cart, setCart] = useAtom(cartAtom);

	const addToCart = (product: Product) => {
		console.log("event emitted from useCart");
		tinyemitter.emit('contact', "event emitted from useCart");
		setCart((cart) => {
			cart.products.push(product);
			return { ...cart };
		});
	};

	const removeFromCart = (productId: string) => {
		setCart((cart) => {
			cart.products = cart.products.filter(
				(product) => product.id !== productId
			);

			return { ...cart };
		});
	};

	return {
		cart,
		addToCart,
		removeFromCart,
	};
};

export default useCart;
