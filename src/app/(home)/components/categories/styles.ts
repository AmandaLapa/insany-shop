import { Container } from "@/app/styles/patterns";
import { flex } from "@/app/styles/mixins";
import styled from "styled-components";
import variables from "@/app/styles/variables";
import Link from "next/link";

export const Section = styled.section`
	padding-top: 3.2rem;
	padding-bottom: 5.2rem;
	background-color: ${variables.colors.neutral[100]};
`;

export const SectionContainer = styled.div`
	${Container}
`;

export const SectionTitle = styled.h2`
	color: ${variables.colors.black};
	font-size: 4rem;
	font-weight: 700;
	margin-bottom: 3.4rem;
	line-height: 150%;
`;

export const SectionGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 2rem;
`;

export const SectionResult = styled.div``;

export const CategoryCard = styled(Link)`
	padding: 2.4rem;
	${flex("column", "center", "center")};
	background-color: ${variables.colors.white};
	border-radius: 1.2rem;
	border: 1px solid ${variables.colors.neutral[200]};
	transition: all 0.3s ease;

	&:hover {
		box-shadow: 0 4px 20px 0 rgba(149, 149, 149, 0.1);
	}
`;

export const CategoryIcon = styled.div``;

export const CategoryName = styled.h3`
	margin-top: 1rem;
	font-size: 1.6rem;
	font-weight: 700;
	color: ${variables.colors.neutral[600]};
`;

export const CategoryCount = styled.span`
	font-size: 1.6rem;
	color: ${variables.colors.neutral[400]};
`;
export const CategoryCardLink = styled(Link)``;

export const CategoryCardContent = styled.div`
	padding: 2.4rem;
	border: 1px solid ${variables.colors.neutral[200]};
	border-radius: 0.8rem;
	background-color: ${variables.colors.white};
	transition: all 0.3s ease;

	&:hover {
		box-shadow: 0 4px 20px 0 rgba(149, 149, 149, 0.1);
		transform: translateY(-0.4rem);
	}
`;

// export const CategoryIcon = styled.div`
// 	width: 4.8rem;
// 	height: 4.8rem;
// 	margin-bottom: 1.6rem;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	border-radius: 50%;
// 	background-color: ${variables.colors.primary[100]};
// `;

// export const CategoryIconImage = styled.img`
// 	width:
