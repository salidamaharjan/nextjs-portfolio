import {Github, Linkedin} from 'lucide-react';
import DetailSection from "@/components/ui/DetailSection";
export default function Home() {
    return (
        <div className="flex flex-col justify-evenly gap-2 p-6">
            <DetailSection>
                About Me
            </DetailSection>
            <DetailSection>
                Projects
            </DetailSection>
            <DetailSection>
                Education
            </DetailSection>
            <DetailSection className="flex flex-col">
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
