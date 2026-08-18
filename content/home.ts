import type { Locale } from "@/lib/i18n";

export type HomeContent = {
  eyebrow: string;
  name: string;
  /** One paragraph per entry. */
  intro: string[];
  /** Location + relocation status, shown quietly under the contact links. */
  availability: string;
  /** Hero link down to the project list. */
  jumpToProjects: string;
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
        "I'm drawn to products that stay connected to reality, and I want to widen the range of problems I can solve. Five years as a PM across a 7M MAU commerce platform, a new platform launch in France, and a B2B2C SaaS product. Lately I've been using AI to actively push out the boundary of what a single PM can cover.",
      ],
    availability: "Based in Seoul, South Korea · Open to relocation",
    jumpToProjects: "See the projects",
    competencies: [
      {
        title: "I understand the product, the user, and the business",
        body: "A platform creates business opportunity by defining and solving users' problems. When that understanding is thin, the product gets more complex and operations carry more weight. I go to users directly and talk to them. I close the gaps in understanding and define the problem precisely. From there I set the product's direction, fast.",
      },
      {
        title: "I look for my own lessons learned",
        body: "A PM's job is to raise the quality of the product and of how the team works together. That means retrospecting on experience and finding what to improve. I've written up what I learned and what fell short after every project, and built a team habit of a biannual session where the team hears out what's working and what isn't, directly.",
      },
    ],
    experienceLabel: "Experience",
    educationLabel: "Education",
    experience: [
      {
        org: "kakaostyle",
        role: "Commerce Platform Planning / Product Owner",
        period: "Jul 2022–Mar 2026",
      },
      { org: "methinks", role: "Product Manager", period: "Jan 2021–Jan 2022" },
      {
        org: "methinks",
        role: "UX Research Intern",
        period: "Oct 2020–Jan 2021",
      },
    ],
    education: [
      {
        org: "Seoul Women's University",
        role: "B.A. Business Administration",
        period: "2016–2021",
      },
      {
        org: "Tsinghua University",
        role: "Exchange program",
        period: "Aug 2019–Feb 2020",
      },
    ],
    projectsLabel: "Projects",
    projects: [
      {
        href: "/projects/piyonna",
        eyebrow: "kakaostyle · Global Beauty TF",
        title: "Piyonna",
        period: "Product Manager · Dec 2025–Mar 2026",
        blurb:
          "Led the launch of a K-beauty platform in France, applying AI throughout: local research, competitor data scraping, building the ops site, and policy design.",
        cta: "View case study",
      },
      {
        href: "/projects/zigzag",
        eyebrow: "kakaostyle",
        title: "Zigzag",
        period: "Commerce Platform Planning / PO · 2022–2026",
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
        period: "Research Intern · 2020–2021",
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
        "저는 현실과 닿아있는 프로덕트에 관심이 많고, 해결할 수 있는 문제를 확장하고 싶습니다.",
        "5년차 PM으로, 700만 MAU 커머스 플랫폼 및 프랑스 신규 플랫폼 런칭, B2B2C SaaS 플랫폼 업무 경험이 있습니다.",
        "최근 AI를 통해 PM 1인이 커버할 수 있는 업무 경계를 적극적으로 확장하며 일하고 있습니다.",
      ],
    availability: "서울 거주 · 해외 이주 가능",
    jumpToProjects: "프로젝트 보기",
    competencies: [
      {
        title: "제품과 사용자, 비즈니스를 이해합니다",
        body: "플랫폼은 사용자의 문제를 정의하고 해결해서 비즈니스 기회를 만듭니다. 이해도가 낮을 경우 제품 복잡도를 높이고, 운영 부담을 늘립니다. 저는 사용자를 직접 찾아 이야기 합니다. 이해도를 맞추고 문제를 명확하게 정의합니다. 높은 이해를 기반으로 빠르게 제품 방향을 정합니다.",
      },
      {
        title: "스스로 레슨런을 찾습니다",
        body: "PO의 숙제는 제품과 협업 과정의 질을 높이는 것입니다. 경험을 회고하고 개선점을 찾아 만들 수 있습니다. 프로젝트마다 배운점과 아쉬운 점을 스스로 정리했습니다. 반기별로 세션을 열어 팀원과 좋은 점, 아쉬운 점을 청취하는 업무 문화를 만들었습니다.",
      },
    ],
    experienceLabel: "경력",
    educationLabel: "학력",
    experience: [
      {
        org: "kakaostyle (카카오스타일)",
        role: "커머스플랫폼기획 / PO",
        period: "2022.07–2026.03",
      },
      { org: "methinks", role: "PM", period: "2021.01–2022.01" },
      {
        org: "methinks",
        role: "UX Research Intern",
        period: "2020.10–2021.01",
      },
    ],
    education: [
      {
        org: "서울여자대학교",
        role: "경영학과 학사",
        period: "2016–2021",
      },
      {
        org: "Tsinghua University",
        role: "교환학생",
        period: "2019.08–2020.02",
      },
    ],
    projectsLabel: "프로젝트",
    projects: [
      {
        href: "/projects/piyonna",
        eyebrow: "kakaostyle · 글로벌 뷰티 TF",
        title: "Piyonna (피어나)",
        period: "PM · 2025.12–2026.03",
        blurb:
          "프랑스 K뷰티 플랫폼 런칭을 담당하며, AI를 적극 적용하여 현지 리서치, 경쟁사 데이터 스크래핑, 운영 사이트 구축, 정책 설계를 담당했습니다.",
        cta: "케이스 스터디 보기",
      },
      {
        href: "/projects/zigzag",
        eyebrow: "kakaostyle",
        title: "Zigzag (지그재그)",
        period: "커머스플랫폼기획 / PO · 2022–2026",
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
        period: "Research Intern · 2020–2021",
        blurb:
          "기업 UX 리서치 프로젝트를 운영하며 제품 UT, 인터뷰 모더레이팅, 리포팅을 담당했습니다.",
        cta: "케이스 스터디 보기",
      },
    ],
  },
};
