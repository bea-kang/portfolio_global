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
  experience: { org: string; role: string; period: string }[];
  education: { org: string; role: string; period: string }[];
  projectsLabel: string;
  projects: {
    href: string;
    eyebrow: string;
    title: string;
    period: string;
    blurb: string;
    cta: string;
  }[];
};

export const home: Record<Locale, HomeContent> = {
  en: {
    eyebrow: "Product Manager / Product Owner",
    name: "Yebeen (Bea) Kang",
    intro:
      [
        "Five years as a PM across a 7M MAU commerce platform, a new platform launch in France, and a B2B2C SaaS product. Lately I've been using AI to actively push out the boundary of what a single PM can cover. I want to work on products that stay connected to reality, and to widen the range of problems I can solve.",
      ],
    availability: "Based in Seoul, South Korea · Open to relocation",
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
    projectsLabel: "Projects",
    projects: [
      {
        href: "/projects/piyonna",
        eyebrow: "kakaostyle · Global Beauty TF",
        title: "Piyonna",
        period: "Product Owner · Dec 2025–Mar 2026",
        blurb:
          "Led the launch of a K-beauty platform in France, applying AI throughout: local research, competitor data scraping, building the ops site, and policy design.",
        cta: "View case study",
      },
      {
        href: "/projects/zigzag",
        eyebrow: "kakaostyle",
        title: "Zigzag",
        period: "Commerce Platform Planning / Product Owner · 2022–2025",
        blurb:
          "Led projects across seeding, reviews, coupons, and promotions on a commerce app with 7M MAU.",
        cta: "View case study",
      },
      {
        href: "/projects/methinks-pm",
        eyebrow: "methinks",
        title: "B2B2C Research Platform",
        period: "Product Manager · 2021–2022",
        blurb:
          "Feature design and business-client communication for a research SaaS web and app platform.",
        cta: "View case study",
      },
      {
        href: "/projects/methinks-research",
        eyebrow: "methinks",
        title: "UX Research",
        period: "Intern Researcher · 2020–2021",
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
        "5년차 PM으로, 700만 MAU 커머스 플랫폼 및 프랑스 신규 플랫폼 런칭, B2B2C SaaS 플랫폼 업무 경험이 있습니다.",
        "최근 AI를 통해 PM 1인이 커버할 수 있는 업무 경계를 적극적으로 확장하며 일하고 있습니다.",
        "현실과 닿아있는 프로덕트를 다루면서, 해결할 수 있는 문제를 확장하고 싶습니다.",
      ],
    availability: "서울 거주 · 해외 이주 가능",
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
    projectsLabel: "프로젝트",
    projects: [
      {
        href: "/projects/piyonna",
        eyebrow: "kakaostyle · 글로벌 뷰티 TF",
        title: "Piyonna (피어나)",
        period: "Product Owner · 2025.12–2026.03",
        blurb:
          "프랑스 K뷰티 플랫폼 런칭을 담당하며, AI를 적극 적용하여 현지 리서치, 경쟁사 데이터 스크래핑, 운영 사이트 구축, 정책 설계를 담당했습니다.",
        cta: "케이스 스터디 보기",
      },
      {
        href: "/projects/zigzag",
        eyebrow: "kakaostyle",
        title: "Zigzag (지그재그)",
        period: "커머스플랫폼기획 / Product Owner · 2022–2025",
        blurb:
          "700만 MAU 커머스 앱에서 체험단, 리뷰, 쿠폰, 프로모션 등 프로젝트를 리딩했습니다.",
        cta: "케이스 스터디 보기",
      },
      {
        href: "/projects/methinks-pm",
        eyebrow: "methinks",
        title: "B2B2C 리서치 플랫폼",
        period: "PM · 2021–2022",
        blurb:
          "리서치 SaaS 웹·앱 플랫폼의 기능 설계와 비즈니스 클라이언트 커뮤니케이션을 담당했습니다.",
        cta: "케이스 스터디 보기",
      },
      {
        href: "/projects/methinks-research",
        eyebrow: "methinks",
        title: "UX 리서치",
        period: "Intern Researcher · 2020–2021",
        blurb:
          "기업 UX 리서치 프로젝트를 운영하며 제품 UT, 인터뷰 모더레이팅, 리포팅을 담당했습니다.",
        cta: "케이스 스터디 보기",
      },
    ],
  },
};
