import { ArrowUpRight, Code, LucideIcon } from "lucide-react";
import Section from "../Section";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { SideProject } from "./SideProjects";
import { ContactCard } from "./ContactCard";
import { Work } from "./Work";

const SIDE_PROJECT: SideProjectProps[] = [
	{
		Logo: Code,
		title: "Atka.io",
		description: "Lorem ipsum dolor sit amet consectetur, elit.",
		url: "https://google.fr",
	},
	{
		Logo: Code,
		title: "Belong Agency",
		description: "Lorem ipsum dolor sit amet consectetur, elit.",
		url: "https://google.fr",
	},
	{
		Logo: Code,
		title: "W3GC",
		description: "Lorem ipsum dolor sit amet consectetur, elit.",
		url: "https://google.fr",
	},
	{
		Logo: Code,
		title: "Starchain Gazer",
		description: "Lorem ipsum dolor sit amet consectetur, elit.",
		url: "https://google.fr",
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
		title: "CodingCrew",
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
						Lorem, ipsum dolor.
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
					<p className="text-lg text-muted-foreground">Work</p>
					<div className="flex flex-col gap-4">
						{WORKS.map((work, index) => (
							<Work key={index} {...work} />
						))}
					</div>
				</Card>
				<Card className="p-4 flex-1 flex flex-col gap2">
					<p className="text-lg text-muted-foreground">
						Me contacter
					</p>
					<ContactCard
						url="https://cal.com/jody.gs/30min?date=2025-01-03&month=2025-01"
						name="Jody Gonzales"
						image="https://melvynx.com/images/my-face.png"
						mediumImage="data:image/png;base64,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"
						description="LinkedIn"
					/>
					<ContactCard
						url="https://cal.com/jody.gs/30min?date=2025-01-03&month=2025-01"
						name="Jody Gs"
						image="https://melvynx.com/images/my-face.png"
						mediumImage="data:image/jpeg;base64,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"
						description="Demande rappel"
					/>
				</Card>
			</div>
		</Section>
	);
};

