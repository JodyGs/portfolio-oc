import { ComponentPropsWithoutRef } from "react";
import Section from "../Section";
import { cn } from "@/lib/utils";
import { GithubIcon } from "../Icons";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
	return (
		<span
			className={cn(
				"border-accent border rounded-sm text-primary bg-accent/30 hover:bg-accent/50 transition-colors px-1 py-0.5 font-mono inline-flex items-center gap-1"
			)}
			{...props}
		/>
	);
};

export default function Hero() {
	return (
		// TODO: Ajouter svg sur les <Code>
		<Section className="flex max-md:flex-col items-start gap-4 w-full">
			<div className="flex-[3] flex flex-col gap-2">
				<h2 className="font-caption text-5xl text-primary font-bold">Jody Gonzales</h2>
				<h3 className="text-3xl font-caption">Développeur FullStack</h3>
				<p className="text-base">
					Passionné par le développement web et la création
					d&apos;applications performantes, je suis un développeur
					spécialisé en <Code><GithubIcon size={16} className="inline" />React</Code> et <Code><GithubIcon size={16} className="inline" />Next.js</Code> .
					Actuellement en poste chez <Code>Chrom Interactiv'</Code>. 
				</p>
			</div>
			<div className="flex-[2] max-md:m-auto ml-auto">
				<img
					src="/jodygsportfolio.webp"
					className="w-full h-auto max-w-xs max-md:w-56"
					alt="Jody Gonzales"
				/>
			</div>
		</Section>
	);
}
