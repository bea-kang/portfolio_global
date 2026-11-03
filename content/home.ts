import type { Locale } from "@/lib/i18n";

export type HomeContent = {
  eyebrow: string;
  name: string;
  /** One paragraph per entry. */
  intro: string[];
  /** Location + relocation status, shown quietly under the contact links. */
  availability: string;
  competencies: { title: string; body: string }[];
  experienceLabel: string;
  educationLabel: string;
  abroadLabel: string;
  experience: { org: string; role: string; period: string }[];
  education: { org: string; role: string; period: string }[];
  /** Shown under education. `note` is a short line of context, e.g. what a gap year was for. */
  abroad: { org: string; role: string; period: string; note?: string }[];
  projectsLabel: string;
  sideProjectsLabel: string;
  /** Gallery under the main projects; each card links to a case on /projects/side. */
  sideProjects: HomeContent["projects"];
  projects: {
    href: string;
    eyebrow: string;
    title: string;
    period: string;
    blurb: string;
    cta: string;
    /** Thumbnail on the side project cards. `dim` tones down a photo
     * that stands out too much next to the others. */
    image?: { src: string; alt: string; dim?: boolean };
  }[];
};

export const home: Record<Locale, HomeContent> = {
  en: {
    eyebrow: "Product Manager / Product Owner",
    name: "Yebeen (Bea) Kang",
    intro:
      [
        "Five years as a PM across a 7M MAU commerce platform and a B2B2C research platform. I use AI to actively push out the boundaries of the PM role, and next I want to widen the problems I can solve beyond the product, into monetization and marketing.",
      ],
    availability: "Based in Vancouver, Canada · Open to relocation",
    competencies: [
      {
        title: "I understand the product, the user, and the business",
        body: "A platform creates business opportunity by defining and solving users' problems. When that understanding is thin, it adds product complexity and operational load. I go to users directly, close the gaps in understanding, and define the problem precisely. From there I set the product's direction, fast.",
      },
      {
        title: "I look for my own lessons learned",
        body: "A PM has to raise the quality of both the product and the collaboration around it, which means retrospecting on experience and keeping the improvements coming. I wrote up what I learned and what fell short after every project, and built a team habit of retrospecting together.",
      },
    ],
    experienceLabel: "Experience",
    educationLabel: "Education",
    abroadLabel: "Time Abroad",
    experience: [
      {
        org: "kakaostyle",
        role: "Product Owner · Global Beauty TF",
        period: "Dec 2025–Mar 2026",
      },
      {
        org: "kakaostyle",
        role: "Product Owner · Commerce Platform Planning",
        period: "Jul 2022–Nov 2025",
      },
      {
        org: "methinks",
        role: "Associate PM · PM",
        period: "Feb 2021–Feb 2022",
      },
      {
        org: "methinks",
        role: "Intern Researcher · UX Research",
        period: "Nov 2020–Feb 2021",
      },
    ],
    education: [
      {
        org: "Seoul Women's University",
        role: "B.A. Business Administration",
        period: "Mar 2016–Feb 2021",
      },
      {
        org: "Tsinghua University",
        role: "Exchange program",
        period: "Jul 2019–Jan 2020",
      },
    ],
    abroad: [
      {
        org: "Philippines, Canada",
        role: "Language study and work abroad",
        period: "Mar 2026–Present",
        note: "After leaving, I spent four months in language school in the Philippines and Canada, and I'm now living in Canada and working in retail at COS. Alongside that, I network with local PMs, work on side projects, and tutor.",
      },
    ],
    projectsLabel: "Projects",
    sideProjectsLabel: "Side Projects",
    sideProjects: [
      {
        href: "/projects/side#case-01",
        image: { src: "/images/side/thumb-lash.jpg", alt: "Live try-on demo: a salon's branded try-on page" },
        eyebrow: "Personal · B2B2C",
        title: "Live AI Try-on for Beauty Salons",
        period: "Oct 2026–Present",
        blurb:
          "A service for trying a salon's lash designs live before booking. I'm building the whole thing: planning, development, user validation, and content.",
        cta: "View project",
      },
      {
        href: "/projects/side#case-02",
        image: { src: "/images/side/thumb-stocking.jpg", alt: "Gift packaging shaped like a letter envelope", dim: true },
        eyebrow: "Personal · Commerce",
        title: "Repackaging Crowdfunding",
        period: "2019–2020",
        blurb:
          "Short on capital, I negotiated the manufacturer's minimum order down by half, then ran sourcing, sales, shipping, and CS myself.",
        cta: "View project",
      },
      {
        href: "/projects/side#case-03",
        image: { src: "/images/side/thumb-bike.jpg", alt: "Usage guide placed at a public bike rental station", dim: true },
        eyebrow: "Personal · Research",
        title: "Public Bike App Usability",
        period: "2019–2020",
        blurb:
          "Surveyed 100 people in their 50s and 60s to find what kept them off Seoul's public bikes, then got city approval to place a usage guide at rental stations.",
        cta: "View project",
      },
    ],
    projects: [
      {
        href: "/projects/piyonna",
        eyebrow: "kakaostyle · Global Beauty TF",
        title: "Piyonna",
        period: "Product Owner",
        blurb:
          "Led the launch of a K-beauty platform in France, applying AI throughout: local research, competitor data scraping, building the ops site, and policy design.",
        cta: "View case study",
      },
      {
        href: "/projects/zigzag",
        eyebrow: "kakaostyle",
        title: "Zigzag",
        period: "Product Owner",
        blurb:
          "Led projects across seeding, reviews, coupons, and promotions on a commerce app with 7M MAU.",
        cta: "View case study",
      },
      {
        href: "/projects/methinks-pm",
        eyebrow: "methinks",
        title: "B2B2C Research Platform",
        period: "Associate PM · PM",
        blurb:
          "Feature design and business-client communication for a research SaaS web and app platform.",
        cta: "View case study",
      },
      {
        href: "/projects/methinks-research",
        eyebrow: "methinks",
        title: "UX Research",
        period: "Intern Researcher",
        blurb:
          "Ran enterprise UX research projects, owning product usability tests, interview moderation, and reporting.",
        cta: "View case study",
      },
    ],
  },
  ko: {
    eyebrow: "Product Manager / Product Owner",
    name: "강예빈 (Bea Kang)",
    intro:
      [
        "5년차 PM으로, 700만 MAU 커머스 및 B2B2C 리서치 플랫폼 업무 경험이 있습니다.",
        "AI를 통해 PM의 업무 경계를 적극적으로 확장하며 일하고 있습니다. 앞으로는 제품을 넘어 수익화·마케팅까지 해결할 수 있는 문제의 범위를 넓히고 싶습니다.",
      ],
    availability: "캐나다(밴쿠버) 거주 · 해외 이주 가능",
    competencies: [
      {
        title: "제품과 사용자, 비즈니스를 이해합니다",
        body: "플랫폼은 사용자의 문제를 정의하고 해결해서 비즈니스 기회를 만듭니다. 이해도가 낮을 경우 제품 복잡도와 운영 부담을 늘립니다. 저는 사용자를 직접 찾아 이해도를 맞추고 문제를 명확하게 정의합니다. 높은 이해를 기반으로 빠르게 제품 방향을 정합니다.",
      },
      {
        title: "스스로 레슨런을 찾습니다",
        body: "PM은 제품, 협업의 질을 높여야 합니다. 경험을 회고하며 개선점을 찾아 나가야 합니다. 프로젝트마다 배운점, 아쉬운 점을 스스로 정리했고, 팀원과 회고하는 업무 문화를 만들었습니다.",
      },
    ],
    experienceLabel: "경력",
    educationLabel: "학력",
    abroadLabel: "해외 경험",
    experience: [
      {
        org: "kakaostyle (카카오스타일)",
        role: "Product Owner · 글로벌 뷰티 TF",
        period: "2025.12–2026.03",
      },
      {
        org: "kakaostyle (카카오스타일)",
        role: "Product Owner · 커머스플랫폼 기획",
        period: "2022.07–2025.11",
      },
      {
        org: "methinks",
        role: "Associate PM · PM",
        period: "2021.02–2022.02",
      },
      {
        org: "methinks",
        role: "Intern Researcher · UX Research",
        period: "2020.11–2021.02",
      },
    ],
    education: [
      {
        org: "서울여자대학교",
        role: "경영학과 학사",
        period: "2016.03–2021.02",
      },
      {
        org: "Tsinghua University",
        role: "교환학생",
        period: "2019.07–2020.01",
      },
    ],
    abroad: [
      {
        org: "필리핀, 캐나다",
        role: "어학 및 현지 근무",
        period: "2026.03–현재",
        note: "퇴사 후 필리핀 및 캐나다에서 4개월간 어학연수 후 캐나다 내 체류하며 리테일(COS)에서 근무하고 있습니다. 현지 PM 네트워킹 및 사이드 프로젝트, 튜터 활동을 병행하고 있습니다.",
      },
    ],
    projectsLabel: "프로젝트",
    sideProjectsLabel: "사이드 프로젝트",
    sideProjects: [
      {
        href: "/projects/side#case-01",
        image: { src: "/images/side/thumb-lash.jpg", alt: "라이브 트라이온 데모: 샵 전용 트라이온 페이지" },
        eyebrow: "개인 프로젝트 · B2B2C",
        title: "뷰티샵 전용 Live AI 서비스",
        period: "2026.10–진행 중",
        blurb:
          "뷰티샵의 속눈썹 디자인을 예약 전 실시간으로 체험해보는 서비스로, 기획, 개발, 사용자 검증 및 콘텐츠 생성까지 전 과정 빌딩을 담당하고 있습니다.",
        cta: "자세히 보기",
      },
      {
        href: "/projects/side#case-02",
        image: { src: "/images/side/thumb-stocking.jpg", alt: "편지 봉투 모양의 선물 패키지", dim: true },
        eyebrow: "개인 프로젝트 · 커머스",
        title: "스타킹 리패키징 펀딩",
        period: "2019–2020",
        blurb:
          "자본금이 부족한 상황에서 생산 업체와 협상해 발주량을 절반으로 줄이고, 소싱부터 판매·발송·CS까지 직접 운영했습니다.",
        cta: "자세히 보기",
      },
      {
        href: "/projects/side#case-03",
        image: { src: "/images/side/thumb-bike.jpg", alt: "공공자전거 대여소에 비치한 이용 안내서", dim: true },
        eyebrow: "개인 프로젝트 · 리서치",
        title: "공공자전거 앱 사용성 개선",
        period: "2019–2020",
        blurb:
          "50~60대 100명 설문으로 공공자전거 이용을 막는 원인을 찾고, 서울시 허가를 받아 대여소에 이용 안내서를 비치했습니다.",
        cta: "자세히 보기",
      },
    ],
    projects: [
      {
        href: "/projects/piyonna",
        eyebrow: "kakaostyle · 글로벌 뷰티 TF",
        title: "Piyonna (피어나)",
        period: "Product Owner",
        blurb:
          "프랑스 K뷰티 플랫폼 런칭을 담당하며, AI를 적극 적용하여 현지 리서치, 경쟁사 데이터 스크래핑, 운영 사이트 구축, 정책 설계를 담당했습니다.",
        cta: "케이스 스터디 보기",
      },
      {
        href: "/projects/zigzag",
        eyebrow: "kakaostyle",
        title: "Zigzag (지그재그)",
        period: "Product Owner",
        blurb:
          "700만 MAU 커머스 앱에서 체험단, 리뷰, 쿠폰, 프로모션 등 프로젝트를 리딩했습니다.",
        cta: "케이스 스터디 보기",
      },
      {
        href: "/projects/methinks-pm",
        eyebrow: "methinks",
        title: "B2B2C 리서치 플랫폼",
        period: "Associate PM · PM",
        blurb:
          "리서치 SaaS 웹·앱 플랫폼의 기능 설계와 비즈니스 클라이언트 커뮤니케이션을 담당했습니다.",
        cta: "케이스 스터디 보기",
      },
      {
        href: "/projects/methinks-research",
        eyebrow: "methinks",
        title: "UX 리서치",
        period: "Intern Researcher",
        blurb:
          "기업 UX 리서치 프로젝트를 운영하며 제품 UT, 인터뷰 모더레이팅, 리포팅을 담당했습니다.",
        cta: "케이스 스터디 보기",
      },
    ],
  },
};
