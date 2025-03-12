import React from 'react'
import Section from '../Section'
import { Badge } from '../ui/badge'
import { ReactIcon, TailwindIcon, ThreejsIcon } from '../Icons'

export default function Skills() {
  return (
    <Section className='flex flex-col items-start gap-4'>
      <Badge variant={"outline"}>Compétences</Badge>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Ma stack favorite
          </h2>
          <div className='flex max-md:flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              {/* Logo SVG size={42} */}
                <ReactIcon size={42} className='animate-spin' style={{animationDuration: "10s"}} />
                <h3 className=" text-2xl font-semibold tracking-tight">
                React</h3>
                <p className="text-sm text-muted-foreground">Mon framework principal. J'utilise également next.js en backend et frontend.</p>
            </div>
            <div className='flex flex-col gap-4'>
              {/* Logo SVG size={42} */}
                <TailwindIcon size={42} />
                <h3 className=" text-2xl font-semibold tracking-tight">
                Tailwind</h3>
                <p className="text-sm text-muted-foreground">Je peux créer des applications attrayantes en quelques secondes avec tailwindcss.</p>
            </div>
            <div className='flex flex-col gap-4'>
              {/* Logo SVG size={42} */}
                <ThreejsIcon size={42} />
                <h3 className=" text-2xl font-semibold tracking-tight">
                Intégration 3D</h3>
                <p className="text-sm text-muted-foreground">J'intègre des éléments 3D à vos projets avec Three.js et React3Fiber.</p>
            </div>
          </div>
    </Section>
  )
}
