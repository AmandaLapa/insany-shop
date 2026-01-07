"use client";

import React from "react";
import * as S from "./styles";
import ProductCard from "../../../../ui/components/card";
import Pagination from "@/ui/components/pagination";
import { useHero } from "./useHero";

const Hero: React.FC = () => {
	const {
		products,
		categories,
		category,
		setCategory,
		order,
		setOrder,
		setCurrentPage,
		pagination,
		orderOptions,
	} = useHero();

	return (
		<S.Section>
			<S.SectionContainer>
				<S.SectionHeader>
					<S.Select
						onChange={(e) => setCategory(e.target.value)}
						value={category}
					>
						<option value="">Selecione a categoria</option>
						{categories.map((cat) => (
							<option key={cat.id} value={cat.id}>
								{cat.name}
							</option>
						))}
					</S.Select>

					<S.Select
						onChange={(e) => setOrder(e.target.value)}
						value={order}
					>
						<option value="">Organizar por</option>
						{orderOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</S.Select>
				</S.SectionHeader>

				<S.SectionTitle>Todos os produtos</S.SectionTitle>

				<S.SectionGrid>
					{products.length > 0 ? (
						products.map((product) => (
							<ProductCard
								key={product.id}
								product={{
									...product,
									stock: product.stock ?? 0,
									rating: product.rating ?? 0,
									image: product.image ?? "",
								}}
							/>
						))
					) : (
						<S.SectionResult>
							Nenhum produto encontrado.
						</S.SectionResult>
					)}
				</S.SectionGrid>

				{pagination && pagination.totalPages > 1 && (
					<Pagination
						currentPage={pagination.currentPage}
						totalPages={pagination.totalPages}
						onPageChange={(page) => setCurrentPage(page)}
					/>
				)}
			</S.SectionContainer>
		</S.Section>
	);
};

export default Hero;
