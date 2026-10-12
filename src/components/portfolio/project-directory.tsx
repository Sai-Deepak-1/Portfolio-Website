"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { portfolioProjects, projectFilters } from "@/data/portfolio";

export function ProjectDirectory({ limit = 3, title = "Project directory" }: { limit?: number; title?: string }) {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [visible, setVisible] = useState(limit);
  const matchingProjects = useMemo(
    () => portfolioProjects.filter((project) => filter === "All" || project.category === filter),
    [filter],
  );
  const projects = matchingProjects.slice(0, visible);

  function selectFilter(nextFilter: (typeof projectFilters)[number]) {
    setFilter(nextFilter);
    setVisible(limit);
  }

  return (
    <section className="directory" aria-labelledby="directory-title">
      <div className="directory__top">
        <h2 className="directory__title" id="directory-title">{title}</h2>
        <div className="filter-tabs" aria-label="Filter projects">
          {projectFilters.map((item) => (
            <button aria-pressed={filter === item} key={item} onClick={() => selectFilter(item)} type="button">
              {item}
            </button>
          ))}
        </div>
      </div>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li className="project-row" key={project.slug}>
            <span className={`project-row__mark project-row__mark--${project.accent}`} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
            <div className="project-row__meta">
              <span>{project.category}</span><br />
              <span>{project.status}</span>
            </div>
            <Link className="project-row__link" href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
              <ArrowUpRight aria-hidden="true" size={19} strokeWidth={1.5} />
            </Link>
          </li>
        ))}
      </ul>
      {visible < matchingProjects.length && (
        <button className="show-more" onClick={() => setVisible((value) => value + limit)} type="button">
          Show more ({matchingProjects.length - visible})
        </button>
      )}
    </section>
  );
}
