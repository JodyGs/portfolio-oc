import { Code, LucideIcon } from "lucide-react";
import Section from "../Section";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";


const SIDE_PROJECT: SideProjectProps[] = [
    {
        Logo: Code,
        title: "Atka.io",
        description: "Lorem ipsum dolor sit amet consectetur, elit.",
        url: "https://google.fr"
    },
    {
        Logo: Code,
        title: "Belong Agency",
        description: "Lorem ipsum dolor sit amet consectetur, elit.",
        url: "https://google.fr"
    },
    {
        Logo: Code,
        title: "W3GC",
        description: "Lorem ipsum dolor sit amet consectetur, elit.",
        url: "https://google.fr"
    },
    {
        Logo: Code,
        title: "Starchain Gazer",
        description: "Lorem ipsum dolor sit amet consectetur, elit.",
        url: "https://google.fr"
    },
]

const WORKS: WorkProps[] = [
    {
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQHOm5Tk7wTzZw/company-logo_100_100/company-logo_100_100/0/1726518500603?e=1743638400&v=beta&t=S4aAZog7p4ewrzHgNEzpaKoorp-gccJSaGlcbTEyqqg",
        title: "Athanor",
        role: "Fondateur",
        date: "15-10-2024",
        url: "https://athanor.dev"
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
]

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
                            <SideProject
                                key={index}
                                {...project}
                            />
                        ))}
                    </div>
				</Card>
			</div>
			<div className="flex-[2] gap-4 h-full w-full flex flex-col">
				<Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">
                        Work
                    </p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
				<Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">
                        Me contacter
                    </p>
                </Card>
			</div>
		</Section>
	);
};


type SideProjectProps = {
	Logo: LucideIcon;
	title: string;
	description: string;
	url: string;
};

const SideProject = (props: SideProjectProps) => {
	return (
		<a href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
			<span className="bg-accent text-accent-foreground p-3 rounded-sm">
				<props.Logo size={16} />
			</span>
			<div>
				<p className="text-lg font-semibold">{props.title}</p>
				<p className="text-sm text-muted-foreground">
					{props.description}
				</p>
			</div>
		</a>
	);
};

type WorkProps = {
	image: string;
	title: string;
	role: string;
	date: string;
	url: string;
	freelance?: boolean;
};

const Work = (props: WorkProps) => {
	return (
		<a href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
			<img src={props.image} alt={props.title} className="w-10 h-10 rounded-md object-contain" />
			<div className="mr-auto">
                <div className="flex items-center gap-2">
				    <p className="text-sm font-semibold">{props.title}</p>
                    {props.freelance && <Badge variant="outline">mission</Badge>}
                </div>
				<p className="text-xs text-muted-foreground">
					{props.role}
				</p>
			</div>
                <p className="text-xs text-end text-muted-foreground">
					{props.date}
				</p>
		</a>
	);
};
