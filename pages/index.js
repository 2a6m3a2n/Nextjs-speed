import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    <>
      <div className="fixed bottom-7 right-6" >
        <Link href={'/apply'}><a><img className='animate-bounce border rounded-full w-24 md:w-32' src="/img/prize.gif" alt="" srcSet="" /></a></Link>
      </div>
      <div className="flex bg-white h-96 container justify-center mx-auto">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-2/3">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Welcome to
              <span className='italic'> SP<span className='text-red-500 italic'>EE</span>D</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base"><span className="italic"> SPEED-Student Project Exhibition on Engineering Design.</span>The main motto of theis event to encorage Student towards innovative ideas and help them to be more keen to learn with experience. <span className='italic'>It is an Annual event organized by School of Engineering and Science, GD GOENKA UNIVERSITY. </span> </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <Link href={'/award'}>
                <button className="px-3 py-2 lg:px-4 lg:py-3 bg-red-500 text-white text-xs font-semibold rounded hover:text-white hover:bg-red-600">Best Awards</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <div className="h-full overflow-y-auto" style={{ background: `url("/img/11.png") no-repeat` }}>
            <div className=" bg-black opacity-0">
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-full h-80 mb-8 object-cover object-center rounded-xl inline-block border-2 border-gray-200 bg-gray-100" src="/img/a1.png"/>
                  <p className="leading-relaxed">SPEED is one of the biggest events of its kind in Delhi-NCR region. The event was inaugurated by Mr. Venkatesh Sarvasiddhi, Head-Academic Initi/ atives & Microsoft Innovation Center, Microsoft, and Prof. (Dr.) Deependra Kumar Jha, Vice- Chancellor, GD Goenka University. Mr. Venkatesh was immensely impressed by this event; the number of participations, the variety and quality of projects presented here, and the infrastructure and level of organization in this event.</p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-full h-80 mb-8 object-cover object-center rounded-xl inline-block border-2 border-gray-200 bg-gray-100" src="/img/3.jpg"/>
                  <p className="leading-relaxed">After inauguration, the exhibition was open for general viewing and evaluation by judges. The project evaluation team consisted of Mr. Devendra/  Burman, Vice President, Accenture and Mr. Amit Sharma, Head, Phoenix (India) Pvt. Ltd. There was huge excitement among participants and the visitors.</p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-full h-80 mb-8 object-cover object-center rounded-xl inline-block border-2 border-gray-200 bg-gray-100" src="/img/7a.png"/>
                  <p className="leading-relaxed">SPEED  will be organized at the sprawling campus of GD Goenka University which is located at the serene foothills of Aravali near Gurgaon at Gurgaon-Sohna Road. All science and engineering students from schools/universities/colleges are welcome to participate in this exciting competition and win exciting prizes apart from having fun!</p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            <div className="text-center lg:w-2/3 w-full">/  
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
              <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  )
}
