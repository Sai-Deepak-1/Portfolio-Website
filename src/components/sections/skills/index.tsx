"use client";

import React from "react";
import Marquee from "@/components/ui/marquee";
import {
    SiAmazonwebservices,
    SiCss3,
    SiDocker,
    SiFastapi,
    SiFlask,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiLinux,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "@icons-pack/react-simple-icons";

// List of skills with their respective icons
const skills = [
    { name: "Python", icon: <SiPython size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "React", icon: <SiReact size={40} /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "FastAPI", icon: <SiFastapi size={40} /> },
    { name: "Flask", icon: <SiFlask size={40} /> },
    { name: "Node.js", icon: <SiNodedotjs size={40} /> },
    { name: "AWS", icon: <SiAmazonwebservices size={40} /> },
    { name: "Docker", icon: <SiDocker size={40} /> },
    { name: "Linux", icon: <SiLinux size={40} /> },
    { name: "NGINX", icon: <SiNginx size={40} /> },
    { name: "Git", icon: <SiGit size={40} /> },
    { name: "HTML5", icon: <SiHtml5 size={40} /> },
    { name: "CSS3", icon: <SiCss3 size={40} /> },
];

export default function SkillsSection() {
    return (
        <section className="scroll-mt-24 overflow-hidden px-5 py-20 sm:px-10 lg:px-16 lg:py-28" id="skills">
            <div className="mx-auto mb-12 grid max-w-7xl gap-5 border-b border-border pb-6 md:grid-cols-[0.7fr_1.3fr]">
                <p className="eyebrow">02 / Toolkit</p>
                <div><h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">Technology, with intent.</h2><p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">Tools I use to build scalable, high-performance applications.</p></div>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover repeat={2} className="[--duration:40s]">
                    {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, idx) => (
                        <div
                            key={idx}
                            className="group flex w-36 flex-col items-center justify-center gap-3 border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
                        >
                            <div className="opacity-70 transition-opacity group-hover:opacity-100">{skill.icon}</div>
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </Marquee>

                <Marquee reverse pauseOnHover repeat={2} className="[--duration:40s] mt-4">
                    {skills.slice(Math.ceil(skills.length / 2)).map((skill, idx) => (
                        <div
                            key={idx}
                            className="group flex w-36 flex-col items-center justify-center gap-3 border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
                        >
                            <div className="opacity-70 transition-opacity group-hover:opacity-100">{skill.icon}</div>
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </Marquee>

                {/* Gradient fades on the edges for a smooth seamless look */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </section>
    );
}
