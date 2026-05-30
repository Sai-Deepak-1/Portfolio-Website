import React from 'react'
import ProjectCardItem from './card'
import { projects } from '@/data'
import { FadeInStagger, FadeIn } from '@/components/shared/animations/FadeIn'

const ProjectCard = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center" id="project-section">My Projects</h1>
                <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <FadeIn key={index} className="h-full">
                            <ProjectCardItem {...project} />
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </div>
        </>
    )
}

export default ProjectCard