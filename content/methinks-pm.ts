import type { Locale } from "@/lib/i18n";

export type MethinksPmContent = {
  eyebrow: string;
  title: string;
  meta: string;
  intro: string;
  ownedTitle: string;
  owned: string[];
  shot: { alt: string; caption: string };
  lessons: string[];
};

export const methinksPm: Record<Locale, MethinksPmContent> = {
  en: {
    eyebrow: "methinks",
    title: "B2B2C Research Platform",
    meta: "Associate PM · PM · Feb 2021–Feb 2022",
    intro:
      "Owned feature design and business-client communication for a research SaaS web and app platform.",
    ownedTitle: "What I owned",
    owned: [
      "Defined respondent-quality criteria and the filtering logic: designed a dashboard that measures interviewee reliability by combining a user's own data.",
      "Ran QA, and organized use cases and reviewed them with the team whenever a new feature shipped (U.S./KR).",
      "Collected requirements from internal and external clients and balanced priorities to raise productivity.",
    ],
    shot: {
      alt: "methinks recruitment and fraud-detection admin dashboard, and English spec documentation",
      caption:
        "Recruitment / fraud-detection admin, and English spec documentation",
    },
    lessons: [
      "**On-time delivery is the top priority.** As a B2B2C SaaS, missing a committed date doesn't just affect one client relationship: it affects renewal and the platform's own revenue potential. I learned firsthand that shipping on time is a revenue lever, not just a schedule metric.",
      "**I understand the value of policy documentation.** When enterprise clients used the platform, there was no document covering what each permission tier (super admin / admin / one-time) was allowed to do, or a detailed feature guide, so every question got answered verbally or by testing it live. Documentation was the first thing I prioritized after joining, and it cut out unnecessary operating time.",
    ],
  },
  ko: {
    eyebrow: "methinks",
    title: "B2B2C 리서치 플랫폼",
    meta: "Associate PM · PM · 2021.02–2022.02",
    intro:
      "리서치 SaaS 웹, 앱 플랫폼으로 기능 설계 및 비즈니스 클라이언트 커뮤니케이션을 담당했습니다.",
    ownedTitle: "담당 업무",
    owned: [
      "유저 불량률 정의 및 필터 로직 기획: 사용자의 데이터를 조합해 인터뷰이 신뢰도를 측정하는 대시보드 기능을 기획했습니다.",
      "QA 진행 및 신규 기능 도입 시 유즈 케이스 정리 및 팀에 리뷰했습니다(U.S./KR).",
      "외·내부 고객 요구 사항을 수집, 우선순위를 조율해 생산성을 높였습니다.",
    ],
    shot: {
      alt: "methinks 리크루팅/불량률 판단 어드민 대시보드와 영문 기획서",
      caption: "리크루팅/불량률 판단 어드민, 그리고 영문 기획서",
    },
    lessons: [
      "**ETA, 적시성이 최우선입니다.** B2B2C SaaS 특성상 목표 시기를 엄수해 릴리즈하는 것은 클라이언트의 계약 관리뿐 아니라, 계약 유지와 서비스 활용이라는 잠재 수익에도 영향을 미칩니다. 서비스의 적시성이 곧 수익성 제고로 이어짐을 몸으로 이해했습니다.",
      "**정책 문서의 중요성을 이해합니다.** 기업 클라이언트의 플랫폼 사용시, 사용자 권한별(super admin/admin/one-time) 허용 기능, 상세 기능 가이드 등 문서가 없어 문의시 구두로 전달하거나 직접 테스트해 파악해야 했습니다. 합류 후 문서화 작업을 최우선으로 진행했고, 불필요한 운영 시간을 줄였습니다.",
    ],
  },
};
