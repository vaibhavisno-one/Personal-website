// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import ChatApp from "@/assets/images/Chat_app (1).png";
import AppleImage from "@/assets/images/Apple_website.png";
import Image from "next/image";
import CheckCircle from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"; 
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


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
    image: ChatApp,
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
    image: AppleImage,
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
    image: AppleImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Portfolio Projects" title="Featured Projects" description="Check out some of my latest projects" />
        {/* <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300
          to-sky-400 bg-clip-text text-transparent text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          Khud pae tarif
        </p> */}
        <div className=" md:mt-20  flex flex-col mt-10 gap-20 ">
          {portfolioProjects.map(projects =>(
            <Card key={projects.title} className=" px-8 pt-8 pb-0
              md:pt-12  md:px-10 lg:pt-16 lg:px-20 ">


          

              <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">
                <div className="lg:pb-16">

                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2
                      font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{projects.type}</span>
                      <span>&bull;</span>
                      <span>{projects.year}</span>
                    
                    </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">  {projects.title}</h3>
                  <hr  className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {projects.results.map(result =>(
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircle className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>                    
                    ))}
                  </ul>
                  <a href={projects.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold 
                    inline-flex items-center justify-center gap-2 mt-8" >
                      
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="size-4"/>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src= {projects.image} alt ={projects.title} 
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute rounded-xl lg:h-full lg:w-auto lg:max-w-none " />
                </div>

              </div>

            </Card>
            
          ))}
        </div>
      </div>
    </section>
  ); 
};
