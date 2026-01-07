"use client";

import React from "react";
import Image from "next/image";
import * as C from "./styles";

export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	category: string;
	stock: number;
	rating: number;
	image: string;
}

interface Props {
	product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
	const handleAddToCart = () => {
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");
		cart.push(product);
		localStorage.setItem("cart", JSON.stringify(cart));

		window.dispatchEvent(new Event("cart-updated"));
	};

	return (
		<C.Card>
			<C.CardThumb>
				<Image src={product.image} alt={product.name} fill />
			</C.CardThumb>
			<C.CardMain>
				<C.CardTop>
					<C.CardCategory>{product.category}</C.CardCategory>
					<C.CardRating>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="12"
							viewBox="0 0 14 12"
							fill="none"
						>
							<path
								d="M6.66816 0.185545C6.69883 0.129837 6.74622 0.0829439 6.80496 0.0501585C6.86371 0.017373 6.93148 0 7.00063 0C7.06978 0 7.13755 0.017373 7.19629 0.0501585C7.25504 0.0829439 7.30243 0.129837 7.3331 0.185545L8.94995 3.12954C9.05647 3.32331 9.2137 3.49095 9.40815 3.61807C9.6026 3.7452 9.82846 3.82801 10.0664 3.8594L13.6822 4.33507C13.7507 4.34399 13.8151 4.36997 13.8681 4.41007C13.921 4.45016 13.9604 4.50278 13.9818 4.56196C14.0032 4.62114 14.0058 4.68453 13.9892 4.74495C13.9726 4.80537 13.9376 4.86041 13.888 4.90386L11.273 7.19286C11.1006 7.34393 10.9716 7.53041 10.8971 7.73625C10.8226 7.94209 10.8048 8.16112 10.8454 8.37449L11.4627 11.6085C11.4748 11.6701 11.4674 11.7335 11.4414 11.7914C11.4153 11.8494 11.3717 11.8996 11.3154 11.9363C11.2592 11.9731 11.1925 11.9949 11.1232 11.9992C11.0538 12.0035 10.9845 11.9903 10.9231 11.9609L7.69077 10.4332C7.47779 10.3327 7.24083 10.2802 7.00028 10.2802C6.75972 10.2802 6.52277 10.3327 6.30979 10.4332L3.07818 11.9609C3.01682 11.9901 2.94757 12.0032 2.87832 11.9988C2.80906 11.9944 2.74258 11.9726 2.68642 11.9359C2.63027 11.8991 2.58671 11.849 2.56069 11.7911C2.53467 11.7333 2.52723 11.67 2.53923 11.6085L3.15588 8.37511C3.19661 8.16165 3.17896 7.94248 3.10446 7.73651C3.02995 7.53055 2.90082 7.34396 2.72821 7.19286L0.11325 4.90449C0.0632698 4.86109 0.0278525 4.80595 0.0110325 4.74535C-0.00578752 4.68474 -0.00333406 4.62111 0.0181133 4.5617C0.0395607 4.50229 0.0791396 4.44948 0.132342 4.4093C0.185544 4.36912 0.25023 4.34318 0.319031 4.33444L3.9342 3.8594C4.17236 3.82825 4.39854 3.74555 4.59325 3.61841C4.78797 3.49127 4.94541 3.3235 5.052 3.12954L6.66816 0.185545Z"
								fill="#FFE100"
							/>
						</svg>{" "}
						{product.rating}
					</C.CardRating>
				</C.CardTop>
				<C.CardTitle>{product.name}</C.CardTitle>
				<C.CardDescription>{product.description}</C.CardDescription>
				<C.CardBottom>
					<C.CardPrice>R$ {product.price.toFixed(2)}</C.CardPrice>
					<C.CardStock>{product.stock} em estoque</C.CardStock>
				</C.CardBottom>
				<C.CardButton onClick={handleAddToCart}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="24"
						viewBox="0 0 25 24"
						fill="none"
					>
						<path
							d="M8.5 22C9.05228 22 9.5 21.5523 9.5 21C9.5 20.4477 9.05228 20 8.5 20C7.94772 20 7.5 20.4477 7.5 21C7.5 21.5523 7.94772 22 8.5 22Z"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M19.5 22C20.0523 22 20.5 21.5523 20.5 21C20.5 20.4477 20.0523 20 19.5 20C18.9477 20 18.5 20.4477 18.5 21C18.5 21.5523 18.9477 22 19.5 22Z"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M2.5498 2.0498H4.5498L7.2098 14.4698C7.30738 14.9247 7.56048 15.3313 7.92552 15.6197C8.29056 15.908 8.74471 16.0602 9.2098 16.0498H18.9898C19.445 16.0491 19.8863 15.8931 20.2408 15.6076C20.5954 15.3222 20.8419 14.9243 20.9398 14.4798L22.5898 7.0498H5.6198"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					Adicionar
				</C.CardButton>
			</C.CardMain>
		</C.Card>
	);
};

export default ProductCard;
