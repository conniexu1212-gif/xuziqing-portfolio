import { skillGroups } from '../data/profile';

export default function SkillsPanel() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group) => (
        <article className="skill-group" key={group.title}>
          <p>{group.number}</p>
          <h3>{group.title}</h3>
          <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      ))}
    </div>
  );
}
