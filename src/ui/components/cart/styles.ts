import styled from "styled-components";
import variables from "@/app/styles/variables";
import { center } from "@/app/styles/mixins";

export const Button = styled.button`
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

export const Badge = styled.span`
	width: 1.7rem;
	height: 1.7rem;
	position: absolute;
	bottom: -6px;
	right: -6px;
	background-color: ${variables.colors.red["100"]};
	color: ${variables.colors.white};
	font-size: 1rem;
	border-radius: 50%;
	${center}
	font-family: ${variables.fonts.secondary};
	font-weight: 600;
`;
