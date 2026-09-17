import HistoricalCoursePreview from "../historical-course-preview";
import type { Metadata } from "next";
import BlackBeanHistory from "./black-bean-history";
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
      <HistoricalCoursePreview />
      <BlackBeanHistory />
      <section className="section site-width">
        <p><a href="/projects/gonggen/#schedule-update">三份教案橫式簡介；梗達人工作坊已確定 10/3，成果活動延期 →</a></p>
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
          <InfoCard label="種植觀察" title="黑豆從田裡到採收" status="2026.09.16整地紀錄">
            <p>本次已進行曳引機鬆土，接續記錄播種與生長；往年影像另列為教學參考。</p>
            <a href="#black-bean-20260916">查看最新整地影像</a>
          </InfoCard>
          <InfoCard label="飲食加工" title="黑豆豆漿與豆腐DIY" status="2026.07.21影像已入庫">
            <p>從黑豆豆漿炊煮、持續攪拌、過濾、入模到壓製成形，連結食品衛生、豆腐庄記憶與地方技術傳承。</p>
          </InfoCard>
          <InfoCard label="地方故事" title="豆腐庄的記憶" status="訪談核對中">
            <p>從老店、家庭技術與停業原因，理解產業傳承與今天的體驗設計。</p>
          </InfoCard>
          <InfoCard label="教師與帶領者" title="學習單、材料表與安全提醒" status="待整合">
            <p>教師版說明、學生觀察單、帶領流程、過敏與工具風險。</p>
          </InfoCard>
        </div>
      </section>
      <section className="section site-width" id="black-bean-20260916">
        <div className="section-heading archive-heading">
          <div><p className="eyebrow">本次計畫實作紀錄｜2026.09.16</p><h2>等待土地準備好，黑豆食農從整地開始</h2></div>
          <p>前幾週降雨造成場地積水、土壤過濕鬆軟，整地工作因此延後。近日田地條件轉為適合作業，9月16日以曳引機鬆土，為接下來的黑豆播種做準備。</p>
        </div>
        <figure className="field-photo">
          <video controls playsInline preload="none" poster="/field-notes/black-bean-20260916/C0144.jpg" aria-label="2026年9月16日曳引機整地現場，12秒無聲節錄" style={{width:"100%",aspectRatio:"16 / 9",display:"block",background:"#111"}}>
            <source src="/field-notes/black-bean-20260916/tillage.mp4" type="video/mp4" />
            您的瀏覽器不支援影片播放。
          </video>
          <figcaption>曳引機鬆土與田間鳥群｜當日現場影片12秒節錄（無聲），非播種或收成畫面。</figcaption>
        </figure>
        <div className="field-gallery">
          <figure className="field-photo"><img loading="lazy" src="/field-notes/black-bean-20260916/C0137.jpg" alt="曳引機於田地邊緣進行黑豆播種前整地" /><figcaption>從田地環境開始，記錄本次黑豆食農的場地準備。</figcaption></figure>
          <figure className="field-photo"><img loading="lazy" src="/field-notes/black-bean-20260916/C0143.jpg" alt="曳引機翻鬆土壤的正面近景" /><figcaption>曳引機翻鬆土壤，為後續播種做準備。</figcaption></figure>
        </div>
        <div className="usability-grid">
          <article><strong>目前進度</strong><p>已進行鬆土與整地紀錄，尚未播種。後續持續補上播種與生長觀察，連結黑豆及豆腐DIY食農教學。</p></article>
          <article><strong>跟著土地的時間</strong><p>種植至收成可能跨越本次專案預定執行期；依實際農事進度持續記錄，不預先將收成列為完成成果。</p></article>
          <article><strong>歷史素材分開呈現</strong><p>淑芳姐先前提供的黑豆照片與影片，作為過往種植紀錄及教學備案，補充作物生命週期，不代表本次已完成播種或收成。</p><a href="#black-bean-history">查看過往黑豆種植紀錄</a></article>
        </div>
        <h3>手機視角｜同日整地補充紀錄</h3>
        <p>從田區全景到曳引機近景，以手機補充相機之外的現場視角。這批影像記錄的是播種前的鬆土作業。</p>
        <div className="field-gallery">
          <figure className="field-photo"><img loading="lazy" src="/field-notes/black-bean-20260916/phone/IMG_5115.jpg" alt="手機拍攝曳引機在田區翻鬆土壤的橫幅全景" /><figcaption>田區全景：曳引機翻鬆土壤，準備接續黑豆種植。</figcaption></figure>
          <figure className="field-photo"><img loading="lazy" src="/field-notes/black-bean-20260916/phone/IMG_5123.jpg" alt="曳引機正面近景與後方田間鳥群" style={{height:"auto",aspectRatio:"auto"}} /><figcaption>整地近景：曳引機作業時，田間也可見鳥群活動。</figcaption></figure>
          <figure className="field-photo"><img loading="lazy" src="/field-notes/black-bean-20260916/phone/IMG_5122.jpg" alt="田埂旁望向正在整地的曳引機與鬆土後的田面" style={{height:"auto",aspectRatio:"auto"}} /><figcaption>從田埂觀察作業範圍與鬆土後的田面。</figcaption></figure>
          <figure className="field-photo">
            <video controls playsInline preload="none" poster="/field-notes/black-bean-20260916/phone/poster.jpg" aria-label="手機直式拍攝曳引機整地，11秒無聲節錄" style={{width:"100%",maxHeight:640,aspectRatio:"9 / 16",display:"block",background:"#111",objectFit:"contain"}}>
              <source src="/field-notes/black-bean-20260916/phone/tillage-vertical.mp4" type="video/mp4" />您的瀏覽器不支援影片播放。
            </video>
            <figcaption>手機直式現場影片｜11秒無聲節錄，來源IMG_5124；為田野素材展示，非正式社群短影音成品。</figcaption>
          </figure>
        </div>
        <p className="material-credit">拍攝日期：2026.09.16｜相機來源：C0137至C0144現場影片及截圖；手機照片：IMG_5115、IMG_5122、IMG_5123；手機影片：IMG_5124。原始檔案保留，網站使用輕量化版本。降雨與作業進度依團隊現場紀錄說明。</p>
      </section>
      <section className="section site-width" id="tofu-workshop-20260721">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">前期食農影像｜2026.07.21</p>
            <h2>在社區客廳，從一鍋黑豆豆漿走到共同完成的豆腐體驗</h2>
          </div>
          <p>這是攝影端在緊急接手紀錄片隔天留下的第一批現場素材。拍攝準備有限，但完整保留場域、長輩示範、炊煮、工具、模具、分組操作與成品，可作為紀錄片黑豆食農段落的過程影像。</p>
        </div>
        <div className="field-gallery workshop-gallery">
          <figure className="field-photo field-photo-wide">
            <img src="/field-notes/tofu-workshop-20260721/outdoor.jpg" alt="塭仔社區客廳戶外空間進行黑豆豆漿炊煮活動" />
            <figcaption>社區客廳的戶外大鼎灶與工作區，讓炊煮、解說和參與者觀看能在同一個場域發生。</figcaption>
          </figure>
          <figure className="field-photo">
            <img src="/field-notes/tofu-workshop-20260721/elder.jpg" alt="在地豆腐第四代長輩於黑豆豆漿活動現場分享製作經驗" />
            <figcaption>在地經營豆腐的第四代長輩受邀到場示範；姓名與家族豆腐店資料待協會補充確認。</figcaption>
          </figure>
          <figure className="field-photo">
            <img src="/field-notes/tofu-workshop-20260721/stirring.jpg" alt="長輩持續攪拌鍋內黑豆豆漿與豆渣" />
            <figcaption>豆漿與豆渣一起煮時容易沾鍋，需要持續攪拌並煮滾，是操作中最需要耐心與經驗的步驟之一。</figcaption>
          </figure>
          <figure className="field-photo">
            <img src="/field-notes/tofu-workshop-20260721/molds.jpg" alt="黑豆豆腐DIY使用的木製模具與布巾" />
            <figcaption>木製模具、布巾與盛裝器具，讓液態豆漿逐步進入凝固、包覆與壓製成形。</figcaption>
          </figure>
          <figure className="field-photo">
            <img src="/field-notes/tofu-workshop-20260721/finished.jpg" alt="黑豆豆腐DIY完成後排列在托盤上的豆腐成品" />
            <figcaption>參與者完成的豆腐成品，也讓「豆腐庄」不只停留在過去，而能轉化成今天可參與的地方體驗。</figcaption>
          </figure>
          <figure className="field-photo field-photo-wide">
            <img src="/field-notes/tofu-workshop-20260721/living-room.jpg" alt="參與者在塭仔社區客廳內進行黑豆豆腐DIY" />
            <figcaption>活動後段移入社區客廳共同操作。陳鈺益亦參與示範，讓地方核心夥伴與長輩技術在體驗流程中銜接。</figcaption>
          </figure>
        </div>
        <div className="usability-grid">
          <article><strong>紀錄片可用</strong><p>適合作為豆腐庄與當代黑豆食農段落的場域建立、手部特寫、製程蒙太奇、居民互動與成品畫面。</p></article>
          <article><strong>教案可用</strong><p>可依影像拆解炊煮、攪拌、過濾、入模、包覆、壓製與成形，後續補上材料比例、溫度、時間及安全提醒。</p></article>
          <article><strong>仍需補充</strong><p>第四代長輩姓名、豆腐店沿革、黑豆來源、完整配方、陳鈺益的帶領角色，以及社區客廳獲獎名稱與年份。</p></article>
        </div>
        <p className="material-credit">活動日期：2026.07.21（依原始檔案時間）｜地點：塭仔社區客廳／「塭仔的青春美夢」場域｜影像拍攝：黃建凱｜原始素材：140支短片、約44分鐘。現場另有不同團隊因另一專案採集黑豆內容；網站不將其拍攝工作列為本案成果。</p>
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
