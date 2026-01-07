import { center } from "@/app/styles/mixins";
import variables from "@/app/styles/variables";
import { styled } from "styled-components";

export const PaginationContainer = styled.div`
	margin-top: 5.1rem;
	${center}
	gap: 2rem;
	flex-wrap: wrap;
`;

export const PaginationPages = styled.div`
	${center}
	gap: 2rem;
	flex-wrap: wrap;
`;

export const PaginationButton = styled.button<{ $active?: boolean }>`
	background-color: ${({ $active }) =>
		$active ? variables.colors.neutral[50] : variables.colors.neutral[200]};
	color: ${({ $active }) =>
		$active ? variables.colors.purple[100] : variables.colors.neutral[400]};
	border: 1px solid;
	border-color: ${({ $active }) =>
		$active ? variables.colors.purple[100] : variables.colors.neutral[50]};
	width: 4rem;
	height: 4rem;
	${center}
	border-radius: 0.8rem;
	font-weight: 600;
	cursor: pointer;
	font-size: 1.6rem;
	transition: all 0.5s ease;

	&:hover:not(:disabled) {
		background-color: ${variables.colors.neutral[200]};
		color: ${variables.colors.purple[100]};
	}

	&:disabled {
		opacity: 0.4;
		cursor: not-allowed;
		transform: scale(0);
	}
`;
