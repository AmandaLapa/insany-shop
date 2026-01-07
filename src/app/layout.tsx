import { Inter, Saira } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { Viewport } from "next";
import { Header } from "@/ui/core";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--inter",
	weight: ["400", "500", "600", "700", "800"],
});

const saira = Saira({
	subsets: ["latin"],
	display: "swap",
	variable: "--saira",
	weight: ["400", "500"],
});

export async function generateMetadata() {
	return {
		metadataBase: new URL("https://insanydesign.com/"),
		title: {
			default: "InsanyShop",
			template: `%s - insany`,
		},

		description: "Produtos Insanos para você!",
		robots: "/robots.txt",

		openGraph: {
			type: "website",
			title: `InsanyShop`,
			description: "Produtos Insanos para você!",
			siteName: "Insany-name",
			locale: "pt_BR",
			alternateLocale: "en_US",
			url: "https://insanydesign.com",
			countryName: "Brasil",

			images: [
				{
					url: "/cover.jpg",
					secureUrl: "/cover.jpg",
					alt: "Open Graph Visual Image",
					type: "jpg",
				},
				{
					url: "/cover.png",
					secureUrl: "/cover.png",
					alt: "Open Graph Visual Image",
					type: "png",
				},
			],
		},

		twitter: {
			title: `InsanyShop`,
			description: "Produtos Insanos para você!",
			card: "summary_large_image",
			creator: "@insanydesign",

			images: [
				{
					url: "/cover.jpg",
					secureUrl: "/cover.jpg",
					alt: "Open Graph Visual Image",
					type: "jpg",
				},
				{
					url: "/cover.png",
					secureUrl: "/cover.png",
					alt: "Open Graph Visual Image",
					type: "png",
				},
			],
		},

		icons: [
			{
				rel: "apple-touch-icon",
				url: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				url: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				url: "/favicon-16x16.png",
			},
			{
				rel: "icon",
				url: "/favicon.ico",
			},
		],

		authors: [
			{
				name: "Insany Design",
				url: "https://insany.design",
			},
		],
		appleWebApp: true,
	};
}

export const viewport: Viewport = {
	themeColor: "#000",
	colorScheme: "normal",
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={`${inter.variable} ${saira.variable}`}>
				<Header />
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
