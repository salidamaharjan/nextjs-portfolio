import {Github, Linkedin} from 'lucide-react';
import DetailSection from "@/components/ui/DetailSection";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex gap-4 flex-col md:p-6 p-4">
            <div
                className="flex justify-evenly items-center bg-fixed bg-[url('/background.png')] md:h-[500px] h-[100px]">
                <div>
                    <div className="font-normal md:text-md text-xs">
                        Hello
                    </div>
                    <div className="font-medium md:text-2xl text:md"> I am Salida</div>
                    <div className="md:text-lg text-xs font-normal">Junior Full Stack Software Developer</div>
                </div>
                <div>
                    <Image className="rounded-md md:w-[300px] md:h-[300px]" width={90} height={90} src="/img.jpg"
                           alt="My image"/>
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
