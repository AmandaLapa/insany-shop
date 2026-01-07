"use client";

import React from "react";

import Image from "next/image";

import * as S from "./styles";

import Logo from "@/assets/brand/insanyshop.svg";
import SearchInput from "../../components/search";
import CartButton from "../../components/cart";

const Header: React.FC = () => {
	const [search, setSearch] = React.useState("");

	return (
		<S.Header>
			<S.HeaderContainer>
				<S.HeaderLogo>
					<Image src={Logo} quality={100} alt="Logo Insany Shop" />
				</S.HeaderLogo>

				<S.HeaderActions>
					<SearchInput value={search} onChange={setSearch} />
					<CartButton />
				</S.HeaderActions>
			</S.HeaderContainer>
		</S.Header>
	);
};

export default Header;
