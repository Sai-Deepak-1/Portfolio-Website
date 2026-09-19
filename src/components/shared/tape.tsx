'use client'

import { Zap } from "lucide-react"
import Marquee from "@/components/ui/marquee"
import { marqueeItems } from "@/data"

export const TapeSection = () => {
  return (
    <section
      data-testid="moving-techs"
      className="relative h-20 w-full max-w-[100vw] overflow-hidden border-y border-border"
    >
      <Marquee className="h-full" pauseOnHover>
        {marqueeItems.map((tech, index) => (
          <div key={index} className="flex items-center gap-6 px-4">
            <Zap className="h-4 w-4 flex-none fill-primary text-primary" />
            <span className="flex-none text-base font-semibold text-primary">{tech}</span>
          </div>
        ))}
      </Marquee>

      {/* Gradient overlay */}
      <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-background to-transparent" />
    </section>
  )
}

export default TapeSection
