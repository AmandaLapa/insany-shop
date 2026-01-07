"use client";

import React from "react";

import Image from "next/image";

import * as C from "./styles";

import cart from "@/assets/icons/shopping-bag.svg";

const CartButton: React.FC = () => {
	const [quantity, setQuantity] = React.useState(0);

	React.useEffect(() => {
		const updateCart = () => {
			const cart = JSON.parse(localStorage.getItem("cart") || "[]");
			setQuantity(cart.length);
		};

		window.addEventListener("cart-updated", updateCart);

		updateCart();

		return () => window.removeEventListener("cart-updated", updateCart);
	}, []);

	return (
		<C.Button>
			<Image src={cart} quality={100} alt="" />
			{quantity > 0 && <C.Badge>{quantity}</C.Badge>}
		</C.Button>
	);
};

export default CartButton;
