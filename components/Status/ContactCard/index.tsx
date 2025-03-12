import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export const ContactCard = (props: {
	image: string;
	mediumImage: string;
	name: string;
	description: string;
	url?: string;
}) => {
	return (
		<a href={props.url}>
			<Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
				<div className="relative">
					<img
						src={props.image}
						alt={props.name}
						className="w-10 h-10 rounded-full object-contain"
					/>
					<img
						src={props.mediumImage}
						alt={props.name}
						className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
					/>
				</div>
				<div className="mr-auto">
					<div className="flex items-center gap-2">
						<p className="text-lg font-semibold">{props.name}</p>
					</div>
					<p className="text-xs text-muted-foreground">
						{props.description}
					</p>
				</div>
				<ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
			</Card>
		</a>
	);
};