// Import statements
import ChatApp from "@/assets/images/Chat_app (1).png";
import AppleImage from "@/assets/images/Apple_website.png";
import Theme from "@/assets/images/theme.png";
import Image from "next/image";
import CheckCircle from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"; 
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

// Portfolio project data
const portfolioProjects = [
  {
    type: " Full Stack App",
    year: "2025",
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
    type: "3D Model",
    year: "2024",
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
    type: "Creative Design",
    year: "2024",
    title: "Theme Switcher Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    image: Theme,
  },
];

// Projects section component
export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio Projects"
          title="Featured Projects"
          description="Check out some of my latest projects"
        />
        <div className="md:mt-20 flex flex-col mt-10 gap-20">
          {portfolioProjects.map((projects, index) => (
            <Card
              key={projects.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 20}px)`,  // Corrected the template literal
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{projects.type}</span>
                    <span>&bull;</span>
                    <span>{projects.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {projects.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {projects.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircle className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {projects.link && (
                    <a href={projects.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Image
                    src={projects.image}
                    alt={projects.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute rounded-xl lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
