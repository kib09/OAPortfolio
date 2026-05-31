import { highlightStats } from '../data/profile';

/** OA 현장 경험 핵심 수치 */
export function Highlights() {
  return (
    <section id="highlights" className="section section--highlight">
      <div className="container">
        <h2 className="section-title">핵심 성과</h2>
        <p className="section-desc">
          현장 OA·유지보수 업무에서 달성한 주요 실적입니다.
        </p>
        <div className="highlights__grid">
          {highlightStats.map((stat) => (
            <div key={stat.label} className="highlight-stat">
              <span className="highlight-stat__value">{stat.value}</span>
              <span className="highlight-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
        <blockquote className="highlights__quote">
          <p>
            “업무 처리가 꼼꼼하고 설치 뒤처리가 깔끔하다” — 관공서 현장 담당자 피드백
          </p>
          <p>
            계약 기간 내 목표 수량을 예정 일정보다 빠르게, 오차 없이 완료 — 지폐계수기
            업데이트 프로젝트
          </p>
        </blockquote>
      </div>
    </section>
  );
}
