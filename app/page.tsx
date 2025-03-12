import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Spacing } from "@/components/Spacing";
import { Status } from "../components/Status/index";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<main>
			<Header />
			<Spacing size="md" />
			<Hero />
			<Spacing size="md" />
			<Status />
			<Spacing size="md" />
			<Skills />
			<Spacing size="md" />
			<Contact />
			<Spacing size="md" />
		</main>
	);
}
