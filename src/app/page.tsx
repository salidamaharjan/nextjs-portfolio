import {Github, Linkedin} from 'lucide-react';
import DetailSection from "@/components/ui/DetailSection";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex gap-4 flex-col md:p-6 p-4">
            <div
                className="flex justify-evenly items-center bg-fixed bg-[url('/background.png')] md:h-[500px] h-[100px]">
                <div>
                    <div className="font-normal md:text-lg text-xs">
                        Hello
                    </div>
                    <div className="font-medium md:text-2xl text:md"> I am Salida</div>
                    <div className="font-normal md:text-md text-xs">Junior Full Stack Software Developer</div>
                </div>
                <Image className="rounded-md md:w-[300px] md:h-[300px]" width={90} height={90} src="/img.jpg"
                       alt="My image"/>
            </div>
            <div className="flex flex-col gap-4">
                <DetailSection id="about-me"
                               className="md:grid md:grid-cols-2 grid gap-4 md:justify-around rounded-t-md bg-gray-200 p-4">
                    <Image className="rounded-md md:w-[250px] md:h-[250px] md:self-center justify-center" width={150}
                           height={150}
                           src="/aboutMe.jpg"
                           alt="My image"/>
                    <div className="grid gap-2">
                        <div>About Me</div>
                        <div className="font-normal md:text-md text-sm">Enthusiastic Junior Full Stack Developer,
                            detail-oriented and motivated coding bootcamp
                            graduate with a passion for software development. Seeking an entry- level position where I
                            can
                            apply my programming skills and contribute to innovative projects.
                        </div>
                        <div className="font-normal md:text-md text-sm">
                            <div className="md:font-medium font-medium text-red-700 text-sm md:text-md">My Skills</div>
                            <ul className="pl-4">
                                <li className="list-disc"> Proficient in HTML, CSS, JavaScript.
                                </li>
                                <li className="list-disc"> Experience with front-end frameworks/libraries such as
                                    React.js
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
                    </div>
                </DetailSection>
                <DetailSection id="projects" className="bg-amber-50 flex flex-col gap-2 text-center">
                    <div>Projects</div>
                    <div className="font-normal text-center md:text-sm md:grid-cols-3 grid-cols-2 grid text-xs gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="md:font-medium font-medium text-sm md:text-md text-red-700">
                                Food and Recipes
                            </div>
                            <div className="flex justify-center">
                                <a href="https://github.com/salidamaharjan/food-and-recipe" target="_blank"> <Image
                                    className="md:w-[200px] md:h-[200px] rounded-md"
                                    src="/foodAndRecipe.png" alt="Food and Recipes" width={150}
                                    height={150}/></a>
                            </div>
                            This app allows users to search an ingredient, receive the nutrition information and
                            recipes.
                            Users can save recipes to their favorites.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="md:font-medium font-medium text-sm md:text-md text-red-700">Expenses
                                Tracker
                            </div>
                            <div className="flex justify-center">
                                <a href="https://github.com/salidamaharjan/expenses-tracker" target="_blank">
                                    <Image
                                        className="md:w-[200px] md:h-[200px] rounded-md md:self-center justify-center"
                                        src="/expensesTracker.png" alt="Food and Recipes" width={150} height={150}/>
                                </a>
                            </div>
                            This app allows the user to add the expenses and track it. The expenses trend can be seen in
                            the
                            line graph and pie chart.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="md:font-medium font-medium text-sm md:text-md text-red-700">Weather
                                Dashboard
                                App
                            </div>
                            <div className="flex justify-center">
                                <a href="https://github.com/salidamaharjan/weather-dashboard-challenge-06"
                                   target="_blank">
                                    <Image
                                        className="md:w-[200px] md:h-[200px] rounded-md md:self-center justify-center"
                                        src="/weatherDashboard.png" alt="Food and Recipes" width={150} height={150}/>
                                </a>
                            </div>
                            This app shows the weather for the current day and up to next 5 days. Data is retrieved from
                            open weather API.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="md:font-medium font-medium text-sm md:text-md text-red-700">Employee Tracker
                                SQL
                            </div>
                            <div className="flex justify-center">
                                <a href="https://github.com/salidamaharjan/employee-tracker-sql" target="_blank">
                                    <Image
                                        className="md:w-[200px] md:h-[200px] rounded-md md:self-center justify-center"
                                        src="/employeeTracker.png" alt="Food and Recipes" width={150} height={150}/>
                                </a>
                            </div>
                            The user can view all the employee from DB, add employee, update role, manager and view the
                            budget stored in DB. User can delete the data as well.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="md:font-medium font-medium text-sm md:text-md text-red-700">Note Taker
                                Express.js
                            </div>
                            <div className="flex justify-center">
                                <a href="https://github.com/salidamaharjan/note-taker-express-js" target="_blank">
                                    <Image
                                        className="md:w-[200px] md:h-[200px] rounded-md md:self-center justify-center"
                                        src="/noteTaker.png" alt="Food and Recipes" width={150} height={150}/>
                                </a>
                            </div>
                            The user can use this app to create a note, edit, delete and save according to work plan.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="md:font-medium font-medium text-sm md:text-md text-red-700">PWA Text
                                Editor
                            </div>
                            <div className="flex justify-center">
                                <a href="https://github.com/salidamaharjan/PWA-text-editor-19" target="_blank">
                                    <Image
                                        className="md:w-[200px] md:h-[200px] md:self-center rounded-md justify-center"
                                        src="/textEditorPWA.png" alt="Food and Recipes" width={150} height={150}/>
                                </a>
                            </div>
                            This app can be used offline and is downloadable. User can add text, edit and save them.
                        </div>
                    </div>
                </DetailSection>
                <DetailSection id="education" className="bg-gray-200 flex flex-col gap-2 justify-center items-center">
                    <div>Education</div>
                    <div className="grid grid-cols-2 gap-4 font-normal md:text-sm text-xs">
                        <div className="flex flex-col text-center gap-2">
                            <div className="md:font-medium font-medium text-sm md:text-md text-red-700">Full Stack Web
                                Development Boot
                                Camp
                            </div>
                            <div className="flex justify-center">
                                <Image src="/full-stack-web-development-certificate.png" alt="Certificate" width={100}
                                       height={100}/>
                            </div>
                            University Of Minnesota partnership with edX Minneapolis,
                            MN
                        </div>
                        <div className="flex flex-col text-center gap-2">
                            <div className="md:font-medium font-medium text-sm md:text-md text-red-700">Bachelor of
                                Science
                                in Software
                                Development
                            </div>
                            <div className="flex justify-center">
                                <Image src="/GCU.png" alt="Certificate" width={100}
                                       height={100}/>
                            </div>
                            Grand Canyon University
                            Phoenix, AZ
                        </div>
                        <div className="flex flex-col text-center gap-2">
                            <div className="md:font-medium font-medium text-sm md:text-md text-red-700">Post Basic
                                Bachelor
                                in
                                Nursing
                            </div>
                            <div className="flex justify-center">
                                <Image src="/KAMSHON.png" alt="Certificate" width={100}
                                       height={100}/>
                            </div>
                            Kathmandu Model College of Nursing Kathmandu, Nepal
                        </div>
                        <div className="flex flex-col text-center gap-2">
                            <div className="md:font-medium font-medium text-sm md:text-md text-red-700">Associate Degree
                                in
                                Nursing
                            </div>
                            <div className="flex justify-center">
                            <Image src="/MMIHS.png" alt="Certificate" width={100}
                                   height={100}/>
                            </div>
                            Manmohan Memorial Institute of Health Sciences Kathmandu, Nepal
                        </div>
                    </div>
                </DetailSection>
                <DetailSection id="contact-me" className="flex flex-col text-center bg-amber-50 rounded-b-md">
                    <div>Contact Me</div>
                    <div className="text-md font-normal">You can connect with me through</div>
                    <div className="font-normal flex gap-2 justify-center">
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
