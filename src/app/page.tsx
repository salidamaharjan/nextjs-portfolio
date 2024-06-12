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
            <div className="flex flex-col gap-4">
                <DetailSection id="about-me">
                    <div>About Me</div>
                    <div className="font-normal md:text-md text-sm">Enthusiastic Junior Full Stack Developer,
                        detail-oriented and motivated coding bootcamp
                        graduate with a passion for software development. Seeking an entry- level position where I can
                        apply my programming skills and contribute to innovative projects.
                    </div>
                    <div className="font-normal md:text-md text-sm">
                        <div className="md:font-medium font-medium md:text-lg">My Skills</div>
                        <ul className="pl-4">
                            <li className="list-disc"> Proficient in HTML, CSS, JavaScript.
                            </li>
                            <li className="list-disc"> Experience with front-end frameworks/libraries such as React.js
                                and Bootstrap, BULMA,
                                Chart.js,
                                Tailwind.
                            </li>
                            <li className="list-disc">
                                Familiarity with back-end technologies including Node.js, Express.js, and database
                                management
                                system MongoDB, MySQL.
                            </li>
                            <li className="list-disc">
                                Understanding of version control with Git and GitHub.
                            </li>
                            <li className="list-disc"> Knowledge of Agile development methodologies.
                            </li>
                        </ul>
                    </div>
                </DetailSection>
                <DetailSection id="projects">
                    <div>Projects</div>
                    <div className="font-normal md:text-sm text-xs">
                        <div className="md:font-medium font-medium text-sm md:text-md">Food and Recipes</div>
                        This app allows users to search an ingredient, receive the nutrition information and recipes.
                        Users can save recipes to their favorites.
                        <div className="md:font-medium font-medium text-sm md:text-md">Expenses Tracker </div>
                        This app allows the user to add the expenses and track it. The expenses trend can be seen in the
                        line graph and pie chart.
                        <div className="md:font-medium font-medium text-sm md:text-md">Weather Dashboard App </div>
                        This app shows the weather for the current day and up to next 5 days. Data is retrieved from
                        open weather API.
                        <div className="md:font-medium font-medium text-sm md:text-md">Employee Tracker SQL</div>
                        The user can view all the employee from DB, add employee, update role, manager and view the
                        budget stored in DB. User can delete the data as well.
                        <div className="md:font-medium font-medium text-sm md:text-md">Note Taker Express.js</div>
                        The user can use this app to create a note, edit, delete and save according to work plan.
                        <div className="md:font-medium font-medium text-sm md:text-md">PWA Text Editor</div>
                        This app can be used offline and is downloadable. User can add text, edit and save them.
                    </div>
                </DetailSection>
                <DetailSection id="education">
                    <div>Education</div>
                    <div className="font-normal md:text-sm text-xs">
                        <div className="md:font-medium font-medium text-sm md:text-md">Full Stack Web Development Boot
                            Camp
                        </div>
                        University Of Minnesota partnership with edX Minneapolis,
                        MN
                        <div className="md:font-medium font-medium text-sm md:text-md">Bachelor of Science in Software
                            Development</div> Grand Canyon University
                        Phoenix, AZ
                        <div className="md:font-medium font-medium text-sm md:text-md">Post Basic Bachelor in
                            Nursing</div>
                        Kathmandu Model College of Nursing Kathmandu, Nepal
                        <div className="md:font-medium font-medium text-sm md:text-md">Associate Degree in Nursing</div>
                        Manmohan Memorial Institute of Health Sciences Kathmandu, Nepal
                    </div>
                </DetailSection>
                <DetailSection id="contact-me" className="flex flex-col">
                    <div>Contact Me</div>
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
