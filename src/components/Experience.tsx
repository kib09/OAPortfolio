import { experiences } from '../data/profile';

const typeLabel = {
  oa: 'OA · 현장',
  it: 'IT · QA',
  other: '기타',
} as const;

/** 경력 타임라인 — OA 관련 경험 강조 */
export function Experience() {
  const oaFirst = [...experiences].sort((a, b) => {
    if (a.type === 'oa' && b.type !== 'oa') return -1;
    if (a.type !== 'oa' && b.type === 'oa') return 1;
    return 0;
  });

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">경력 · 활동</h2>
        <p className="section-desc">
          OA 설치·유지보수 현장 경험을 중심으로 정리했습니다.
        </p>
        <ol className="experience__timeline">
          {oaFirst.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="experience__item">
              <div className="experience__marker" data-type={exp.type} aria-hidden />
              <article
                className={`experience-card${exp.type === 'oa' ? ' experience-card--oa' : ''}`}
              >
                <div className="experience-card__meta">
                  <span className="experience-card__badge" data-type={exp.type}>
                    {typeLabel[exp.type]}
                  </span>
                  <time>{exp.period}</time>
                </div>
                <h3>{exp.company}</h3>
                <p className="experience-card__role">{exp.role}</p>
                <ul>
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
