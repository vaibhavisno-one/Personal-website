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
    left:'5%',
    top:'5%',
  },
  {
    title:"Football",
    emoji:'⚽',
    left:'50%',
    top:'5%',
  },
  {
    title:'Gaming',
    emoji:'🎮',
    left:'10%',
    top:'35%',
  },
  {
    title:'Reading',
    emoji:'📚',
    left:'35%',
    top:'40%',
  },

  {
    title:'Music',
    emoji:'🎵',
    left:'35%',
    top:'65%',
  },
  {
    title:'Reading',
    emoji:'📚',
    left:'75%',
    top:'80%',
  },

  {
    title:'Music',
    emoji:'🎵',
    left:'65%',
    top:'70%%',
  },

]


export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am and what I do."/>

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore my favorite books" className="px-6 pt-6"/>
              <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book Cover"  />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" description="Explore my favorite tools and resources"  className="" />
              <ToolboxItems items = {toolboxItems} className=""/>
              <ToolboxItems items = {toolboxItems} className="mt-6 " itemsWrapperClassName="-translate-x-1/2"/>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8  md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond Code" description="Explore My Hobbies and Interestss"  className="px-6 py-6"/>
              <div className="relative flex-1">
                {hobbies.map(hobby =>(
                  <div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute " style={{
                    left:hobby.left,
                    top:hobby.top
                  }}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                  ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map" 
              className="w-full h-full object-cover object-left-top"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content[''] after:absolute after:inset-0 after:rounded-full after:-z-10 after:bg-gradient-to-r after:outline after:outline-2 after:-outline-offset-2 after:roundfded-full after:outline-gray-950/50">
                <Image src={smileMemoji} alt="smile" 
                className="size-20"/>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};
