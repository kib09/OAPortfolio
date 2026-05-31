import { profile } from '../data/profile';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <figure className="hero__photo-wrap">
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            className="hero__photo"
            width={200}
            height={250}
            fetchPriority="high"
          />
        </figure>
        <div className="hero__content">
          <p className="hero__badge">Portfolio · OA Maintenance</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={() => scrollTo('experience')}>
              현장 경험 보기
            </button>
            <button type="button" className="btn btn--secondary" onClick={() => scrollTo('contact')}>
              연락처
            </button>
          </div>
        </div>
        <aside className="hero__summary-card" aria-label="요약 정보">
          <dl>
            <div>
              <dt>지원 분야</dt>
              <dd>OA 유지보수 · 현장 지원</dd>
            </div>
            <div>
              <dt>핵심 경험</dt>
              <dd>사무기기 설치 · SW 업데이트</dd>
            </div>
            <div>
              <dt>운전면허</dt>
              <dd>1종 보통 </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
