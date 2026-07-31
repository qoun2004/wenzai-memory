import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLink, StatusBadge } from "./components";
import { archivePreview, themes } from "./data";

export const metadata: Metadata = {
  title: "塭仔｜土地、技藝與生活記憶",
  description:
    "從摃梗、鹽地雜糧、黑豆豆腐到地方歌謠，持續整理塭仔社區的人、產業與長期行動。",
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid site-width">
          <div className="hero-copy">
            <p className="eyebrow light">嘉義・東石・塭仔</p>
            <h1>
              一件老農具，
              <br />
              牽起一整片土地的記憶。
            </h1>
            <p className="hero-lead">
              從摃梗的敲擊聲出發，走進鹽地雜糧、農村換工、地方歌謠、豆腐庄與黑豆食農。
              這裡不是一次性的成果頁，而是塭仔持續生長的地方文化入口。
            </p>
            <div className="hero-actions">
              <Link className="button button-accent" href="/projects/gonggen">
                進入摃梗計畫
              </Link>
              <Link className="button button-ghost" href="/archive">
                瀏覽地方典藏
              </Link>
            </div>
          </div>
          <div className="hero-object" aria-label="摃梗與鹽地的抽象視覺">
            <div className="sun-disc" />
            <div className="field-lines" />
            <div className="gonggen-mark">
              <span>摃</span>
              <i />
              <span>梗</span>
            </div>
            <p>記憶不是被留下來而已，還要有人再做一次。</p>
          </div>
        </div>
      </section>

      <section className="section site-width intro-split">
        <div>
          <p className="eyebrow">現在正在進行</p>
          <h2>從記錄，走向可以繼續使用的地方知識</h2>
        </div>
        <div className="intro-copy">
          <p>
            2026年的「摃梗與鹽地雜糧記憶」計畫，以十位人物訪談、歌謠採集、摃梗復刻、
            黑豆豆腐食農體驗、紀錄片與成果活動，重新連起土地、勞動、飲食和人。
          </p>
          <ArrowLink href="/place">先認識塭仔</ArrowLink>
        </div>
      </section>

      <section className="section section-tint">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">本期主題</p>
              <h2>三條正在交會的故事線</h2>
            </div>
            <p>素材會隨訪談、拍攝與社區確認逐步補齊。</p>
          </div>
          <div className="theme-grid">
            {themes.map((theme, index) => (
              <article className="theme-card" key={theme.title}>
                <span className="theme-number">0{index + 1}</span>
                <p className="theme-kicker">{theme.kicker}</p>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
                <StatusBadge status={theme.status} />
                <ArrowLink href={theme.href}>閱讀這條故事</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section site-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">地方知識庫</p>
            <h2>讓散落的影音、人物與新聞重新有脈絡</h2>
          </div>
          <ArrowLink href="/archive">查看完整典藏入口</ArrowLink>
        </div>
        <div className="archive-preview">
          {archivePreview.map((item) => (
            <article className="archive-row" key={item.title}>
              <div className="archive-year">{item.year}</div>
              <div>
                <p className="archive-type">{item.type}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <StatusBadge status={item.status} />
            </article>
          ))}
        </div>
      </section>

      <section className="section invitation">
        <div className="site-width invitation-inner">
          <div>
            <p className="eyebrow light">食農教育與地方體驗</p>
            <h2>不只看見成果，也親手理解一件工具、一顆豆子與一張餐桌。</h2>
          </div>
          <div>
            <p>
              摃梗操作、雜糧脫粒、黑豆豆腐DIY、聚落踏查與地方餐食，正在整理成可持續使用的教案與體驗模組。
            </p>
            <Link className="button button-accent" href="/education">
              查看教育與體驗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
