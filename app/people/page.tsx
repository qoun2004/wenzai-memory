import type { Metadata } from "next";
import Link from "next/link";
import { InfoCard, PageHero } from "../components";

export const metadata: Metadata = {
  title: "人與地方產業",
};

export default function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="人與地方產業"
        title="真正保存地方的，是人的做法與選擇"
        lead="長者記得工具怎麼用，婦女把地方食材做成可以帶走的產品，青年重新設計體驗，社區工作者把不同聚落與團隊連在一起。"
        note="人物姓名、店家名稱與口述內容，待本人同意及資料核對後逐步公開。"
      />
      <section className="section site-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">人物入口</p>
            <h2>每一種角色，都掌握不同的地方知識</h2>
          </div>
          <p>第一版先建立人物分類；後續訪談完成後，每位人物會有公開摘要與相關典藏連結。</p>
        </div>
        <div className="card-grid">
          <InfoCard label="耆老與職人" title="摃梗製作、操作與換工記憶" status="1位正式訪談＋1位技藝線索">
            <p>回答工具怎麼做、處理哪些作物、誰負責什麼，以及它何時逐漸消失。</p>
          </InfoCard>
          <InfoCard label="聲音採集" title="黃哲永老師與地方歌謠" status="創作進行中">
            <p>從耆老記憶、歌謠與地方故事出發，整理並創作新的歌曲，再與長者共同教唱。</p>
          </InfoCard>
          <InfoCard label="地方行動" title="吳淑芳與長期社區工作">
            <p>連結在地人物、既有黑豆資料、食農經驗與大東石區域協作脈絡。</p>
          </InfoCard>
          <InfoCard label="協會治理" title="林文達理事長與協會責任" status="正式資料待補">
            <p>呈現協會作為受補助與執行主體的角色，以及計畫如何接續長期願景。</p>
          </InfoCard>
          <InfoCard label="傳承火苗" title="豆腐庄家族、第三代長輩與青年">
            <p>理解老店停業、技術中斷與今天重新發展黑豆豆腐體驗的原因。</p>
          </InfoCard>
          <InfoCard label="地方餐桌" title="農漁生產者與在地廚師">
            <p>讓黑豆、養殖魚與東石食材，不只成為菜色，也能被說明其土地與產業關係。</p>
          </InfoCard>
        </div>
      </section>
      <section className="section section-tint" id="cai-tong-bin">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div><p className="eyebrow">人物線索｜2026.08.09</p><h2>蔡通彬：從材料、敲擊與日曬裂損，找回摃梗怎麼製作</h2></div>
            <p>淑芳姐提供的3分19秒台語影片，記下東崙農事小組長蔡通彬對材料耐用、敲擊、拉取、日曬裂開與尋找材料的口述。他可能是後續實作拍攝的重要「梗達人」。</p>
          </div>
          <div className="field-gallery interview-gallery">
            <figure className="field-photo field-photo-wide"><img src="/field-notes/interview-20260809-cai/conversation.jpg" alt="蔡通彬與吳淑芳在東崙進行台語訪談" /><figcaption>吳淑芳以手機靠近收音，蔡通彬在熟悉的戶外空間口述材料與製作經驗。</figcaption></figure>
            <figure className="field-photo"><img src="/field-notes/interview-20260809-cai/gesture.jpg" alt="蔡通彬在訪談中以手勢說明摃梗材料與操作" /><figcaption>手勢能協助追問「怎麼敲、怎麼拉、怎麼看材料」，下次應立即請他實際示範。</figcaption></figure>
            <article className="field-insight"><p className="archive-type">人物定位</p><h3>不只是農事受訪者，而是製作技藝的關鍵線索</h3><p>影片中可辨識的「彈性」、「用鐵鎚敲」、「曬太陽會裂」與「找到後帶工具」，已從記憶叙述進入可實作驗證的層次。</p><Link className="arrow-link" href="/projects/gonggen#cai-tong-bin-20260809">查看摃梗製作線索 <span aria-hidden="true">↗</span></Link></article>
          </div>
          <div className="usability-grid">
            <article><strong>製作材料</strong><p>追問材料名稱、採集地、彈性、裂損原因、保存與可使用的判斷方式。</p></article>
            <article><strong>實作跟拍</strong><p>優先確認尋材日期，連續拍下帶工具、選材、處理、製作、修整與試用。</p></article>
            <article><strong>黑豆農事</strong><p>後段亦談到東崙種黑豆及降雨、種子腐壞發霉、發芽不良等田間問題。</p></article>
          </div>
          <p className="material-credit">拍攝日期：2026.08.09（依原始檔案時間）｜人物：蔡通彬（東崙農事小組長；「梗達人／摃梗製作者」角色待本人與吳淑芳確認）｜主訪與影像提供：吳淑芳。台語內容以Breeze ASR建立初步索引，公開文字為摘要而非逐字定稿；完整影片待授權確認。</p>
        </div>
      </section>
      <section className="section section-tint">
        <div className="site-width prose-grid">
          <aside><p className="eyebrow">內容原則</p><p>網站不把口述記憶直接當成唯一史實，而是標示說話者、時間、來源與待查證之處。</p></aside>
          <article>
            <h2>人物頁將如何長出來</h2>
            <div className="steps">
              <div className="step"><div><h3>先取得同意</h3><p>確認姓名、聲音、影像、逐字稿與老照片可公開的範圍。</p></div></div>
              <div className="step"><div><h3>保留完整來源</h3><p>原始錄音與工作檔另行保存，網站只放公開版摘要與經同意的節錄。</p></div></div>
              <div className="step"><div><h3>連回相關內容</h3><p>每位人物會連到對應的農具、歌謠、產業、教案、影片與活動。</p></div></div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
