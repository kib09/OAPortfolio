/** 포트폴리오 콘텐츠 — OA 유지보수 공고용 */

export const profile = {
  name: '김인배',
  role: 'OA · IT 현장 유지보수',
  tagline:
    '사무기기 설치·네트워크 연동부터 소프트웨어 업데이트·현장 장애 대응까지, 현장 중심의 안정적인 OA 환경을 만듭니다.',
  birthYear: 1999,
  email: 'dslqoehf@gmail.com',
  phone: '010-6451-2662',
  /** public 폴더 — BASE_URL 포함 (GitHub Pages 서브경로 대응) */
  photo: `${import.meta.env.BASE_URL}profile.jpg`,
  photoAlt: '김인배 증명사진',
};

export const navItems = [
  { id: 'about', label: '소개' },
  { id: 'skills', label: '역량' },
  { id: 'experience', label: '경력' },
  { id: 'highlights', label: '핵심 성과' },
  { id: 'education', label: '교육' },
  { id: 'contact', label: '연락' },
] as const;

export const motivations = [
  {
    title: '지원 동기',
    paragraphs: [
      '다양한 현장에서 OA 장비와 소프트웨어를 직접 다루며, 사용자가 안정적으로 업무할 수 있는 환경을 만드는 일에 보람을 느껴 OA 유지보수 분야에 지원하게 되었습니다.',
      '관공서 사무기기 설치·네트워크 연동, 은행 지점 지폐계수기 소프트웨어 업데이트 등 실무를 수행하며 현장 변수에 맞춰 빠르게 대응하는 경험을 쌓았습니다. 단순 작업 수행을 넘어, 설치 전 동선 파악·이중 점검·반복 오류 패턴 정리로 유지보수 효율을 높이는 데 집중해 왔습니다.',
      'CRM QA와 프론트엔드 교육을 통해 사용자 관점의 문제 발견·이슈 정리·협업 경험도 갖추었으며, 이를 바탕으로 현장 대응과 사내 지원을 균형 있게 수행하는 구성원이 되고자 합니다.',
    ],
  },
];

export const strengths = [
  {
    title: '책임감 · 성실함',
    description:
      '맡은 현장 업무를 끝까지 완수하며, 군 복무 시 모범 용사 표창 등 책임감을 인정받은 경험이 있습니다.',
  },
  {
    title: '꼼꼼한 현장 처리',
    description:
      '설치 전 동선·환경 파악, 이중 점검, 마무리 정리를 통해 "처리가 꼼꼼하고 뒤처리가 깔끔하다"는 현장 피드백을 받았습니다.',
  },
  {
    title: '논리적 이슈 정리',
    description:
      'QA·부트캠프에서 재현 방법, 발생 환경, 예상 원인을 체계적으로 기록해 해결에 필요한 정보를 빠르게 전달했습니다.',
  },
  {
    title: '능동적 업무 개선',
    description:
      '반복 오류 패턴을 정리해 대응 시간을 단축하고, 보안 관제팀에서는 신입 교육 매뉴얼을 직접 작성해 팀 효율을 높였습니다.',
  },
];

export const skills = [
  {
    category: 'OA · 현장 유지보수',
    items: [
      '사무기기(복합기·프린터 등) 신규 설치',
      '네트워크 연동 및 연결 오류 점검',
      '소프트웨어·펌웨어 업데이트',
      '현장 장애·클레임 대응',
      '장비 상태 점검 및 이중 확인 프로세스',
    ],
  },
  {
    category: 'IT · 문제 해결',
    items: [
      'PC·OS 환경 이해 및 기본 트러블슈팅',
      '이슈 재현·로그·환경 정보 정리',
      '브라우저·앱 디버깅 경험',
      '사용자 시나리오 기반 테스트',
    ],
  },
  {
    category: '협업 · 커뮤니케이션',
    items: [
      '현장 담당자 요구사항 파악 및 조율',
      '회의록·이슈 트래킹',
      'Git/GitHub 기반 협업',
      '비전문가 대상 기술 설명·안내',
    ],
  },
];

