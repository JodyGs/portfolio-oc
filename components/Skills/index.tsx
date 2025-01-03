import React from 'react'
import Section from '../Section'
import { Badge } from '../ui/badge'

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
                <svg className="w-5 h-5 text-primary-foreground lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>   
                <h3 className=" text-2xl font-semibold tracking-tight">
                React</h3>
                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex flex-col gap-4'>
              {/* Logo SVG size={42} */}
                <svg className="w-5 h-5 text-primary-foreground lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>   
                <h3 className=" text-2xl font-semibold tracking-tight">
                React</h3>
                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex flex-col gap-4'>
              {/* Logo SVG size={42} */}
                <svg className="w-5 h-5 text-primary-foreground lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>   
                <h3 className=" text-2xl font-semibold tracking-tight">
                React</h3>
                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
    </Section>
  )
}
