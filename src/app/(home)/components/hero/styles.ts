import { Container } from "@/app/styles/patterns";
import { flex } from "@/app/styles/mixins";
import styled from "styled-components";
import variables from "@/app/styles/variables";

export const Section = styled.section`
	padding-top: 3.2rem;
	padding-bottom: 5.2rem;
	box-shadow: 0 4px 20px 0 rgba(149, 149, 149, 0.1);
	background-color: ${variables.colors.neutral[100]};
`;

export const SectionContainer = styled.div`
	${Container}
`;

export const SectionHeader = styled.div`
	margin-bottom: 5rem;
	${flex("row", "center", "space-between", "2rem")};
`;

export const SectionTitle = styled.h2`
	margin-bottom: 4.7rem;
	font-size: 4rem;
	font-weight: 700;
	line-height: 150%;
	color: ${variables.colors.black};
`;

export const Select = styled.select`
	padding: 0.5rem 1rem;
	border-radius: 8px;
	border: 1px solid #ccc;
`;

export const SectionGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3.4rem 2.6rem;
`;

export const SectionResult = styled.div``;
