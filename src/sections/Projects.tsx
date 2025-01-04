import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircle from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"; 
import grainImage from "@/assets/images/grain.jpg";


const portfolioProjects = [
  {
    type: "Acme Corp",
    year: "2022",
    title: "Wave-Realtime Chat App",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    image: darkSaasLandingPage,
  },
  {
    type: "Innovative Co",
    year: "2021",
    title: "Apple IPhone 15 Landing Page ",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "",
    image: lightSaasLandingPage,
  },
  {
    type: "Quantum Dynamics",
    year: "2023",
    title: "Restaurant Chat Bot",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300
          to-sky-400 bg-clip-text text-transparent text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          Khud pae tarif
        </p>
        <div className=" md:mt-20  flex flex-col mt-10 gap-20 ">
          {portfolioProjects.map(projects =>(
            <div key={projects.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden 
              after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline 
              after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8
              md:pt-12 md:px-10 after:pointer-events-none">
              
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`,
              }} ></div>
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2
                  font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{projects.type}</span>
                  <span>&bull;</span>
                  <span>{projects.year}</span>
                
              </div>
              <h3 className="font-serif text-2xl mt-2 md: mt-5 md:text-4xl">  {projects.title}</h3>
              <hr  className="border-t-2 border-white/5 mt-4"/>
              <ul className="flex flex-col gap-4 mt-4">
                {projects.results.map(result =>(
                  <li className="flex gap-2 text-sm text-white/50">
                    <CheckCircle className="size-5"/>
                    <span>{result.title}</span>
                  </li>                    
                ))}
              </ul>
              <a href={projects.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold 
                inline-flex items-center justify-center gap-2 mt-8" >
                  <ArrowUpRight className="size-4"/>
                  <span>Visit Live Site</span>
                </button>
              </a>
              <Image src= {projects.image} alt ={projects.title} 
              className="mt-8 -mb-4 "/>

            </div>
            
          ))}
        </div>
      </div>
    </section>
  ); 
};
