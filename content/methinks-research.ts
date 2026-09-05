import type { Locale } from "@/lib/i18n";

export type MethinksResearchContent = {
  eyebrow: string;
  title: string;
  meta: string;
  intro?: string;
  didTitle: string;
  did: string[];
  shots: { alt: string; caption: string }[];
  lessons: string[];
};

export const methinksResearch: Record<Locale, MethinksResearchContent> = {
  en: {
    eyebrow: "methinks",
    title: "UX Research (design, interviews, analysis, reporting)",
    meta: "Intern Researcher · UX Research · Nov 2020–Feb 2021",
    didTitle: "What I did",
    did: [
      "Supported desk research and study design for new businesses and services when enterprise clients commissioned research.",
      "Supported quantitative analysis: cleaned outliers and missing data from survey results in Excel, and supported cross-tabulation.",
      "Ran UX research for AI tax, overseas remittance, and vendor-management services, supporting usability tests, 1:1 interview moderation, and reporting to derive target customer segments and service improvements.",
    ],
    shots: [
      {
        alt: "UX report for the Moin overseas remittance app",
        caption: "UX report: Moin, overseas remittance app",
      },
      {
        alt: "Usability test report for the SSEM AI tax app",
        caption: "Usability test report: SSEM, AI tax app",
      },
    ],
    lessons: [
      "**Share the schedule transparently.** Research involves interviewees, moderators, interpreters, and observers (client stakeholders) all at once, so meticulous timeline management is essential. I built a reminder loop by connecting Google Calendar to internal email so a missed schedule never happened twice.",
      "**Know your available capacity, and communicate it transparently.** An ETA set without accounting for the scale of the research put the whole team on late nights for three weeks. Now I check feasibility before taking on a research engagement, and raise it with the team in advance.",
    ],
  },
  ko: {
    eyebrow: "methinks",
    title: "UX 리서치 (설계, 인터뷰, 분석, 리포팅)",
    meta: "Intern Researcher · UX Research · 2020.11–2021.02",
    didTitle: "담당 업무",
    did: [
      "기업 고객 리서치 의뢰시 신규 사업/서비스를 데스크 리서치 및 조사 설계를 지원했습니다.",
      "정량 조사 결과값 분석을 지원했습니다: 엑셀로 설문 조사 데이터의 이상치·결측치를 정리하고, 교차분석 업무를 지원했습니다.",
      "AI 세무, 해외송금, 업체 관리 서비스의 UX 리서치를 운영하며 UT, 1:1 인터뷰 모더레이팅, 리포트를 지원하여 타겟 고객 세그먼트 및 서비스 개선 사항을 도출했습니다.",
    ],
    shots: [
      {
        alt: "해외송금 서비스 Moin의 UX 리포트",
        caption: "UX 리포트: Moin, 해외송금 서비스",
      },
      {
        alt: "AI 세무 앱 SSEM의 UT 리포트",
        caption: "UT 리포트: SSEM, AI 세무 앱",
      },
    ],
    lessons: [
      "**스케쥴은 투명하게 공유한다.** 리서치는 인터뷰이, 모더레이터, 통역가, 옵져버(클라이언트 관계자)가 함께 참여하므로 꼼꼼한 타임라인 관리가 필수입니다. 구글 캘린더 - 사내 메일 연동을 통해 리마인드 루프를 만들어 일정 누락이 재현되지 않도록 했습니다.",
      "**가용 리소스 파악과 투명한 커뮤니케이션.** 리서치 스케일을 고려하지 않은 ETA 산정으로 인해 3주간 전체 팀원이 야간 작업을 했습니다. 조사 프로젝트 수주 전, 이행 가능 여부를 먼저 점검하고 팀과 미리 논의합니다.",
    ],
  },
};
