import Link from "next/link";
import React from 'react';
import { ChevronRight } from "lucide-react";
import AnimatedWords from "@/components/shared/animations/text-animations";
import { monaSans } from "@/app/fonts/fonts";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGradient } from "@/components/shared/animated-gradient";
import { FadeIn, FadeInStagger } from "@/components/shared/animations/FadeIn";

export default function Hero() {
    return (
        <section
            className="flex h-[80vh] w-full items-center justify-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[60vh]"
        >
            <AnimatedGradient />
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                <FadeInStagger className={`text-center flex flex-col items-center space-y-10 ${monaSans.className}`}>
                    <FadeIn>
                        <AnimatedWords
                            title="SAI DEEPAK"
                            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                        />
                    </FadeIn>
                    <FadeIn>
                        <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-xl mt-4">
                            Software Engineer crafting modern web experiences and scalable ML/DevOps systems.
                        </p>
                    </FadeIn>
                    <FadeIn className="w-full sm:w-auto">
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">

                            <Link
                                className={cn(
                                    buttonVariants({ variant: "rainbow", size: "lg" }),
                                    "w-full sm:w-auto gap-2 whitespace-nowrap",
                                )}
                                href="/resume"
                            >
                                <p>Download Resume</p>
                            </Link>
                            <Link
                                className={cn(
                                    buttonVariants({
                                        variant: "outline",
                                        size: "lg",
                                    }),
                                    "group relative gap-2 w-full sm:w-auto",
                                )}
                                href="/contact"
                            >
                                <span>Contact Me</span>
                                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                            </Link>
                        </div>
                    </FadeIn>
                </FadeInStagger>
            </div>
        </section >
    );
}
