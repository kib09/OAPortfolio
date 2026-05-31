import { skills } from '../data/profile';

export function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section-title">직무 역량</h2>
        <p className="section-desc">
          OA 현장 유지보수와 IT 문제 해결, 협업 커뮤니케이션 역량을 정리했습니다.
        </p>
        <div className="skills__grid">
          {skills.map((group) => (
            <article key={group.category} className="skill-card">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
