import {Github, Linkedin} from 'lucide-react';
import DetailSection from "@/components/ui/DetailSection";
import Image from "next/image";
export default function Home() {
    return (
        <div className="flex flex-col justify-evenly gap-2 p-6">
            <div>
            <div className="font-normal text-xs">
                Hello
            </div>
            <div className="font-medium"> I am Salida</div>
            <div className="text-sm font-normal">Junior Full Stack Software Developer</div>
            <div>
                <Image className="rounded-md" width={200} height={200} src="/img.jpg" alt="My image"/>
            </div>
            </div>
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
    );
}
