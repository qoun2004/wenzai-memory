import type { Metadata } from "next";
import Link from "next/link";
import { InfoCard, PageHero } from "../components";

export const metadata: Metadata = {
  title: "人與地方產業",
};

type MapPerson = {
  name: string;
  role: string;
  relation: string;
  initials: string;
  image?: string;
  imagePosition?: string;
  status?: string;
};

const mapClusters: Array<{
  key: string;
  place: string;
  note: string;
  people: MapPerson[];
}> = [
  {
    key: "wenzai",
    place: "塭仔",
    note: "本期摃梗子計畫核心聚落",
    people: [
      {
        name: "吳淑芳",
        role: "地方工作者／計畫連結者",
        relation: "協會、口述訪談、黑豆與地方網絡",
        initials: "芳",
        image: "/field-notes/interview-20260809-cai/conversation.jpg",
        imagePosition: "76% 48%",
      },
      {
        name: "林文達",
        role: "協會理事長",
        relation: "協會治理與大東石里海願景",
        initials: "林",
        status: "人物資料待補",
      },
      {
        name: "唐榮",
        role: "地方耆老／首位正式訪談",
        relation: "摃梗、換工與農村生活記憶",
        initials: "唐",
        image: "/field-notes/interview-20260806-main.jpg",
        imagePosition: "53% 32%",
      },
    ],
  },
  {
    key: "donglun",
    place: "東崙",
    note: "材料與農事技藝線索",
    people: [
      {
        name: "蔡通彬",
        role: "東崙農事小組長／梗達人線索",
        relation: "選材、製作、操作與黑豆農事",
        initials: "蔡",
        image: "/field-notes/interview-20260809-cai/gesture.jpg",
        imagePosition: "27% 38%",
      },
    ],
  },
  {
    key: "xilun",
    place: "西崙",
    note: "村落治理與地方記憶",
    people: [
      {
        name: "唐容",
        role: "前村長",
        relation: "聚落背景與人物引介",
        initials: "容",
        status: "待正式約訪",
      },
      {
        name: "唐啟泰",
        role: "現任村長",
        relation: "地方現況與村落連結",
        initials: "泰",
        status: "待正式約訪",
      },
    ],
  },
  {
    key: "zhongzhou",
    place: "中洲",
    note: "雜糧產銷與產業網絡",
    people: [
      {
        name: "王文海",
        role: "雜糧產銷班長",
        relation: "鹽地雜糧、產銷與農業背景",
        initials: "王",
        status: "待正式約訪",
      },
    ],
  },
  {
    key: "xiaxi",
    place: "溪下村・港口宮周邊",
    note: "大東石北側的在地協同網絡",
    people: [
      {
        name: "柳婉玲",
        role: "在地協同者／刺竹帶路",
        relation: "田調、食農、芝麻種植與地方引介",
        initials: "玲",
        status: "不屬塭仔核心區・納入大東石關係網",
      },
      {
        name: "柳水鴨",
        role: "地方耆老／摃梗記憶線索",
        relation: "童年見聞、操作方式與農村生活史",
        initials: "柳",
        status: "正式訪談與公開授權待確認",
      },
    ],
  },
];

function PersonMarker({ person }: { person: MapPerson }) {
  return (
    <details className="map-person">
      <summary aria-label={`查看${person.name}的人物資料`}>
        <span className="map-avatar">
          {person.image ? (
            <img
              src={person.image}
              alt=""
              style={{ objectPosition: person.imagePosition }}
            />
          ) : (
            <span aria-hidden="true">{person.initials}</span>
          )}
        </span>
        <strong>{person.name}</strong>
      </summary>
      <div className="map-person-card">
        <p>{person.role}</p>
        <span>{person.relation}</span>
        {person.status && <small>{person.status}</small>}
      </div>
    </details>
  );
}

export default function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="人與地方產業"
        title="真正保存地方的，是人的做法與選擇"
        lead="長者記得工具怎麼用，婦女把地方食材做成可以帶走的產品，青年重新設計體驗，社區工作者把不同聚落與團隊連在一起。"
        note="人物姓名、店家名稱與口述內容，待本人同意及資料核對後逐步公開。"
      />
      <section className="section site-width" id="people-map">
        <div className="section-heading">
          <div>
            <p className="eyebrow">大東石地方引路人地圖</p>
            <h2>先知道人在哪裡，再看見知識如何流動</h2>
          </div>
          <p>這是一張工作用的相對位置示意圖，不代表精確座標。點選人物可查看角色、專長及與本期計畫的關係。</p>
        </div>
        <div className="people-map-shell">
          <div className="people-map-legend" aria-label="人物地圖圖例">
            <span><i className="legend-dot photo" />已有影像</span>
            <span><i className="legend-dot pending" />照片或授權待補</span>
            <span><i className="legend-line" />人物與主題關聯</span>
            <em>內部預覽・村落層級</em>
          </div>
          <div className="people-map" role="img" aria-label="東石地區聚落與地方關係人的相對位置示意圖">
            <div className="map-sea" aria-hidden="true"><span>臺灣海峽</span></div>
            <div className="map-river river-north" aria-hidden="true"><span>北港溪</span></div>
            <div className="map-river river-puzi" aria-hidden="true"><span>朴子溪</span></div>
            <div className="map-road road-168" aria-hidden="true"><span>168</span></div>
            <div className="map-road road-17" aria-hidden="true"><span>台17</span></div>
            <span className="map-place-label label-dongshi">東石鄉</span>
            <span className="map-place-label label-puzi">往朴子</span>
            <span className="map-landmark label-gangkou">港口宮周邊</span>
            <span className="map-landmark label-harbor">東石漁港</span>
            <div className="map-topic topic-gonggen"><span>本期主題</span><strong>摃梗 × 鹽地雜糧</strong><small>口述・復刻・食農</small></div>
            <div className="map-relation relation-wenzai" aria-hidden="true" />
            <div className="map-relation relation-donglun" aria-hidden="true" />
            <div className="map-relation relation-xiaxi" aria-hidden="true" />
            {mapClusters.map((cluster) => (
              <section className={`map-cluster cluster-${cluster.key}`} key={cluster.key} aria-label={`${cluster.place}人物`}>
                <header><strong>{cluster.place}</strong><span>{cluster.note}</span></header>
                <div className="map-people-stack">
                  {cluster.people.map((person) => <PersonMarker key={person.name} person={person} />)}
                </div>
              </section>
            ))}
          </div>
          <div className="people-map-notes">
            <p><strong>為什麼納入柳婉玲？</strong>她雖不在塭仔核心區，仍具刺竹帶路、田調、食農與地方引介能力，是跨聚落協作的重要在地協同者。</p>
            <p><strong>姓名更正：</strong>2026年8月12日遇見的柳姓長輩確認為柳水鴨；現階段保留為摃梗記憶線索，正式訪談與公開範圍仍待確認。</p>
          </div>
        </div>
      </section>
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
