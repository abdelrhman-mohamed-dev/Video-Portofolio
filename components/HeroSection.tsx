import React from 'react'
import { BentoGrid } from './ui/bento-grid'
import { BentoGridThirdDemo } from './ui/test-bento'

const HeroSection = () => {
  return (
    <div className='mt-8 flex flex-col gap-5 items-center justify-center bg-slate-950'>
      {/* <h2 className='bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'>Channals that i have worked for </h2> */}
      <div className='h-auto  p-5 '>

        <h2 className='my-12 text-6xl text-teal-200 font-semibold text-center'>Services I Offer </h2>
      </div>
      <BentoGridThirdDemo />
    </div>
  )
}

export default HeroSection
