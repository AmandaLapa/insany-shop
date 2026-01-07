import styled from "styled-components";
import variables from "@/app/styles/variables";
import { flex } from "@/app/styles/mixins";

export const InputWrapper = styled.div`
	width: 32.4rem;
	${flex("row", "center", "space-between", "2rem")}
	background-color: ${variables.colors.neutral[100]};
	padding: 0.9rem 1.6rem 0.9rem 1.2rem;
	border-radius: 0.8rem;
	gap: 0.5rem;
`;

export const Input = styled.input`
	outline: none;
	flex: 1;
	font-size: 1.4rem;
	color: ${variables.colors.neutral[400]};
	line-height: 2.2rem;
	background: 0 0;
`;
