import React from "react";
import axios from "axios";

export type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	category: string;
	rating?: number;
	image?: string;
	stock?: number;
	createdAt?: string;
};

export type Category = {
	id: string;
	name: string;
	description?: string;
	icon?: string;
	productCount?: number;
};

export type Pagination = {
	currentPage: number;
	totalPages: number;
	totalProducts: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
};

export const orderOptions = [
	{ value: "newest", label: "Novidades" },
	{ value: "price-desc", label: "Preço: Maior - menor" },
	{ value: "price-asc", label: "Preço: Menor - maior" },
	{ value: "bestsellers", label: "Mais vendidos" },
];

export function useHero() {
	const [products, setProducts] = React.useState<Product[]>([]);
	const [categories, setCategories] = React.useState<Category[]>([]);
	const [category, setCategory] = React.useState<string>("");
	const [order, setOrder] = React.useState<string>("");
	const [currentPage, setCurrentPage] = React.useState<number>(1);
	const [pagination, setPagination] = React.useState<Pagination | null>(null);

	const fetchCategories = async () => {
		try {
			const res = await axios.get("https://api.insany.co/api/categories");
			setCategories(res.data.categories);
		} catch (err) {
			console.error("Erro ao buscar categorias", err);
		}
	};

	const fetchProducts = async () => {
		try {
			const res = await axios.get("https://api.insany.co/api/products", {
				params: {
					category,
					order,
					page: currentPage,
					limit: 6,
				},
			});
			let products = res.data.products;

			if (order === "price-asc") {
				products = products.sort(
					(a: Product, b: Product) => a.price - b.price,
				);
			} else if (order === "price-desc") {
				products = products.sort(
					(a: Product, b: Product) => b.price - a.price,
				);
			} else if (order === "newest") {
				products = products.sort(
					(a: Product, b: Product) => Number(b.id) - Number(a.id),
				);
			} else if (order === "bestsellers") {
				products = products.sort(
					(a: Product, b: Product) =>
						(b.rating || 0) - (a.rating || 0),
				);
			}

			setProducts(products);
			setPagination(res.data.pagination);
		} catch (err) {
			console.error("Erro ao buscar produtos", err);
		}
	};

	React.useEffect(() => {
		setCurrentPage(1);
	}, [category, order]);

	React.useEffect(() => {
		fetchCategories();
	}, []);

	React.useEffect(() => {
		fetchProducts();
	}, [category, order, currentPage]);

	return {
		products,
		categories,
		category,
		setCategory,
		order,
		setOrder,
		currentPage,
		setCurrentPage,
		pagination,
		orderOptions,
	};
}