export const experiences = [
  {
    company: '기산전자',
    role: '계약직 · 지폐계수기 SW 유지보수',
    period: '2026.02 – 2026.04',
    type: 'oa' as const,
    highlights: [
      '서울권 은행 약 90개 지점, 500대 이상 지폐계수기 소프트웨어 업데이트 수행',
      '업데이트 전 하드웨어 간섭·오류 가능성 사전 점검',
      '현장의 갑작스러운 오류·클레임 해결 및 반복 패턴 정리로 대응 시간 단축',
      '목표 수량을 예정 일정보다 빠르게 오차 없이 완료',
    ],
  },
  {
    company: '아이에듀피아',
    role: '아르바이트 · 관공서 OA 설치',
    period: '2025.11 – 2026.02',
    type: 'oa' as const,
    highlights: [
      '관공서 내 사무기기 신규 설치 및 네트워크 연동',
      '보안·환경이 제각각인 관공서 특성에 맞춘 사전 동선·환경 파악',
      '설치 후 연결 오류 방지를 위한 이중 점검 프로세스 준수',
      '현장 담당자 요구에 맞춘 꼼꼼한 설치·마무리로 긍정적 피드백',
    ],
  },
  {
    company: '㈜웰시스',
    role: '선임 사원 · 보안 관제',
    period: '2022.04 – 2024.02',
    type: 'other' as const,
    highlights: [
      '보안 관제 시스템 운영·관리 및 사고 대응·보고',
      '후배 사원 교육·멘토링, 신입 적응용 교육 매뉴얼 직접 작성',
      '책임감 있는 운영과 팀 내 커뮤니케이션 경험',
    ],
  },
  {
    company: '나무CNS',
    role: '아르바이트 · 피부과 CRM QA',
    period: '2024.05 – 2024.08',
    type: 'it' as const,
    highlights: [
      '웹 CRM QA — 사용자 관점의 오류 발견 및 개선 제안',
      '개발팀과 협업하며 원인 파악·이슈 해결 프로세스 경험',
      '사용자 경험(UX)에 미치는 작은 불편의 영향 이해',
    ],
  },
  {
    company: 'est-soft',
    role: '프리랜서 · IT 부트캠프 마케팅',
    period: '2025.09 – 2026.11',
    type: 'other' as const,
    highlights: [
      'IT 비전문가 대상 키워드 분석·콘텐츠 기획',
      '검색 최적화(SEO)를 통한 채널 유입 증대',
      '복잡한 정보를 쉽게 전달하는 커뮤니케이션 역량 강화',
    ],
  },
];

export const highlightStats = [
  { value: '500+', label: '지폐계수기 업데이트 대수' },
  { value: '90+', label: '은행 지점 현장 방문' },
  { value: '관공서', label: '사무기기 설치·네트워크 연동' },
  { value: '2년', label: '보안 관제·팀 운영 경험' },
];

export const education = [
  {
    name: 'est 웹 프론트엔드 개발자 과정',
    period: '2024.11 – 2025.04',
    org: '부트캠프',
    details: [
      'HTML5, CSS3, JavaScript, React 반응형 UI 구현',
      'Figma 기반 화면 설계·UX 흐름 분석',
      'Git/GitHub, 코드 리뷰, 이슈 트래킹·브라우저 디버깅',
      '협업 프로젝트 — 요구사항 조율·회의록·이슈 정리 담당',
    ],
  },
  {
    name: '부천대학교',
    period: '중퇴',
    org: '재활스포츠 전공',
    details: [],
  },
];

export const certifications = [
  { name: '1종 보통 운전면허', date: '2021.11', note: '현장·외근 업무 수행 가능' },
  { name: '부대 모범 용사상', date: '2020.06', note: '8사단 228부대' },
];

export const growthNote = {
  strength: '책임감과 성실함, 회사·현장 입장에서 능동적으로 행동하는 태도',
  weakness:
    '문제 발생 시 혼자 해결하려는 경향 — 최근에는 팀·담당자와 상황을 빠르게 공유하고 협업하는 습관을 기르는 중',
};
