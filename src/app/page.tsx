import {Github, Linkedin} from 'lucide-react';
import DetailSection from "@/components/ui/DetailSection";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex gap-4 flex-col p-6">
            <div className="flex justify-evenly items-center bg-fixed bg-[url('/background.png')] h-[500px]">
                <div>
                    <div className="font-normal text-md">
                        Hello
                    </div>
                    <div className="font-medium text-2xl"> I am Salida</div>
                    <div className="text-lg font-normal">Junior Full Stack Software Developer</div>
                </div>
                <div>
                    <Image className="rounded-md" width={300} height={300} src="/img.jpg" alt="My image"/>
                </div>
            </div>
            <div>
                <DetailSection id="about-me">
                    About Me
                </DetailSection>
                <DetailSection id="projects">
                    Projects
                </DetailSection>
                <DetailSection id="education">
                    Education
                </DetailSection>
                <DetailSection id="contact-me" className="flex flex-col">
                    Contact Me
                    <div className="font-normal">
                        <a href="https://www.linkedin.com/in/salida-maharjan-6381b9173/" target="_blank"><Linkedin/>
                        </a>
                        <a href="https://github.com/salidamaharjan" target="_blank">
                            <Github/>
                        </a>
                    </div>
                </DetailSection>
            </div>
        </div>
    );
}
