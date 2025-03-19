import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

type SideProjectProps = {
	Logo: LucideIcon;
	title: string;
	description: string;
	situation: string;
	competences: string;
	probleme: string;
	resolution: string;
	text: string;
	url: string;
};

export const SideProject = (props: SideProjectProps) => {
	return (
		<div
			className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
		>
			<span className="bg-accent text-accent-foreground p-3 rounded-sm">
				<props.Logo size={16} />
			</span>
			<div>
				<a href={props.url} className="hover:cursor-pointer"><p className="text-lg font-semibold">{props.title}</p></a>
				<p className="text-sm text-muted-foreground mb-4">
					{props.description}
				</p>
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant="outline" className="text-xs">mon expérience</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
						<AlertDialogTitle>{props.title}</AlertDialogTitle>
						<AlertDialogDescription className="flex flex-col space-y-4">
							<span><span className="underline">Situation:</span> {props.situation}</span>
							<span><span className="underline">Problèmatique:</span> {props.probleme}</span>
							<span><span className="underline">Résolution:</span> {props.resolution}</span>
							<span><span className="underline">Compétences:</span> {props.competences}</span>
						</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
						<AlertDialogAction>Fermer</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</div>
	);
};