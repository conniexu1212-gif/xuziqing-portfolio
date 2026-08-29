import { projects } from '../data/projects';

const focusOrder = ['split-fiction', 'playstation-frontline', 'feirenzai', 'snake-dog', 'summer-tea'];
const otherOrder = ['vanishing-starlight', 'pragmata', 'seasonal-drinking'];

function orderedProjects(slugs) {
  return slugs.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean);
}

function ProjectRows({ items, startAt = 1 }) {
  return items.map((project, index) => (
    <a className="project-index-row" href={`/projects/${project.slug}`} key={project.slug}>
      <span className="project-index-number">{String(startAt + index).padStart(2, '0')}</span>
      <div>
        <p>{project.category}</p>
        <h3>{project.title}</h3>
      </div>
      <p>{project.overview}</p>
      <span className="project-index-arrow" aria-hidden="true">↗</span>
    </a>
  ));
}

export default function ProjectsPanel() {
  const focusProjects = orderedProjects(focusOrder);
  const otherProjects = orderedProjects(otherOrder);

  return (
    <div className="projects-panel">
      <p className="panel-intro">以传播目标、个人角色与成果为线索浏览完整项目案例。</p>
      <section aria-labelledby="focus-projects-title">
        <h3 className="index-group-title" id="focus-projects-title">FOCUS PROJECTS</h3>
        <div className="project-index-list"><ProjectRows items={focusProjects} /></div>
      </section>
      <section aria-labelledby="other-projects-title">
        <h3 className="index-group-title" id="other-projects-title">OTHER WORK</h3>
        <div className="project-index-list"><ProjectRows items={otherProjects} startAt={6} /></div>
      </section>
    </div>
  );
}
