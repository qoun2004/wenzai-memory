import type { Metadata } from "next";
import Link from "next/link";
import { navItems } from "./data";
import "./globals.css";

const siteUrl =
  process.env.URL ??
  process.env.DEPLOY_PRIME_URL ??
  "https://wenzai-memory.qoun2004.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "嘉義縣鄉村永續發展協會｜大東石地方行動與記憶平台",
    template: "%s｜嘉義縣鄉村永續發展協會",
  },
  description:
    "整理嘉義東石地區的居民行動、地方文化、食農教育與長期社區成果。",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "嘉義縣鄉村永續發展協會｜大東石地方行動與記憶平台",
    description:
      "整理嘉義東石地區的居民行動、地方文化、食農教育與長期社區成果。",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "嘉義縣鄉村永續發展協會",
    description:
      "大東石地方行動、地方文化、食農教育與長期社區成果平台。",
  },
};

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="preview-ribbon">
        <span>內部預覽版</span>
        <p>供協會、計畫人員與輔導單位檢視；內容仍在核對與授權整理中</p>
      </div>
      <div className="site-width header-inner">
        <Link className="brand" href="/" aria-label="回到嘉義縣鄉村永續發展協會網站首頁">
          <span className="brand-mark">鄉</span>
          <span>
            <strong>嘉義縣鄉村永續發展協會</strong>
            <small>大東石地方行動與記憶平台</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="主要導覽">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="visit-link" href="/projects/gonggen">
          塭仔摃梗計畫
        </Link>
        <details className="mobile-menu">
          <summary aria-label="開啟選單">選單</summary>
          <nav aria-label="手機版導覽">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/projects/gonggen">塭仔摃梗子計畫</Link>
            <Link href="/visit">參訪與體驗</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-grid">
        <div>
          <div className="footer-brand">嘉義縣鄉村永續發展協會</div>
          <p>串連人、土地與地方行動，讓累積的成果繼續被看見、被使用。</p>
        </div>
        <div>
          <h2>協會平台</h2>
          <Link href="/about">關於協會</Link>
          <Link href="/satoumi">大東石里海計畫</Link>
          <Link href="/actions">行動與計畫</Link>
          <Link href="/archive">地方知識庫</Link>
        </div>
        <div>
          <h2>本期子計畫</h2>
          <Link href="/projects/gonggen">摃梗主題計畫</Link>
          <Link href="/education">食農教育與體驗</Link>
          <Link href="/visit">參訪與活動</Link>
        </div>
      </div>
      <div className="site-width footer-bottom">
        <span>© 2026 社團法人嘉義縣鄉村永續發展協會</span>
        <span>內容依訪談、來源與授權狀態逐步公開</span>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        <a className="skip-link" href="#main-content">
          跳至主要內容
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
