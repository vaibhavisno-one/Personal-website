import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";

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
    <div>
      <div className="container">
        <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">Real-world Results</p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 ">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4">Khud pae tarif</p>
        <div className="flex flex-col mt-10 ">
          {portfolioProjects.map(projects =>(
            <div key={projects.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden  after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-[32px]">
              <div className="flex " >
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{projects.type}</span>
                  <span>&bull;</span>
                  <span>{projects.year}</span>
                </div>
                </div>
                <h3>{projects.title}</h3>
                <ul>
                  {projects.results.map(result =>(
                    <li>{result.title}</li>                    
                  ))}
                </ul>
                <a href={projects.link}>
                  <button>View Live Site</button>
                </a>
                <Image src= {projects.image} alt ={projects.title} />

            </div>
            
          ))}
        </div>
      </div>
    </div>
  ); 
};
