export const risks = [
  { id: "R01", title: "Слишком широкий MVP scope", severity: "Critical", mitigation: "После Phase 0 новые функции не добавляются без официального одобрения изменений." },
  { id: "R02", title: "Путаница informational vs functional", severity: "High", mitigation: "Показываем только доступные действия и актуальные статусы без имитации бронирования." },
  { id: "R03", title: "Отсутствие supplier API", severity: "High", mitigation: "Для каждой услуги есть автоматический и резервный ручной сценарий." },
  { id: "R05", title: "International payments", severity: "High", mitigation: "В MVP доступны онлайн-платежи через основные местные и международные способы оплаты." },
  { id: "R08", title: "Support overload", severity: "High", mitigation: "Работают поддержка, AI-маршрутизация и панель ключевых метрик." },
  { id: "R15", title: "AI hallucinations", severity: "High", mitigation: "AI помогает, а сложные запросы передаются оператору." },
  { id: "R20", title: "Broken external links", severity: "Medium", mitigation: "Ссылки и контент регулярно проверяются и обновляются." },
];





