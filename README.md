# 김인배 — OA 유지보수 포트폴리오

OA·IT 현장 유지보수 공고 첨부용 포트폴리오 사이트입니다.

**배포 URL:** https://kib09.github.io/OAPortfolio/

## 기술 스택

- React 19 + TypeScript
- Vite 6
- 단일 CSS (`src/styles/index.css`) + CSS 변수(디자인 토큰)

## 스타일 구조

- 모든 스타일: `src/styles/index.css`
- 공통 색·간격: 파일 상단 `:root` 변수 (예: `--color-primary`, `--color-text-muted`)
- 컴포넌트별 클래스: BEM 스타일 접두사 (`hero__name`, `experience-card` 등)
