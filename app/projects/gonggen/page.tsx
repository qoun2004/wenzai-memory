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
          <div className="fact"><strong>1＋1</strong><span>正式訪談＋技藝線索</span></div>
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
      <section className="section site-width" id="black-bean-film-material">
        <div className="section-heading archive-heading">
          <div><p className="eyebrow">紀錄片前期影像｜2026.07.21</p><h2>黑豆食農不是旁支，而是本案連向今天生活的第二條故事線</h2></div>
          <p>第一批臨場拍攝雖未依正式腳本準備，仍記下社區客廳、豆腐第四代長輩、陳鈺益、黑豆豆漿炊煮與居民DIY，可在紀錄片中承接豆腐庄歷史與當代體驗。</p>
        </div>
        <div className="field-gallery">
          <figure className="field-photo">
            <img src="/field-notes/tofu-workshop-20260721/stirring.jpg" alt="黑豆豆漿製作過程中的持續攪拌" />
            <figcaption>製程動作與鍋內聲音能為紀錄片提供具體的勞動節奏。</figcaption>
          </figure>
          <article className="field-insight"><p className="archive-type">成片使用方向</p><h3>從老產業記憶，切到今天仍能親手參與的技術</h3><p>可搭配豆腐庄耆老訪談、老照片與黑豆種植影像，再接到炊煮、模具、居民操作和成品。後續正式補拍材料比例、關鍵步驟與完整示範，這批則保留第一次進入現場的真實氣氛。</p><Link className="arrow-link" href="/education#tofu-workshop-20260721">查看完整活動影像與食農用途 <span aria-hidden="true">↗</span></Link></article>
        </div>
      </section>
      <section className="section site-width" id="gonggen-history">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">歷史影像新入庫</p>
            <h2>摃梗保存並不是2026年才開始</h2>
          </div>
          <p>
            淑芳姐提供的早期照片已出現居民與外來參與者實際操作摃梗。
            它補上協會及社區過去曾推廣這件農具的視覺證據，也讓本案的「復刻」有了可以回看的前史。
          </p>
        </div>
        <div className="field-gallery">
          <figure className="field-photo">
            <img src="/history/gonggen-early.jpg" alt="早期參與者在戶外操作摃梗農具" />
            <figcaption>早期摃梗體驗影像；可看見長竹構件與操作姿勢，仍需由耆老確認工具部位、用法及示範是否正確。</figcaption>
          </figure>
          <article className="field-insight">
            <p className="archive-type">這批資料帶來的意義</p>
            <h3>從「曾經辦過」走向可追溯的地方歷史</h3>
            <p>
              照片可以與2026年的耆老訪談、梗達人製作及工作坊並置，
              比較不同年代的工具形制、操作方式與參與者。下一步要補的是活動年份、地點、人物、拍攝者與當時使用的作物。
            </p>
          </article>
        </div>
        <p className="material-credit">
          照片素材提供：吳淑芳｜拍攝年份與活動名稱待確認。現階段以「早期摃梗推廣／體驗影像」典藏，不推定確切年代。
        </p>
      </section>
      <section className="section section-tint" id="cai-tong-bin-20260809">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div><p className="eyebrow">梗達人候選／製作線索｜2026.08.09</p><h2>蔡通彬談的不只是「以前怎麼用」，而是材料去哪裡找、怎麼判斷能不能做</h2></div>
            <p>這段口述對紀錄片最重要的價值，是它指向一個可以立刻行動的下一步：跟著蔡通彬找材料、帶工具，並完整記錄一件摃梗從判斷到製作的過程。</p>
          </div>
          <div className="field-gallery">
            <figure className="field-photo"><img src="/field-notes/interview-20260809-cai/gesture.jpg" alt="蔡通彬以手勢說明摃梗材料與製作方式" /><figcaption>現場手勢是技藝記憶的一部分；下次應補拍手部特寫、工具、材料細節與實際動作。</figcaption></figure>
            <article className="field-insight"><p className="archive-type">初步內容判讀</p><h3>彈性、鐵鎚、拉取與日曬裂損，是四個可追問的製作關鍵詞</h3><p>台語辨識初稿中，蔡通彬比較材料是否容易破裂、提到用鐵鎚敲與拉取，也說到材料曬太陽後裂開便不能使用。這些內容應透過實物與實作再確認，並整理成摃梗教案的選材與保存段落。</p></article>
          </div>
          <div className="usability-grid">
            <article><strong>紀錄片</strong><p>拍一條完整行動線：指認材料→採集→選別→處理→製作→試用，讓口述與動作互相驗證。</p></article>
            <article><strong>追訪線索</strong><p>影片還提及另一位可能知情的地方人物；姓名與身分未核對前，先作內部追訪索引。</p></article>
            <article><strong>黑豆支線</strong><p>後段有東崙黑豆種植、水分、種子腐敗與降雨的經驗，可補足鹽地雜糧的生產現場。</p></article>
          </div>
          <p className="material-credit">人物：蔡通彬（東崙農事小組長）｜「梗達人／摃梗製作者」角色待本人與吳淑芳確認｜主訪、拍攝與影像提供：吳淑芳｜影片長度約3分19秒。內容為AI辨識後的初步摘要，台語特殊詞、人名與技術細節需人工回聽及當事人確認。</p>
        </div>
      </section>
      <section className="section section-tint" id="interview-20260806">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div>
              <p className="eyebrow">第一位正式耆老訪談｜2026.08.06</p>
              <h2>從養牛、換工到摃梗，唐榮先生帶回一段農村勞動記憶</h2>
            </div>
            <p>淑芳姐主訪，攝影端同步照看單眼主畫面、DJI備援畫面、手機錄音與現場照片。訪談內容正依錄音、筆記與影像交叉整理。</p>
          </div>
          <div className="field-gallery interview-gallery">
            <figure className="field-photo field-photo-wide">
              <img src="/field-notes/interview-20260806-main.jpg" alt="唐榮先生在家中接受塭仔摃梗紀錄片訪談" />
              <figcaption>單眼主畫面記錄唐榮先生的表情與手勢；畫面將作為紀錄片第一部分「農村記憶與摃梗使用背景」的人物素材。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/field-notes/interview-20260806-wide.jpg" alt="唐榮先生、淑芳姐與在場長輩進行訪談的室內全景" />
              <figcaption>DJI備援全景保留訪談互動、現場長輩與居家空間，也能看見多機同步記錄的配置。</figcaption>
            </figure>
            <article className="field-insight">
              <p className="archive-type">目前整理出的四條內容線索</p>
              <h3>一位受訪者，串起工具、作物、勞動與地方變遷</h3>
              <p>現場筆記已記下買牛與農機、牛車耕作、摃梗脫粒、曬種與吹殼、換工與請工、婦女背著孩子工作，以及村落由農作走向溫室、造林與太陽能等線索。</p>
              <p>作物名稱、價格、年代、牛隻數量與地方用語仍需逐段回聽，不把初步筆記直接視為完成考證的史實。</p>
            </article>
          </div>
          <div className="usability-grid">
            <article><strong>影像成果</strong><p>單眼主訪談、DJI全景備援、手機短畫面與現場照片，可交叉支撐人物訪談及拍攝過程紀錄。</p></article>
            <article><strong>文字成果</strong><p>已建立人物生命史、摃梗使用、換工勞動及土地變化四類筆記，可納入三千字摃梗技藝總結報告。</p></article>
            <article><strong>下一步</strong><p>確認特殊台語詞、作物、年代與數字，追查收購商、朴子五金行及牛舍等人物與場域，補拍老照片、動作與環境。</p></article>
          </div>
          <p className="material-credit">
            訪談日期：2026.08.06｜受訪者：唐榮｜主訪：吳淑芳｜影像與錄音：黃建凱及現場團隊。書面訪談與肖像授權待補簽；現階段僅公開進度摘要與低解析畫面，原始錄音、完整回答及個人資料不直接公開。
          </p>
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
            活動日期：2026.07.22（以現場黑板記錄為準）｜照片與影片素材提供：吳淑芳。
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
