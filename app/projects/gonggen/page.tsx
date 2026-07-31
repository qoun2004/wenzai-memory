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
      <section className="section section-tint" id="field-notes">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div>
              <p className="eyebrow">最新田野紀錄</p>
              <h2>歌謠不是先寫好答案，而是在一次次回應裡慢慢找回來</h2>
            </div>
            <p>淑芳姐提供的工作坊素材包含19支短片與16張照片，記錄老師引導、長輩回唱、個別說唱、白板整理與全場互動。</p>
          </div>
          <div className="field-gallery workshop-gallery">
            <figure className="field-photo field-photo-wide">
              <img src="/field-notes/workshop-wide.jpg" alt="塭仔社區長輩在教室內參與歌謠工作坊，跟著台前帶領者做動作" />
              <figcaption>長輩共同參與與回應，是歌謠從個人記憶走回群體記憶的重要過程。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/field-notes/workshop-teaching.jpg" alt="黃哲永老師與淑芳姐面向長輩整理地方歌謠記憶" />
              <figcaption>老師、地方協力者與長輩在現場共同確認說法與記憶線索。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/field-notes/workshop-board.jpg" alt="歌謠工作坊黑板，上面記錄塭仔鹽地產業文化記憶、歌訣與無字曲等內容" />
              <figcaption>黑板留下「歌訣、無字曲、群體工作時的娛樂」等採集方向。</figcaption>
            </figure>
          </div>
          <p className="material-credit">
            照片與影片素材提供：吳淑芳。資料夾標示2026.07.27，現場黑板記錄7/22；正式活動日期待協會核對。
          </p>
        </div>
      </section>

      <section className="section site-width" id="interview-progress">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">訪談素材初步整理</p>
            <h2>這批可以用，但定位應是「前期田野與線索採集」</h2>
          </div>
          <p>共11支影片、約7分24秒及17張照片。畫面與地方資料線索很有價值，但短片較零碎，尚不足以單獨取代正式人物訪談與完整逐字稿。</p>
        </div>
        <div className="field-gallery interview-gallery">
          <figure className="field-photo field-photo-wide">
            <img src="/field-notes/interview-listening.jpg" alt="淑芳姐以手機靠近在地耆老，記錄訪談內容" />
            <figcaption>手機靠近受訪者收音，對台語口述採集很實用；後續仍需補姓名、身分、地點與授權紀錄。</figcaption>
          </figure>
          <article className="field-insight">
            <p className="archive-type">具體資料線索 01</p>
            <h3>《七星落地》與地方地名歌謠</h3>
            <p>現場出現一份題為「七星落地」的文字資料，串起半月山、中洲山、栗子崙、樹林頭、崁前崁後及掌潭山等地名與地形意象。</p>
            <p>這條線索適合放入紀錄片的「歌聲與土地」段落，也能延伸成網站地名註解；歌詞字詞、讀音、曲調、流傳者及年代仍需黃老師與耆老逐項確認。</p>
          </article>
          <figure className="field-photo">
            <img src="/field-notes/interview-seven-stars.jpg" alt="訪談現場桌上題為七星落地的地方歌謠文字資料" />
            <figcaption>《七星落地》文字資料。現階段作為田野線索展示，不視為已完成考證的正式歌詞。</figcaption>
          </figure>
          <figure className="field-photo">
            <img src="/field-notes/interview-object.jpg" alt="訪談者在桌邊展示並討論兩片傳統屋瓦" />
            <figcaption>訪談也帶出傳統屋瓦等地方物件；物件名稱、用途及其與摃梗故事的關係仍待確認。</figcaption>
          </figure>
        </div>
        <div className="usability-grid">
          <article><strong>可直接使用</strong><p>訪談現場、手機收音、耆老表情、黃老師筆記、歌謠文字與地方物件等過程畫面。</p></article>
          <article><strong>整理後使用</strong><p>完整語意的台語回答、地名歌謠內容與物件故事；需人工聽打、回訪確認與補充脈絡。</p></article>
          <article><strong>仍需補拍</strong><p>正式自我介紹、摃梗用途與操作、換工故事、年代定位，以及可剪入紀錄片的完整回答。</p></article>
        </div>
        <p className="material-credit">
          照片與影片素材提供：吳淑芳｜2026.07.30訪談素材。受訪者姓名、身分、逐字內容及公開範圍待同意書與本人確認；原始錄音錄影暫不直接公開。
        </p>
      </section>
    </>
  );
}
