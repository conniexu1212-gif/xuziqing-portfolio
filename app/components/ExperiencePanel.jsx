import { experiences } from '../data/profile';

export default function ExperiencePanel() {
  return (
    <div className="experience-list">
      {experiences.map((item) => (
        <article className="experience-row" key={`${item.company}-${item.period}`}>
          <p className="experience-period">{item.period}</p>
          <div>
            <h3>{item.company}</h3>
            <p className="experience-role">{item.role}</p>
          </div>
          <div>
            <p>{item.summary}</p>
            <ul className="tag-list" aria-label={`${item.company}相关项目`}>
              {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
