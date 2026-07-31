import type { Metadata } from "next";
import { InfoCard, PageHero } from "../components";

export const metadata: Metadata = { title: "社區行動" };

export default function ActionsPage() {
  return (
    <>
      <PageHero
        eyebrow="社區行動"
        title="不是一個計畫，而是十幾二十年的累積"
        lead="網站將逐步整理嘉義縣鄉村永續發展協會、50分工作室、居民與合作團隊在食農、共老、空間、環境、小旅行與地方串聯上的成果。"
        note="歷年獎項、正式計畫名稱、主協辦單位與年份，需依協會文件逐筆核對。"
      />
      <section className="section site-width">
        <div className="section-heading">
          <div><p className="eyebrow">行動時間線</p><h2>先建立脈絡，再補上每一份成果</h2></div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <time>2009—2025</time>
            <div><h3>既有影音中的塭仔</h3><p>環境清潔、淹水與雨水利用、地方飲食、慈安宮、共老、無障礙空間、黑豆與社區客廳。</p></div>
          </div>
          <div className="timeline-item">
            <time>歷年累積</time>
            <div><h3>食農、小旅行與區域串聯</h3><p>協會長期連結在地小團隊與社區；正式名稱與成果資料將由協會補齊。</p></div>
          </div>
          <div className="timeline-item">
            <time>2026.07</time>
            <div><h3>台藝大團隊交流協作</h3><p>豆腐製作、塭仔踏查訪談與地圖創作；標示為相關專案，不列成本次補助案直接產出。</p></div>
          </div>
          <div className="timeline-item">
            <time>2026</time>
            <div><h3>摃梗與鹽地雜糧記憶</h3><p>以人物訪談、歌謠、復刻、食農、紀錄片與網站，建立可持續使用的地方內容。</p></div>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="site-width card-grid">
          <InfoCard label="空間與共老" title="大鼎灶、無障礙與社區客廳" status="既有影音待整理">
            <p>把空間改造放回居民日常、共同照顧與地方互助的脈絡。</p>
          </InfoCard>
          <InfoCard label="環境與韌性" title="淹水、清潔與雨水利用" status="既有影音待整理">
            <p>記錄沿海聚落如何面對水、環境與公共空間問題。</p>
          </InfoCard>
          <InfoCard label="交流與協作" title="外部團隊如何進入地方">
            <p>每個合作專案清楚標示年份、團隊、作者、居民角色與成果歸屬。</p>
          </InfoCard>
        </div>
      </section>
      <section className="section site-width">
        <div className="prose-grid">
          <aside>
            <p className="eyebrow">名詞與來源說明</p>
            <p>
              嘉義縣曾參與教育部推動的學習型城市政策；目前找到的資料顯示，
              塭仔的做法與「在地學習、居民培力、跨域合作」精神相近，
              但尚未確認有一個正式名稱就叫「塭仔學習型城市計畫」。
            </p>
            <a
              className="arrow-link"
              href="https://www.moe.gov.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=343C7A26C93C7F04&sms=169B8E91BB75571F"
              target="_blank"
              rel="noreferrer"
            >
              查看教育部政策來源 <span aria-hidden="true">↗</span>
            </a>
          </aside>
          <article>
            <p className="eyebrow">學習型社區</p>
            <h2>塭仔如何把學習轉成地方行動</h2>
            <div className="steps">
              <div className="step"><div><h3>先走出去學</h3><p>公開報導記載，吳淑芳自1988年起參與農業與農村相關課程，2010年再投入農村再生顧問師訓練。</p></div></div>
              <div className="step"><div><h3>在移動中形成共識</h3><p>透過帶居民參訪其他社區，將車程變成分享案例、討論問題的「包車會議室」。</p></div></div>
              <div className="step"><div><h3>讓居民從小事開始</h3><p>從長者活動、新住民風味餐、解說培力與共同空間，讓參與者一邊實作、一邊累積信心。</p></div></div>
              <div className="step"><div><h3>再連成區域網絡</h3><p>從塭仔向白水湖、網寮、栗子崙與洲仔等地延伸，形成跨社區合作與嘉義濱海漁村生活圈的想像。</p></div></div>
            </div>
            <a
              className="arrow-link"
              href="https://city.gvm.com.tw/article/74741"
              target="_blank"
              rel="noreferrer"
            >
              資料來源：《城市學》原始報導 <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
