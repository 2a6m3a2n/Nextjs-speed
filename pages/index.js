/* eslint-disable @next/next/no-img-element */

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    <>
      <div className="fixed bottom-7 right-6" >
        <Link href={'/apply'}><a><img className='animate-bounce border rounded-full w-24 md:w-32' src="/img/prize.gif" alt="" srcSet="" /></a></Link>
      </div>
      <div class="flex bg-white h-96 container justify-center mx-auto">
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-2/3">
          <div>
            <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
              Welcome to
              <span className='italic'> SP<span className='text-red-500 italic'>EE</span>D</span>
            </h2>
            <p class="mt-2 text-sm text-gray-500 md:text-base"><span className="italic"> SPEED-Student Project Exhibition on Engineering Design.</span>The main motto of theis event to encorage Student towards innovative ideas and help them to be more keen to learn with experience. <span className='italic'>It is an Annual event organized by School of Engineering and Science, GD GOENKA UNIVERSITY. </span> </p>
            <div class="flex justify-center lg:justify-start mt-6">
              <Link href={'/award'}>
                <button class="px-3 py-2 lg:px-4 lg:py-3 bg-red-500 text-white text-xs font-semibold rounded hover:text-white hover:bg-red-600">Best Awards</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="hidden lg:block lg:w-1/2">
          <div class="h-full overflow-y-auto" style={{ background: `url("/img/11.png") no-repeat` }}>
            <div class=" bg-black opacity-0">
            </div>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
          <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p class="leading-relaxed">SPEED is one of the biggest events of its kind in Delhi-NCR region. The event was inaugurated by Mr. Venkatesh Sarvasiddhi, Head-Academic Initiatives & Microsoft Innovation Center, Microsoft, and Prof. (Dr.) Deependra Kumar Jha, Vice- Chancellor, GD Goenka University. Mr. Venkatesh was immensely impressed by this event; the number of participations, the variety and quality of projects presented here, and the infrastructure and level of organization in this event.</p>
                <a class="text-red-500 inline-flex items-center mt-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
              <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
