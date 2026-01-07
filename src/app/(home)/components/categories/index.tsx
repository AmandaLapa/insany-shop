"use client";

import React from "react";
import * as S from "./styles";
import { useHero } from "../hero/useHero";
import { Category } from "../hero/useHero";

const Categories: React.FC = () => {
	const { categories } = useHero();

	return (
		<S.Section>
			<S.SectionContainer>
				<S.SectionTitle>Principais categorias</S.SectionTitle>
				<S.SectionGrid>
					{categories.length === 0 ? (
						<S.SectionResult>
							Nenhum categoria encontrada
						</S.SectionResult>
					) : (
						categories.map((category: Category) => (
							<S.CategoryCard
								key={category.id}
								                href={`/category/${category.id}`		}
							>
								<S.CategoryIcon>
									{category.icon || ""}
								</S.CategoryIcon>
								<S.CategoryName>{category.name}</S.CategoryName>
								<S.CategoryCount>
									{category.productCount || 0} produtos
								</S.CategoryCount>
							</S.CategoryCard>
						))
					)}
				</S.SectionGrid>
			</S.SectionContainer>
		</S.Section>
	);
};

export default Categories;
