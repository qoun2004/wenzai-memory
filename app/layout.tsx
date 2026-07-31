import type { Metadata } from "next";
import Link from "next/link";
import { navItems } from "./data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "塭仔｜土地、技藝與生活記憶",
    template: "%s｜塭仔",
  },
  description:
    "保存並持續整理塭仔社區的人、生活、產業、記憶與長期社區行動。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "塭仔｜土地、技藝與生活記憶",
    description:
      "保存並持續整理塭仔社區的人、生活、產業、記憶與長期社區行動。",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "塭仔：土地、技藝、生活記憶",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "塭仔｜土地、技藝與生活記憶",
    description:
      "保存並持續整理塭仔社區的人、生活、產業、記憶與長期社區行動。",
    images: ["/og.png"],
  },
};

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-width header-inner">
        <Link className="brand" href="/" aria-label="回到塭仔網站首頁">
          <span className="brand-mark">塭</span>
          <span>
            <strong>塭仔</strong>
            <small>土地・技藝・生活記憶</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="主要導覽">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="visit-link" href="/visit">
          來塭仔
        </Link>
        <details className="mobile-menu">
          <summary aria-label="開啟選單">選單</summary>
          <nav aria-label="手機版導覽">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/visit">來塭仔／預約體驗</Link>
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
          <div className="footer-brand">塭仔</div>
          <p>保存土地裡的聲音，也為下一次相遇留下入口。</p>
        </div>
        <div>
          <h2>網站內容</h2>
          <Link href="/projects/gonggen">摃梗主題計畫</Link>
          <Link href="/education">食農教育與體驗</Link>
          <Link href="/archive">地方知識庫</Link>
        </div>
        <div>
          <h2>執行與維護</h2>
          <p>嘉義縣鄉村永續發展協會</p>
          <p>第一版資料持續整理中</p>
        </div>
      </div>
      <div className="site-width footer-bottom">
        <span>© 2026 塭仔社區地方記憶網站</span>
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
