import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

type SideProjectProps = {
	Logo: LucideIcon;
	title: string;
	description: string;
	text: string;
	url: string;
};

export const SideProject = (props: SideProjectProps) => {
	return (
		<a
			// href={props.url}
			className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
		>
			<span className="bg-accent text-accent-foreground p-3 rounded-sm">
				<props.Logo size={16} />
			</span>
			<div>
				<p className="text-lg font-semibold">{props.title}</p>
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
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
						<AlertDialogAction>Fermer</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</a>
	);
};