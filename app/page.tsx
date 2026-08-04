import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLink, InfoCard, SourceNote, StatusBadge } from "./components";
import {
  archivePreview,
  associationSources,
  legacyMediaItems,
  themes,
} from "./data";
import YouTubePreview from "./archive/YouTubePreview";

export const metadata: Metadata = {
  title: "大東石地方行動與記憶平台",
  description:
    "以嘉義縣鄉村永續發展協會為主體，整理大東石地區的地方行動、食農教育、人物故事與文化記憶。",
};

const featuredVideos = [
  legacyMediaItems.find((item) => item.url.includes("3B82v8x39Oo")),
  legacyMediaItems.find((item) => item.url.includes("A_UAndmvRGo")),
  legacyMediaItems.find((item) => item.url.includes("8wW9UpQK-LQ")),
].filter((item): item is (typeof legacyMediaItems)[number] => Boolean(item));

export default function Home() {
  return (
    <>
      <section className="hero association-hero">
        <div className="hero-grid site-width">
          <div className="hero-copy">
            <p className="eyebrow light">社團法人嘉義縣鄉村永續發展協會</p>
            <h1>
              從一個聚落出發，
              <br />
              讓整個區域一起走得更遠。
            </h1>
            <p className="hero-lead">
              這是協會長期整理大東石地方行動的入口：串起居民、聚落、產業、食農、環境與生活記憶，也讓每一次計畫留下的成果繼續被地方使用。
            </p>
            <div className="hero-actions">
              <Link className="button button-accent" href="/about">
                認識協會
              </Link>
              <Link className="button button-ghost" href="/projects/gonggen">
                進入塭仔摃梗子計畫
              </Link>
            </div>
          </div>
          <div className="hero-object association-map" aria-label="協會、區域行動與子計畫的關係圖">
            <div className="map-ring ring-one" />
            <div className="map-ring ring-two" />
            <div className="association-node">
              <small>長期行動平台</small>
              <strong>鄉村永續</strong>
              <span>人・土地・產業・記憶</span>
            </div>
            <span className="place-dot dot-wenzai">塭仔</span>
            <span className="place-dot dot-zhouzi">洲仔</span>
            <span className="place-dot dot-lizilun">栗子崙</span>
          </div>
        </div>
      </section>

      <section className="section site-width intro-split">
        <div>
          <p className="eyebrow">網站定位</p>
          <h2>協會是大架構，單一補助案是其中一段正在進行的行動</h2>
        </div>
        <div className="intro-copy">
          <p>
            網站將保存協會十幾二十年來累積的地方成果，而不是隨著一次計畫結束就停止更新。塭仔「摃梗與鹽地雜糧記憶」是2026年的重點子計畫，從傳統農具、歌謠、黑豆與豆腐庄切入地方文化保存。
          </p>
          <SourceNote
            label={associationSources.registration.label}
            href={associationSources.registration.url}
            prefix="協會名稱來源"
          />
        </div>
      </section>

      <section className="section section-tint">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">計畫架構</p>
              <h2>從協會使命，到區域行動，再到主題子計畫</h2>
            </div>
            <p>後續新增的計畫、聚落與成果，都能放進同一個長期架構。</p>
          </div>
          <div className="program-structure">
            <article className="program-level umbrella">
              <p className="program-index">01｜主體</p>
              <h3>嘉義縣鄉村永續發展協會</h3>
              <p>以農村產業、地方文化、自然環境與生活支持為長期行動範圍。</p>
              <ArrowLink href="/about">協會沿革與定位</ArrowLink>
            </article>
            <div className="program-connector" aria-hidden="true">↓</div>
            <article className="program-level regional">
              <p className="program-index">02｜區域行動</p>
              <h3>大東石里海計畫</h3>
              <p>把海、田、聚落、產業與生活關係串起來，累積共好夥伴、地方產品、體驗與小旅行。</p>
              <ArrowLink href="/satoumi">查看里海計畫與夥伴</ArrowLink>
            </article>
            <div className="program-connector" aria-hidden="true">↓</div>
            <article className="program-level project">
              <p className="program-index">03｜2026子計畫</p>
              <h3>塭仔摃梗與鹽地雜糧記憶</h3>
              <p>訪談、歌謠、摃梗復刻、黑豆食農、紀錄片、網站與成果活動。</p>
              <ArrowLink href="/projects/gonggen">查看子計畫</ArrowLink>
            </article>
          </div>
          <SourceNote
            label={associationSources.regionalAction.label}
            href={associationSources.regionalAction.url}
            prefix="區域串連參考"
          />
        </div>
      </section>

      <section className="section site-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">大東石里海計畫</p>
            <h2>第一批共好夥伴，其他名單持續補登</h2>
          </div>
          <ArrowLink href="/satoumi">進入夥伴與地方服務板塊</ArrowLink>
        </div>
        <div className="card-grid">
          <InfoCard label="塭仔・東石" title="50分工作室" status="第一批資料已入庫">
            <p>魚塭養殖、一夜干、地方產品，以及小旅行與體驗的在地串聯。</p>
          </InfoCard>
          <InfoCard label="掌潭村白水湖" title="白水湖蚵學家・長花姐" status="公開資料已確認">
            <p>蚵田巡禮、牡蠣產業知識、串蚵與剖蚵等食漁體驗及在地產品。</p>
          </InfoCard>
          <InfoCard label="持續擴充" title="其他大東石共好夥伴" status="待補資料與確認">
            <p>預留產品、體驗、小旅行、餐飲、導覽與團體服務欄位，依來源與合作關係逐筆上架。</p>
          </InfoCard>
        </div>
      </section>

      <section className="section site-width">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">影像裡的地方行動</p>
            <h2>從既有影片，看見協會與居民長期累積的現場</h2>
          </div>
          <p>影片沿用原發布者的 YouTube 內容，可直接在本站播放；每支皆保留發布頻道與原始連結。</p>
        </div>
        <div className="featured-video-grid">
          {featuredVideos.map((item) => (
            <article className="featured-video" key={item.url}>
              <YouTubePreview url={item.url} title={item.title} />
              <p className="archive-type">{item.publisher}・{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <a className="source-link" href={item.url} target="_blank" rel="noreferrer">
                來源：{item.publisher} YouTube 原始影片 <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
        <ArrowLink href="/archive">瀏覽18支既有影音與公開資料</ArrowLink>
      </section>

      <section className="section section-tint">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">塭仔摃梗子計畫</p>
              <h2>三條正在交會的故事線</h2>
            </div>
            <p>素材會隨訪談、拍攝、來源核對與社區授權逐步補齊。</p>
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
            <h2>把地方記憶做成下一次還能繼續使用的教案與體驗。</h2>
          </div>
          <div>
            <p>摃梗操作、雜糧脫粒、黑豆豆腐DIY、聚落踏查與地方餐食，正在整理成可持續使用的模組。</p>
            <Link className="button button-accent" href="/education">查看教育與體驗</Link>
          </div>
        </div>
      </section>
    </>
  );
}
