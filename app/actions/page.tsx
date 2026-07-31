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
    </>
  );
}
