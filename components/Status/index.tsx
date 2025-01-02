import Section from "../Section";
import { Card } from "../ui/card";

export const Status = () => {
	return (
        <Section className="flex max-md:flex-col items-start gap-4 w-full">
            <div className="flex-[3]">
			<Card className="flex flex-col gap-2 p-4 w-full">
                Side Project
            </Card>
            </div>
            <div className="flex-[2] gap-4 h-full w-full flex flex-col">
                <Card className="p-4 flex-1">Work</Card>
                <Card className="p-4 flex-1">Contact me</Card>
            </div>
		</Section>
	);
};
