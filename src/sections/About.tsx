import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
// import { title } from "process";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { title } from "process";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";


const toolboxItems =[
  {
    title:"JavaScript",
    iconType:JavascriptIcon,
  },
  {
    title:"HTML5",
    iconType:HTMLIcon,
  },
  {
    title:"CSS3",
    iconType:CssIcon
  },
  {
    title:"React",
    iconType:ReactIcon,
  },
  {
    title:"Chrome",
    iconType:ChromeIcon,
  },
  {
    title:"Github",
    iconType:GithubIcon,
  },
]

const hobbies =[
  {
    title:"Travelling",
    emoji:'🌍',
    left:'50%',
    top:'50%',
  },
  {
    title:"Football",
    emoji:'⚽',
    left:'',
    top:'',
  },
  {
    title:'Gaming',
    emoji:'🎮',
    left:'',
    top:'',
  },
  {
    title:'Reading',
    emoji:'📚',
    left:'',
    top:'',
  },

  {
    title:'Music',
    emoji:'🎵',
    left:'',
    top:'',
  },

]


export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am and what I do."/>

        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px] p-0">
            <CardHeader title="My Reads" description="Explore my favorite books" className="px-6 pt-6"/>
            <div className="w-40 mx-auto ,t-8">
            <Image src={bookImage} alt="Book Cover"  />
            </div>
          </Card>



          <Card className="h-[320px]">
          <CardHeader title="My Toolbox" description="Explore my favorite tools and resources" />
            <ToolboxItems items = {toolboxItems} className="mt-6"/>
            <ToolboxItems items = {toolboxItems} className="mt-6 " itemsWrapperClassName="-translate-x-1/2"/>
          </Card>

          <Card className="h-[320px]">
          <CardHeader title="Beyond Code" description="Explore My Hobbies and Interestss" />
            <div className="relative">
              {hobbies.map(hobby =>(
                <div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute">
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
                ))}
            </div>
          </Card>

          <Card>
            <Image src={mapImage} alt="Map" />
            <Image src={smileMemoji} alt="smile" />
          </Card>

        </div>
      </div>
    </div>
  );
};
