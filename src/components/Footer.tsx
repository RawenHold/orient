import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-ink px-4 py-12 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-semibold">Orient UBook</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
            Investor landing + developer specification for an Uzbekistan travel concierge platform. MVP проверяет спрос, Post-MVP расширяет сервисы после данных и договоров.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Разделы</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            <Link href="/" className="transition hover:text-white">Для инвестора</Link>
            <Link href="/developers" className="transition hover:text-white">Для разработчиков</Link>
            <Link href="/stages" className="transition hover:text-white">Этапы реализации</Link>
            <a href="/assets/orient-ubook-presentation.pdf" target="_blank" rel="noreferrer" className="transition hover:text-white">Презентация PDF</a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Контакты</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            <a href="tel:+998975453333" className="transition hover:text-white">
              Телефон: +998 97 545 33 33
            </a>
            <a href="mailto:laz.dmitriy@gmail.com" className="transition hover:text-white">
              Email: laz.dmitriy@gmail.com
            </a>
            <a href="https://t.me/LazDmitriy" target="_blank" rel="noreferrer" className="transition hover:text-white">
              Telegram: @LazDmitriy
            </a>
            <p>Локация: Tashkent, Uzbekistan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
