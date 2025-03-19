import { Badge } from "@/components/ui/badge";

export type WorkProps = {
	image: string;
	title: string;
	role: string;
	date: string;
	url: string;
	freelance?: boolean;
};

export const Work = (props: WorkProps) => {
	return (
		<a
			href={props.url}
			className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
		>
			<img
				src={props.image}
				alt={props.title}
				className="w-10 h-10 rounded-md object-contain"
			/>
			<div className="mr-auto">
				<div className="flex items-center gap-2">
					<p className="text-sm font-semibold">{props.title}</p>
					{props.freelance && (
						<Badge variant="outline">mission</Badge>
					)}
				</div>
				<p className="text-xs text-muted-foreground">{props.role}</p>
			</div>
			<p className="text-xs text-end text-muted-foreground">
				{props.date}
			</p>
		</a>
	);
};
