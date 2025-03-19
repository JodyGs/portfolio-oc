import { Code } from "lucide-react";
import Section from "../Section";
import { Card } from "../ui/card";
import { SideProject } from "./SideProjects";
import { ContactCard } from "./ContactCard";
import { Work } from "./Work";

const SIDE_PROJECT: SideProjectProps[] = [
	{
		Logo: Code,
		title: "Atka.io",
		description: "Incubateur de projets blockchain.",
		situation: "Création d'un site web avec une demande d'élément 3D sur le Hero Banner.",
		competences: "Nextjs - Three.js - Tailwindcss - FramerMotion",
		probleme: "Difficultés de performances avec la partie Three.js/R3F.",
		resolution: "Groupement des meshes et des textures pour optmimiser la vitesse du rendu 3D.",
		text: "ceci est un exemple de texte" ,
		url: "https://atka.io",
	},
	{
		Logo: Code,
		title: "Belong Agency",
		description: "Agence de communication - relation publique",
		situation: "Création de site web avec un besoin de backend pour l'intégration des publications de l'agence et une internationalisation (FR/EN)",
		competences: "Nextjs - Sanity.io (BackEnd)) - Tailwindcss - GSAP (animation)",
		probleme: "Difficulté pour permettre au client de mettre à jour ses publications.",
		resolution: "Utilisation d'un backend serverless via sanity.io",
		text: "ceci est un exemple de texte" ,
		url: "https://www.belongparis.com/fr/",
	},
	{
		Logo: Code,
		title: "W3GC",
		description: "Conférence jeux video web 3",
		situation: "Intégration d'une maquette pour le siteweb de la convention.",
		competences: "Nextjs - Tailwindcss - FramerMotion",
		probleme: "Difficulté pour placer des cards par rapport a des svg représentant les lignes rouges.",
		resolution: "J'ai calculé la position de chacun des cards en pixel que j'ai converti en pourcentage afin de pouvoir garder les proportions et de les placer conformément à la maquette",
		text: "ceci est un exemple de texte" ,
		url: "https://w3gc-website-quzqd2tec-jodylo.vercel.app/",
	},
	{
		Logo: Code,
		title: "Starchain Gazer",
		description: "Studio de jeux videos web 3",
		situation: "Refonte du siteweb avec une demande de gestion des candidatures permettant au client de recevoir des CVs dans un espace dropbox",
		competences: "Nextjs - Tailwindcss - FramerMotion - BackEnd",
		probleme: "Difficulté de placement des cards de la section our services au niveau du responsive design.",
		resolution: "Utilisation de css grid pour gérer la taille et le nombre de card selon le breakpoint tout en gardant les porportions de la maquette.",
		text: "ceci est un exemple de texte" ,
		url: "https://w3gc-website-quzqd2tec-jodylo.vercel.app/",
	},
];

const WORKS: WorkProps[] = [
	{
		image: "https://media.licdn.com/dms/image/v2/D4E0BAQHOm5Tk7wTzZw/company-logo_100_100/company-logo_100_100/0/1726518500603?e=1743638400&v=beta&t=S4aAZog7p4ewrzHgNEzpaKoorp-gccJSaGlcbTEyqqg",
		title: "Athanor",
		role: "Fondateur",
		date: "15-10-2024",
		url: "https://athanor.dev",
	},
	{
		image: "https://media.licdn.com/dms/image/v2/C4E0BAQGT9dcLjLPsFQ/company-logo_100_100/company-logo_100_100/0/1677703159471?e=1743638400&v=beta&t=Yqo5PsiSjAZY3eVF2oLro8UV2qNxA4OPg0POeK_OFT0",
		title: "Chrom Interactiv'",
		role: "Développeur FrontEnd",
		date: "2022 - 2024",
		url: "https://react.codingcrew.dev/",
		// freelance: true
	},
	{
		image: "https://media.licdn.com/dms/image/v2/C4E0BAQEUt2hdxQquXA/company-logo_100_100/company-logo_100_100/0/1646748872844/starchain_gazer_logo?e=1743638400&v=beta&t=r2jjmaYUToMFi5JkH7WPCE7U7mvrr_Dz-5BURvtw2OQ",
		title: "Starchain Gazer",
		role: "Développeur FrontEnd",
		date: "2022",
		url: "https://starchaingazer.io",
		// freelance: true
	},
];

export const Status = () => {
	return (
		<Section className="flex max-md:flex-col items-start gap-4 w-full">
			<div className="flex-[3] w-full">
				<Card className="flex flex-col gap-2 p-4 w-full">
					<p className="text-lg text-muted-foreground">
						Projets professionnels
					</p>
					<div className="flex flex-col gap-4">
						{SIDE_PROJECT.map((project, index) => (
							<SideProject key={index} {...project} />
						))}
					</div>
				</Card>
			</div>
			<div className="flex-[2] gap-4 h-full w-full flex flex-col">
				<Card className="p-4 flex-1">
					<p className="text-lg text-muted-foreground">Postes</p>
					<div className="flex flex-col gap-4">
						{WORKS.map((work, index) => (
							<Work key={index} {...work} />
						))}
					</div>
				</Card>
				<Card className="p-4 flex-1 flex flex-col gap-2">
					<p className="text-lg text-muted-foreground">
						Me contacter
					</p>
					<ContactCard
						url="https://cal.com/jody.gs/30min?date=2025-01-03&month=2025-01"
						name="Jody Gonzales"
						image="/jodygsportfolio.webp"
						mediumImage="data:image/png;base64,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"
						description="LinkedIn"
					/>
					<ContactCard
						url="https://cal.com/jody.gs/30min?date=2025-01-03&month=2025-01"
						name="Jody Gs"
						image="/jodygsportfolio.webp"
						mediumImage="data:image/jpeg;base64,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"
						description="Demande rappel"
					/>
					<ContactCard
						url="https://cal.com/jody.gs/30min?date=2025-01-03&month=2025-01"
						name="Jody Gs"
						image="/jodygsportfolio.webp"
						mediumImage="data:image/png;base64,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"
						description="Email"
					/>
				</Card>
			</div>
		</Section>
	);
};

