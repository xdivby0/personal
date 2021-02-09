import 'tailwindcss/tailwind.css'
import Project from "../components/Project";

export default function Home() {
  return (
    <div className="animate-fadein text-lg font-serif">
        {/* Heading */}
        <div className="bg-primary-darker p-12 py-20 md:pb-32 text-center">
            <h1 className="font-sans text-7xl font-bold text-primary-bold mb-4 opacity-0 animate-appear">Hi, I'm Bengin</h1>
            <h2 className="font-sans text-4xl font-bold text-primary-bold opacity-0 animate-appear">
                My Girlfriend calls me
                a <span className="tracking-wide font-black bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
                    tech-wizard
                </span>
            </h2>
        </div>
        
        {/*About Section*/}
        <div className="bg-primary-darker pb-12">
            <div className="bg-primary-dark text-primary-white p-12 pt-24 lg:pt-12 mx-auto max-w-7xl xl:rounded-xl shadow-md">
                <div className="relative">
                    <div className="absolute right-1/2 transform translate-x-1/2 -top-40 lg:-top-28 xl:right-16 xl:translate-x-0 transition-all hover:-translate-y-2 duration-300">
                        <img
                            className="w-36 h-36 object-cover rounded-xl transition-all hover:shadow-hover shadow-md transform hover:scale-110 opacity-0 animate-appear"
                            src="/portrait.png"
                            alt="Bengin Cetindere"/>
                    </div>
                </div>
                
                <div className="md:flex md:items-center">
                    <i className="hidden md:block fas fa-fingerprint text-9xl text-primary-bold mr-12"/>
                    <div>
                        <h1 className="font-sans text-4xl text-primary-bold font-semibold mb-4 opacity-0 animate-appear">About</h1>
                        <div className="opacity-0 animate-appear text-primary-font">
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
            <div className="mx-auto text-center text-primary-font max-w-7xl">
                
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
                                    <i className="fas fa-link bg-accent p-3 rounded-md text-primary-white shadow-md"/>
                                </a>
                                <a href="https://twitter.com/subscribee_net" target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter bg-accent p-3 rounded-md text-primary-white shadow-md"/>
                                </a>
                            </div>
                        </div>
                        <img src="/subscribee_desktop.png" className="rounded-md shadow-png mt-12 flex-shrink-0 self-center"/>
                    </div>
                    <img src="/subscribee_mobile.png" className="md:w-1/3 rounded-lg shadow-png flex-shrink-0 self-center"/>
                </div>

                <div className="card">
                    <div className="md:mx-8 flex flex-col justify-center">
                        <h3 className="font-sans text-4xl font-bold text-primary-bold mb-4">Minervabooks</h3>
                        <p>
                            With Subscribee, every creator can take recurring payments from
                            their fans in return for exclusive content.
                            No coding, no filing VAT in different countries and no dealing with payment processors.
                        </p>
                        <div className="flex justify-evenly p-8">
                            <a href="https://minervabooks.net" target="_blank" rel="noreferrer">
                                <i className="fas fa-link bg-accent p-3 rounded-md text-primary-white shadow-md"/>
                            </a>
                        </div>
                    </div>
                    <img src="/minervabooks.png" className="md:w-2/3 rounded-md shadow-png flex-shrink-0 self-center"/>
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
                                <i className="fas fa-link bg-accent p-3 rounded-md text-primary-white shadow-md"/>
                            </a>
                            <a href="https://twitter.com/_divby0" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter bg-accent p-3 rounded-md text-primary-white shadow-md"/>
                            </a>
                        </div>
                    </div>
                    <img src="/blog.png" className="md:w-2/3 rounded-md shadow-png flex-shrink-0 self-center"/>
                </div>
                <div className="mb-16">
                   <h1 className="font-black text-primary-font text-7xl">Hallo</h1> 
                </div>
            </div>
        </div>
        {/*<Link href="/about">About Page</Link>*/}
    </div>
  )
}
