import { motivations, strengths, growthNote } from '../data/profile';

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">소개</h2>
        <p className="section-desc">OA 유지보수 직무에 대한 지원 동기와 강점입니다.</p>

        <div className="about__grid">
          {motivations.map((block) => (
            <article key={block.title} className="about__motivation">
              <h3>{block.title}</h3>
              {block.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </article>
          ))}

          <div className="about__strengths">
            <h3>핵심 강점</h3>
            <ul>
              {strengths.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}</strong>
                  <span>{s.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="about__growth">
          <h3>성장 포인트</h3>
          <p>
            <strong>장점:</strong> {growthNote.strength}
          </p>
          <p>
            <strong>보완 중:</strong> {growthNote.weakness}
          </p>
        </aside>
      </div>
    </section>
  );
}
