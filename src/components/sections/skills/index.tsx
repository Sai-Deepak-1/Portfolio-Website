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
        <section className="py-20 bg-background/50 overflow-hidden" id="skills">
            <div className="container mx-auto px-4 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center">My Arsenal</h2>
                <p className="text-muted-foreground text-center mt-2 max-w-xl mx-auto">
                    Technologies and tools I use to build scalable, high-performance applications.
                </p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, idx) => (
                        <div
                            key={idx}
                            className="flex w-32 flex-col items-center justify-center gap-3 rounded-xl border bg-card p-4 transition-all hover:bg-accent hover:border-border/80"
                        >
                            <div className="opacity-70 transition-opacity group-hover:opacity-100">{skill.icon}</div>
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
                    {skills.slice(Math.ceil(skills.length / 2)).map((skill, idx) => (
                        <div
                            key={idx}
                            className="flex w-32 flex-col items-center justify-center gap-3 rounded-xl border bg-card p-4 transition-all hover:bg-accent hover:border-border/80"
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