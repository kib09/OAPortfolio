import { profile } from '../data/profile';

export function Contact() {
  const hasContact = Boolean(profile.email || profile.phone);

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <div className="contact__box">
          <h2 className="section-title">연락처</h2>
          <p className="contact__desc">
            OA 유지보수 포지션에 관심이 있으시면 아래로 연락 주세요.
          </p>

          {hasContact ? (
            <div className="contact__links">
              {profile.email && (
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              )}
              {profile.phone && (
                <a href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a>
              )}
            </div>
          ) : (
            <p className="contact__placeholder">
              <code>src/data/profile.ts</code> 파일에서{' '}
              <strong>email</strong>, <strong>phone</strong>을 입력한 뒤 빌드하세요.
            </p>
          )}

          <p className="contact__note">
            {profile.name} · {profile.role} · 포트폴리오 {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
