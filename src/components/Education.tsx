import { certifications, education } from '../data/profile';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">교육 · 자격</h2>
        <p className="section-desc">IT·웹 개발 교육과 현장 업무에 필요한 자격입니다.</p>

        <div className="education__grid">
          <div className="education__column">
            <h3>교육</h3>
            {education.map((edu) => (
              <article key={edu.name} className="education-card">
                <div className="education-card__head">
                  <h4>{edu.name}</h4>
                  <span>{edu.period}</span>
                </div>
                <p className="education-card__org">{edu.org}</p>
                {edu.details.length > 0 && (
                  <ul>
                    {edu.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <div className="education__column">
            <h3>자격 · 표창</h3>
            <ul className="education__certs">
              {certifications.map((cert) => (
                <li key={cert.name} className="education__cert">
                  <div>
                    <strong>{cert.name}</strong>
                    <span>{cert.note}</span>
                  </div>
                  <time>{cert.date}</time>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
