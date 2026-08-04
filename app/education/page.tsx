import type { Metadata } from "next";
import { InfoCard, PageHero } from "../components";

export const metadata: Metadata = { title: "食農教育與體驗" };

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="食農教育與體驗"
        title="從土地、生產、加工到親手完成"
        lead="這裡不只是活動消息，而是可長期使用的教育資源中心。每份教案都會標示對象、目標、時間、材料、場地、安全與帶領方式。"
        note="第一版先提供教案架構與體驗雛形；正式下載、費用與預約，待實作測試及協會確認後開放。"
      />
      <section className="section site-width">
        <div className="section-heading">
          <div><p className="eyebrow">教案資源</p><h2>五個可以持續發展的學習模組</h2></div>
          <p>不是把地方故事變成標準答案，而是設計讓參與者觀察、詢問、操作與比較的方法。</p>
        </div>
        <div className="card-grid">
          <InfoCard label="農具與工藝" title="摃梗製作教案" status="製作中">
            <p>刺竹選材、材料處理、結構、綁紮、修整、試用與工具安全。</p>
          </InfoCard>
          <InfoCard label="勞動體驗" title="摃梗手工脫粒" status="製作中">
            <p>辨識雜糧、理解脫粒原理、操作節奏與早年農村換工情境。</p>
          </InfoCard>
          <InfoCard label="種植觀察" title="黑豆從田裡到採收" status="2023素材已入庫">
            <p>土地、季節、開花、結莢、採收與生產影像觀察紀錄。</p>
          </InfoCard>
          <InfoCard label="飲食加工" title="黑豆豆腐DIY" status="教案實作準備中">
            <p>浸泡、磨漿、豆漿與豆渣同煮、攪拌、煮滾、凝固及食品衛生；本案手作活動安排於「塭仔的青春美夢」場域。</p>
          </InfoCard>
          <InfoCard label="地方故事" title="豆腐庄的記憶" status="訪談核對中">
            <p>從老店、家庭技術與停業原因，理解產業傳承與今天的體驗設計。</p>
          </InfoCard>
          <InfoCard label="教師與帶領者" title="學習單、材料表與安全提醒" status="待整合">
            <p>教師版說明、學生觀察單、帶領流程、過敏與工具風險。</p>
          </InfoCard>
        </div>
      </section>
      <section className="section section-tint" id="black-bean-history">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div>
              <p className="eyebrow">既有行動｜2023</p>
              <h2>黑豆狂想曲：從社區說明走進田裡</h2>
            </div>
            <p>
              新收到的歷史照片補上計畫如何與居民說明、由志工參與播種，
              再走向成熟豆莢與採後整理。這批資料讓2026年的黑豆食農不再像從零開始，
              而是接續社區已經做過的實踐。
            </p>
          </div>
          <div className="field-gallery">
            <figure className="field-photo field-photo-wide">
              <img src="/history/black-bean-briefing-2023.jpg" alt="2023年塭仔社區黑豆狂想曲計畫說明現場，居民在社區教室參與活動" />
              <figcaption>2023.09.28，黑豆狂想曲計畫在塭仔社區向居民說明；現場也以繪畫與互動方式引導長者參與。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/history/black-bean-sowing-2023.jpg" alt="社區帶領者與志工在田區說明並參與黑豆播種" />
              <figcaption>依原始檔名，這批照片記錄國泰志工參與黑豆播種；確切日期、田區及參與單位全名待補。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/history/black-bean-field.jpg" alt="田間已成熟並結出深色豆莢的黑豆植株" />
              <figcaption>成熟黑豆豆莢留下從種植走向採收的產業影像，可用於觀察作物生命週期。</figcaption>
            </figure>
            <figure className="field-photo field-photo-wide">
              <img src="/history/black-bean-sorting.jpg" alt="塭仔長者在竹篩上整理採收後的黑豆" />
              <figcaption>長者以竹篩整理黑豆，讓種植紀錄回到社區日常、勞動知識與後續加工。</figcaption>
            </figure>
          </div>
          <div className="usability-grid">
            <article><strong>社區導入</strong><p>計畫說明、長者參與與圖像表達，適合發展成地方記憶暖身活動。</p></article>
            <article><strong>田間實作</strong><p>播種、田間觀察、結莢與採收，可整理成作物生命週期學習單。</p></article>
            <article><strong>採後應用</strong><p>整理、保存、豆腐與料理，串起黑豆豆腐DIY及地方餐桌。</p></article>
          </div>
          <p className="material-credit">
            影像年代：2023（計畫說明照片可見日期為2023.09.28；其餘依檔名與資料提供者標示）｜照片素材提供：吳淑芳｜人物姓名、完整活動資料與公開授權範圍持續補登。
          </p>
        </div>
      </section>
      <section className="section site-width">
        <div className="prose-grid">
          <aside>
            <p className="eyebrow">實作場域</p>
            <p>塭仔的青春美夢／FOODTALK客廳</p>
          </aside>
          <article>
            <h2>教案放回社區真正使用的地方</h2>
            <p>
              社區廚房、大鼎灶、友善菜園與FOODTALK客廳，原本就是居民共食、
              飲食課程、接待與交流的空間。本案的黑豆豆腐DIY在此進行，
              能把豆腐製作、豆腐庄記憶與今天的社區生活連在一起。
            </p>
            <p>
              未來教案除記錄材料與步驟，也會補上場地配置、用水用電、食品衛生、
              帶領人數與長者參與方式，讓活動可以重複辦理。
            </p>
          </article>
        </div>
      </section>
      <section className="section section-tint">
        <div className="site-width prose-grid">
          <aside><p className="eyebrow">體驗模組</p><p>依不同對象與時間，組合操作、故事、聚落踏查與地方餐桌。</p></aside>
          <article>
            <h2>從90分鐘到一日小旅行</h2>
            <div className="steps">
              <div className="step"><div><h3>90分鐘｜一件工具，一種作物</h3><p>地方故事導入、摃梗操作、雜糧脫粒與簡短分享。</p></div></div>
              <div className="step"><div><h3>半日｜摃梗與黑豆豆腐</h3><p>農具操作、黑豆豆腐DIY、豆腐庄故事與社區場域認識。</p></div></div>
              <div className="step"><div><h3>一日｜聚落、產業與地方餐桌</h3><p>加入農漁產業踏查、人物交流、體驗與東石食材餐桌。</p></div></div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
