"use client";

import React from "react";
import * as C from "./styles";

import Image from "next/image";
import Loupe from "@/assets/icons/search-loupe.svg";

interface Props {
	value: string;
	onChange: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
	return (
		<C.InputWrapper>
			<C.Input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder="Procurando por algo específico?"
			/>
			<Image src={Loupe} quality={100} alt="" />
		</C.InputWrapper>
	);
};

export default SearchInput;
