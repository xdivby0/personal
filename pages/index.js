import 'tailwindcss/tailwind.css'
import Project from "../components/Project";

export default function Home() {
  return (
    <div className="text-primary-font text-opacity-90 text-lg font-serif">
        {/* Heading */}
        <div className="bg-primary-darker p-12 py-20 md:pb-32 text-center">
            <h1 className="font-sans text-7xl font-bold text-primary-bold mb-4">Hi, I'm Bengin</h1>
            <h2 className="font-sans text-4xl font-bold text-primary-bold">
                My Girlfriend calls me
                a <span className="tracking-wide font-black bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
                    tech-wizard
                </span>
            </h2>
        </div>
        
        {/*About Section*/}
        <div className="bg-primary-darker pb-12">
            <div className="bg-primary-dark p-12 pt-24 lg:pt-12 mx-auto max-w-7xl xl:rounded-xl shadow-md">
                <div className="relative">
                    <div className="absolute right-1/2 transform translate-x-1/2 -top-40 lg:-top-28 xl:right-16 xl:translate-x-0 transition-all hover:scale-110 hover:-translate-y-2 duration-300 ease-in-out">
                        <img
                            className="w-36 h-36 object-cover rounded-xl hoverable"
                            src="/portrait.png"
                            alt="Bengin Cetindere"/>
                    </div>
                </div>
                
                <div className="md:flex md:items-center">
                    <i className="hidden md:block fas fa-fingerprint text-9xl text-primary-bold mr-12"/>
                    <div>
                        <h1 className="font-sans text-4xl text-primary-bold font-semibold mb-4">About</h1>
                        <div className="">
                            <p className="mb-4">
                                I am a full stack web developer and I love creating pleasant user experiences.
                            </p>
                            <p className="mb-4">
                                For the past 4 years I have been obsessed with web development and currently I work as an IT Consultant at Exxeta in Karlsruhe, Germany.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="relative max-w-7xl mx-auto">
                <div className="bg-accent -top-4 mx-auto w-full h-16 shadow-xl absolute animate-bounce xl:rounded-xl"/>
            </div>*/}
        </div>
        
        {/* Portfolio Section */}
        <div className="bg-primary-darker pb-16">
            <h2 className="font-sans text-5xl font-bold text-primary-bold text-center mb-8 px-8">What I work on</h2>
            <div className="mx-auto text-center max-w-7xl">
                
                <div className="card">
                    <div className="mb-8 md:mx-8 md:order-2 md:w-2/3 flex flex-col justify-between">
                        <div className="flex-1 flex flex-col justify-center">
                            <h3 className="font-sans text-4xl font-bold text-primary-bold mb-4">Subscribee</h3>
                            <p>
                                With Subscribee, every creator can take recurring payments from
                                their fans in return for exclusive content.
                                No coding, filing VAT in different countries or dealing with payment processors.
                            </p>
                            <div className="flex justify-evenly p-8">
                                <a href="https://subscribee.net" target="_blank" rel="noreferrer">
                                    <i className="fas fa-link button hoverable"/>
                                </a>
                                <a href="https://twitter.com/subscribee_net" target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter button hoverable"/>
                                </a>
                            </div>
                        </div>
                        <img src="/subscribee_desktop.png" className="rounded-md shadow-png mt-12 flex-shrink-0 self-center hoverable hover:scale-105"/>
                    </div>
                    <img src="/subscribee_mobile.png" className="md:w-1/3 rounded-lg shadow-none hover:shadow-none shadow-png flex-shrink-0 self-center hoverable hover:scale-105"/>
                </div>

                <div className="card">
                  <div className="md:mx-8 flex flex-col justify-center">
                    <h3 className="font-sans text-4xl font-bold text-primary-bold mb-4">Greeet</h3>
                    <p>
                      Greeets are little pages that you can publish without configuration, designing or coding.
                      Use them for all kind of things like birthday or christmas greeting cards 🍰
                    </p>
                    <div className="flex justify-evenly p-8">
                      <a href="https://greeet.cards" target="_blank" rel="noreferrer">
                        <i className="fas fa-link button hoverable"/>
                      </a>
                    </div>
                  </div>
                  <img src="/screenshot_creating.png" className="md:w-1/3 rounded-md shadow-png flex-shrink-0 mb-8 md:mb-0 self-center hoverable hover:scale-105"/>
                  <img src="/screenshot_result.png" className="md:w-1/3 rounded-md shadow-png flex-shrink-0 self-center hoverable hover:scale-105"/>
                </div>

                <div className="card">
                  <div className="md:mx-8 flex flex-col justify-center">
                        <h3 className="font-sans text-4xl font-bold text-primary-bold mb-4">Minervabooks</h3>
                        <p>
                            Minervabooks is a webapp that recommends books you'll love based on what you already
                            like and what other users like. I used some Science techniques and developed algorithm stuff.
                            The recommendations are really good but it's in german.
                        </p>
                        <div className="flex justify-evenly p-8">
                            <a href="https://minervabooks.net" target="_blank" rel="noreferrer">
                                <i className="fas fa-link button hoverable"/>
                            </a>
                        </div>
                    </div>
                    <img src="/minervabooks.png" className="md:w-2/3 rounded-md shadow-png flex-shrink-0 self-center hoverable hover:scale-105"/>
                </div>

                <div className="card">
                    <div className="md:mx-8 md:order-2 flex flex-col justify-center">
                        <h3 className="font-sans text-4xl font-bold text-primary-bold mb-4">My Personal Blog</h3>
                        <p>
                            On my personal blog, I write about many technical but also non-technical stuff 
                            (like marketing, career, etc.). Mostly web-development, though.
                        </p>
                        <div className="flex justify-evenly p-8">
                            <a href="https://blog.cetindere.de" target="_blank" rel="noreferrer">
                                <i className="fas fa-link button hoverable"/>
                            </a>
                            <a href="https://twitter.com/_divby0" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter button hoverable"/>
                            </a>
                        </div>
                    </div>
                    <img src="/blog.png" className="md:w-2/3 rounded-md shadow-png flex-shrink-0 self-center hoverable hover:scale-105"/>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-primary-bold font-bold text-5xl font-sans text-center mb-2 p-8"> 
                     Any Questions or Remarks?
                </h1>
                <h2 className="text-primary-bold text-3xl text-center font-sans mb-4 p-8"><i className="fab fa-connectdevelop"></i> Let's connect!</h2>
                <div className="flex justify-evenly flex-col md:flex-row p-8 items-stretch w-auto">
                    <a href="https://twitter.com/_divby0" target="_blank" rel="noreferrer" className="button hoverable m-4 text-center">
                        <i className="fab fa-twitter mr-1"/> Slide into my DMs on Twitter
                    </a>
                    <a href="https://instagram.com/_divby0" target="_blank" rel="noreferrer" className="button hoverable m-4 text-center">
                        <i className="fab fa-instagram mr-1"/> Say Hi on Instagram 
                    </a>
                    <span onClick={()=>window.prompt("Copy to clipboard: Ctrl+C", "divby1#9554")} target="_blank" rel="noreferrer" className="button hoverable m-4 text-center cursor-pointer">
                        <i className="fab fa-discord mr-1"/> Copy my Discord Tag
                    </span>
                </div>
            </div>
        </div>
        {/*<Link href="/about">About Page</Link>*/}
    </div>
  )
}
