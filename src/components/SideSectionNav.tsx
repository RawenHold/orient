type SideSectionNavItem = {
  href: string;
  label: string;
};

type SideSectionNavAction = SideSectionNavItem & {
  accent?: boolean;
  download?: boolean;
  external?: boolean;
};

type SideSectionNavProps = {
  actions?: SideSectionNavAction[];
  ariaLabel: string;
  items: SideSectionNavItem[];
  kicker: string;
  triggerLabel?: string;
};

export function SideSectionNav({ actions = [], ariaLabel, items, kicker, triggerLabel = "Разделы" }: SideSectionNavProps) {
  return (
    <details className="investor-section-switcher">
      <summary className="investor-section-trigger" aria-label={ariaLabel}>
        {triggerLabel}
      </summary>
      <nav className="investor-section-note" aria-label={ariaLabel}>
        <p className="investor-section-kicker">{kicker}</p>
        {items.map((item) => (
          <a key={item.href} href={item.href} className="investor-section-link">
            <span>{item.label}</span>
          </a>
        ))}
        {actions.length ? (
          <div className="investor-section-actions" aria-label="Быстрые действия">
            {actions.map((action) => (
              <a
                key={action.href}
                href={action.href}
                className={`investor-section-action ${action.accent ? "investor-section-action-accent" : ""}`}
                download={action.download}
                rel={action.external ? "noreferrer" : undefined}
                target={action.external ? "_blank" : undefined}
              >
                {action.label}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </details>
  );
}
