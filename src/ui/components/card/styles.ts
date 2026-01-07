import { frame, flex, center } from "@/app/styles/mixins";
import variables from "@/app/styles/variables";
import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid ${variables.colors.neutral[700]};
	border-radius: 1.9rem;
	overflow: hidden;
	background-color: #fff;
	transition: box-shadow 0.2s ease;
	width: 100%;

	&:hover {
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}
`;

export const CardThumb = styled.div`
	width: 100%;
	height: 27rem;
	aspect-ratio: 4/3;
	position: relative;
	${frame}
`;

export const CardMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 16px;
`;

export const CardTop = styled.div`
	margin-bottom: 1.2rem;
	${flex("row", "center", "space-between")}
`;

export const CardCategory = styled.span`
	font-size: 1.4rem;
	color: ${variables.colors.black};
	text-transform: capitalize;
	font-weight: 500;
	line-height: 150%;
`;

export const CardRating = styled.div`
	font-size: 1.4rem;
`;

export const CardTitle = styled.h3`
	font-size: 1.6rem;
	font-weight: 600;
	color: ${variables.colors.neutral[400]};
`;

export const CardDescription = styled.p`
	font-size: 1.4rem;
	color: ${variables.colors.neutral[500]};
`;

export const CardBottom = styled.div`
	${flex("row", "center", "space-between")}
`;

export const CardPrice = styled.div`
	font-size: 2.4rem;
	color: ${variables.colors.green[200]};
	font-weight: 700;
`;

export const CardStock = styled.div``;

export const CardButton = styled.button`
	padding: 0.8rem;
	${center}
	gap: 1.6rem;
	background-color: ${variables.colors.black};
	border-radius: 0.4rem;
	color: ${variables.colors.white};
	font-weight: 500;
`;
