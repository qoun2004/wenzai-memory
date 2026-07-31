import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, StatusBadge } from "../../components";

export const metadata: Metadata = {
  title: "摃梗與鹽地雜糧記憶",
  description: "嘉義縣鄉村永續發展協會2026主題子計畫：記錄塭仔摃梗、鹽地雜糧、地方歌謠與黑豆食農。",
  openGraph: { images: ["/og.png"] },
};

export default function GonggenProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="協會主題子計畫｜2026"
        title="摃梗：鹽地雜糧的記憶與新生"
        lead="當一件工具逐漸離開日常生活，與它相連的土地、作物、換工、歌謠、飲食與人際關係，要如何被記住，並重新成為今天仍有人願意使用的地方文化？"
        note="「摃梗」的地方讀音、正確寫法、作物與操作名稱，將依耆老訪談及實物確認持續修訂。"
      />
      <section className="project-parent-bar">
        <div className="site-width project-parent-inner">
          <div>
            <span>上層組織</span>
            <strong>嘉義縣鄉村永續發展協會</strong>
          </div>
          <p>本頁是協會大架構下的「塭仔摃梗與鹽地雜糧記憶」子計畫，不代表協會全部業務。</p>
          <Link href="/about">查看協會架構 ↗</Link>
        </div>
      </section>
      <section className="section site-width">
        <div className="fact-strip">
          <div className="fact"><strong>10位</strong><span>人物訪談規劃</span></div>
          <div className="fact"><strong>5場</strong><span>歌謠工作坊</span></div>
          <div className="fact"><strong>1支</strong><span>五分鐘紀錄片</span></div>
          <div className="fact"><strong>2026.10.24</strong><span>成果活動</span></div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="site-width prose-grid">
          <aside>
            <p className="eyebrow">影片主線</p>
            <StatusBadge status="田野與製作進行中" />
            <p>五分鐘版本以「摃梗從記憶到復刻」為核心，黑豆與豆腐庄是地方產業延續的第二條線。</p>
          </aside>
          <article>
            <h2>從歌聲開始，回到一件工具，再走向今天</h2>
            <div className="steps">
              <div className="step"><div><h3>先聽見歌聲</h3><p>長者、老屋、摃梗聲與雜糧落下的聲音，讓觀眾先進入地方記憶。</p></div></div>
              <div className="step"><div><h3>鹽地、雜糧與農村換工</h3><p>透過空景、老照片與耆老訪談，理解工具為何在這裡出現。</p></div></div>
              <div className="step"><div><h3>重新做出一件摃梗</h3><p>從刺竹採集、選材、處理、製作、修整到試用，保留手與材料的知識。</p></div></div>
              <div className="step"><div><h3>從豆腐庄到黑豆食農</h3><p>連起老店記憶、黑豆種植、豆腐DIY與今天的傳承者。</p></div></div>
              <div className="step"><div><h3>保存之後，可以變成什麼</h3><p>教案、工作坊、小旅行與地方餐桌，讓記憶重新被使用。</p></div></div>
            </div>
          </article>
        </div>
      </section>
      <section className="section site-width" id="songs">
        <div className="section-heading">
          <div><p className="eyebrow">聲音線索</p><h2>歌謠不是配樂，而是理解記憶的方法</h2></div>
          <p>歌詞、旋律、演唱、錄音與影像會分別確認來源及授權。</p>
        </div>
        <div className="archive-preview">
          <article className="archive-row">
            <div className="archive-year">已完成</div>
            <div><p className="archive-type">工作坊</p><h3>前四場歌謠採集</h3><p>活動照片、錄音、文字與簽到資料正在收整。</p></div>
            <StatusBadge status="資料補齊中" />
          </article>
          <article className="archive-row">
            <div className="archive-year">下一步</div>
            <div><p className="archive-type">創作與教唱</p><h3>黃哲永老師完成歌曲後的第五場</h3><p>安排老師與在地長者共同教唱，並記錄修正、回應與群體歌聲。</p></div>
            <StatusBadge status="日期待定" />
          </article>
        </div>
      </section>
    </>
  );
}
