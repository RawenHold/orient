export const risks = [
  { id: "R01", title: "Слишком широкий MVP scope", severity: "Critical", mitigation: "Scope freeze после Phase 0; любые добавления через Change Request." },
  { id: "R02", title: "Путаница informational vs functional", severity: "High", mitigation: "Явные UI-статусы, CTA на support/AI, не на фиктивное бронирование." },
  { id: "R03", title: "Отсутствие supplier API", severity: "High", mitigation: "Integration Level и fallback для каждой услуги." },
  { id: "R05", title: "International payments", severity: "High", mitigation: "MVP: offline payments. Gateway только Phase 10 после legal/KYB." },
  { id: "R08", title: "Support overload", severity: "High", mitigation: "SOP, 2-3 support agents, AI routing и PMF dashboard." },
  { id: "R15", title: "AI hallucinations", severity: "High", mitigation: "RAG, disclaimers, no autonomous booking, human handoff." },
  { id: "R20", title: "Broken external links", severity: "Medium", mitigation: "Link checker и регулярный content review." },
];
