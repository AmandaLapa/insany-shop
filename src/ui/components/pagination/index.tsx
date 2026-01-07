"use client";

import React from "react";
import * as C from "./styles";
import Image from "next/image";

import Prev from "@/assets/icons/arrow-left.svg";
import Next from "@/assets/icons/arrow-right.svg";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const handlePrevious = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	const renderPages = () => {
		return Array.from({ length: totalPages }, (_, index) => {
			const page = index + 1;
			return (
				<C.PaginationButton
					key={page}
					onClick={() => onPageChange(page)}
					$active={page === currentPage}
				>
					{page}
				</C.PaginationButton>
			);
		});
	};

	return (
		<C.PaginationContainer>
			<C.PaginationButton
				onClick={handlePrevious}
				disabled={currentPage === 1}
			>
				<Image src={Prev} alt={"Anterior"} />
			</C.PaginationButton>

			<C.PaginationPages>{renderPages()}</C.PaginationPages>

			<C.PaginationButton
				onClick={handleNext}
				disabled={currentPage === totalPages}
			>
				<Image src={Next} alt={"Próxima"} />
			</C.PaginationButton>
		</C.PaginationContainer>
	);
};

export default Pagination;
