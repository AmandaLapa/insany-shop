import { Container } from "@/app/styles/patterns";
import { flex } from "@/app/styles/mixins";
import styled from "styled-components";
import variables from "@/app/styles/variables";

export const Header = styled.header`
	padding: 2rem 0;
	background-color: ${variables.colors.white};
`;

export const HeaderContainer = styled.div`
	${Container}
	${flex("row", "center", "space-between", "2rem")}
`;

export const HeaderLogo = styled.picture``;

export const HeaderActions = styled.div`
	${flex("row", "center", "flex-start", "2.4rem")}
`;
