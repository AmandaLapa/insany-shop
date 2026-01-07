import { Metadata } from "next";

interface CategoryPageProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({
	params,
}: CategoryPageProps): Promise<Metadata> {
	return {
		title: `${
			params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
		} | Insany Shop`,
		description: `Confira nossa coleção de produtos na categoria ${params.slug}`,
	};
}

export default function CategoryPage({ params }: CategoryPageProps) {
	return (
		<main className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">
				{params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}
			</h1>
			{/* Aqui você pode adicionar a listagem de produtos da categoria */}
		</main>
	);
}
