import Section from "../Section";

export default function Hero() {
  return (
    <Section className="flex max-md:flex-col items-start">
        <div className="flex-[2]">
            <h2 className="font-caption text-5xl">Jody Gs</h2>
            <h3>Développeur FullStack</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, provident facere earum eos illo veritatis maxime, itaque, sunt voluptatum et velit tempora repellendus? Quasi molestias, quaerat ea aliquam officiis natus!</p>
        </div>
        <div className="flex-[1]">
        <img src={"https://melvynx.com/images/my-face.png"} className="w-full h-auto max-w-xs" alt="Jody Gonzales" />
        </div>
    </Section>
  )
}
