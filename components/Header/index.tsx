import Link from "next/link";
import {GithubIcon, TwitterIcon, LinkedInIcon} from "../Icons";
import Section from "../Section";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
	return (
		<header className="sticky top-0 py-4">
			<Section className="flex items-baseline">
				<h1 className="text-lg font-bold text-primary">jodygs.dev</h1>
				<div className="flex-1"></div>
				<nav>
					<ul className="flex items-center gap-2">
						<li>
							<a
								className={cn(
									buttonVariants({ variant: "outline" }),
									"size-6 p-0"
								)}
								href={"https://github.com/JodyGs"}
							>
								<GithubIcon
									size={12}
									className="text-foreground"
								/>
							</a>
						</li>
						<li>
							<a
								className={cn(
									buttonVariants({ variant: "outline" }),
									"size-6 p-0"
								)}
								href={"https://www.linkedin.com/in/jodygs/"}
							>
								<LinkedInIcon
									size={12}
									className="text-foreground"
								/>
							</a>
						</li>
						<li>
							<a
								className={cn(
									buttonVariants({ variant: "outline" }),
									"size-6 p-0"
								)}
								href={"https://github.com/JodyGs"}
							>
								<TwitterIcon
									size={12}
									className="text-foreground"
								/>
							</a>
						</li>
					</ul>
				</nav>
			</Section>
		</header>
	);
}
