import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {profile.name}. OA 유지보수 지원용 포트폴리오.
        </p>
      </div>
    </footer>
  );
}
