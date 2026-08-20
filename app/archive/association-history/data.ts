export type HistorySourceItem = {
  id: number;
  image: string;
  originalFile: string;
  title: string;
  description: string;
  category: string;
  status: string;
};

export const historySourceGroups = [
  {
    title: "農村技藝與地方記憶",
    description: "從早期摃梗公共活動與農事體驗，追索地方技藝曾如何被示範、教學與重新記起。",
  },
  {
    title: "環境守護與里海行動",
    description: "水環境巡守、環境教育、魚塭與水域踏查，是協會長期工作的重要底層。",
  },
  {
    title: "食農、食魚與地方產品",
    description: "從產地、料理到市集，呈現地方產業如何透過體驗、產品與餐桌被理解。",
  },
  {
    title: "社區培力與共同學習",
    description: "居民會議、課程、成果與交流，記錄社區如何累積一起做事的能力。",
  },
  {
    title: "青年、學校與跨域交流",
    description: "兒少、青年、學校、外部團隊與不同文化背景的參與，讓地方知識持續流動。",
  },
  {
    title: "來源截圖與待核資料",
    description: "保留社群截圖、海報等二手來源；正式公開前仍要回到原發布者、日期與授權核對。",
  },
] as const;

export const historySourceItems: HistorySourceItem[] = [
  { id: 1, image: "/association-history/source-review/source-01.jpg", originalFile: "messageImage_1787140627002.jpg", title: "民國86年前後的摃梗公共活動", description: "可辨識多人在公共活動中操作摃梗；完整活動名稱、地點與人物仍待回查。", category: "農村技藝與地方記憶", status: "年份線索已知・細節待核" },
  { id: 5, image: "/association-history/source-review/source-05.jpg", originalFile: "15182756-848E-4666-9C27-9B56F1574976.png", title: "農事／摃梗體驗現場", description: "呈現居民與參與者在戶外進行農事工具體驗；需再確認活動內容與作物。", category: "農村技藝與地方記憶", status: "活動名稱待核" },

  { id: 3, image: "/association-history/source-review/source-03.jpg", originalFile: "0B7AE68A-A1B9-4297-894B-14B724A1AA78.jpg", title: "環境教育與巡守獲獎紀錄", description: "頒獎現場個人紀錄；獎項屆次可由背板辨識，人物身分與使用範圍仍待確認。", category: "環境守護與里海行動", status: "獎項可辨識・肖像待確認" },
  { id: 4, image: "/association-history/source-review/source-04.jpg", originalFile: "0E213077-C4D0-4A5C-8EB0-A28FFDAC26D7.jpg", title: "水環境巡守團隊合影", description: "第6屆國家環境教育獎暨106年度優良水環境巡守隊活動現場。", category: "環境守護與里海行動", status: "活動資訊可辨識" },
  { id: 6, image: "/association-history/source-review/source-06.jpg", originalFile: "18A57C42-A1B5-4C81-AD47-B1CDAD2A664B.jpg", title: "環境教育獎活動舞台紀錄", description: "活動現場人物互動；可支援協會長期環境行動的視覺脈絡。", category: "環境守護與里海行動", status: "人物與年份待逐項核對" },
  { id: 15, image: "/association-history/source-review/source-15.jpg", originalFile: "454630A7-6E24-4DBB-95A9-2F2ED76075EA.jpg", title: "環境守護夥伴共同見證", description: "團隊於獎項活動合影，呈現地方夥伴長期參與。", category: "環境守護與里海行動", status: "肖像與名單待確認" },
  { id: 17, image: "/association-history/source-review/source-17.jpg", originalFile: "4A59AB2A-2AE3-403F-B573-9590C9E406E2.jpg", title: "水域與沿海行動踏查", description: "水域現場的交通、導覽或踏查紀錄；活動名稱與路線待補。", category: "環境守護與里海行動", status: "地點與活動待核" },
  { id: 23, image: "/association-history/source-review/source-23.jpg", originalFile: "B2DFFCBA-3DB9-444A-8974-5E02FD6970FF.jpg", title: "沿海水域解說現場", description: "協會夥伴於水域邊進行說明與觀察，可作為里海行動的過程影像。", category: "環境守護與里海行動", status: "活動名稱待核" },

  { id: 8, image: "/association-history/source-review/source-08.jpg", originalFile: "19950232-044E-43A0-B794-FC1FDF423B40.jpg", title: "地方產品與市場交流", description: "居民在活動現場展示刊物或產品，呈現地方故事如何走入市場與公共場合。", category: "食農、食魚與地方產品", status: "活動與人物待核" },
  { id: 12, image: "/association-history/source-review/source-12.jpg", originalFile: "33DF2DCE-7B9A-4177-885F-81F3795DF24B.jpg", title: "地方產品市集展售", description: "攤位與團隊合影，呈現協會串連地方產品與外部活動的實際場景。", category: "食農、食魚與地方產品", status: "活動名稱待補" },
  { id: 13, image: "/association-history/source-review/source-13.jpg", originalFile: "342AF74B-1331-4002-A48B-6CD5B208CDC4.jpg", title: "地方產品成果展示", description: "以產品與包裝呈現地方產業合作成果；品牌、製作者與年份需逐項補登。", category: "食農、食魚與地方產品", status: "品項與權利待核" },
  { id: 16, image: "/association-history/source-review/source-16.jpg", originalFile: "45DFF72B-66F9-4D88-9014-07BD618BA704.jpg", title: "食魚教育與地方料理", description: "魚塭邊的料理與解說活動，連結養殖現場、飲食與教育。", category: "食農、食魚與地方產品", status: "第一版說明已整理" },
  { id: 18, image: "/association-history/source-review/source-18.jpg", originalFile: "5261D01B-35BC-40B1-A588-1657D115E9D7.jpg", title: "地方餐桌實作", description: "參與者共同準備料理，保留動作、器具與現場交流。", category: "食農、食魚與地方產品", status: "活動與人物待核" },
  { id: 22, image: "/association-history/source-review/source-22.jpg", originalFile: "AFD98491-0958-4DD0-BE2F-2511541E8B1F.jpg", title: "農漁產品與計畫說明", description: "產品、簡報與團隊共同出現在現場，適合補充計畫如何對外溝通。", category: "食農、食魚與地方產品", status: "活動名稱待核" },
  { id: 25, image: "/association-history/source-review/source-25.jpg", originalFile: "B9E1EF6B-79AF-41A0-9E85-43334E883679.jpg", title: "農漁體驗示範", description: "以器具、食材與現場操作進行體驗或解說；內容需回到簡報與當事人核對。", category: "食農、食魚與地方產品", status: "內容待核" },
  { id: 26, image: "/association-history/source-review/source-26.jpg", originalFile: "C7F62983-8A04-4198-A18D-DFE7E488843B.jpg", title: "白水夢好食會", description: "可由現場背板辨識活動名稱，呈現地方飲食與夥伴共作。", category: "食農、食魚與地方產品", status: "活動名稱可辨識" },
  { id: 31, image: "/association-history/source-review/source-31.jpg", originalFile: "FF313F5C-3C0A-4F9C-99F8-7DD03069F695.jpg", title: "地方產品體驗與交流", description: "參與者在場域中操作、品嚐或理解產品；人物與活動仍待補登。", category: "食農、食魚與地方產品", status: "人物與活動待核" },

  { id: 2, image: "/association-history/source-review/source-02.jpg", originalFile: "038B6298-64D7-4258-A6A4-F44782DFC701.jpg", title: "居民共同參與的社區活動", description: "多人在公共空間共同演出或展開活動，呈現居民參與的群體感。", category: "社區培力與共同學習", status: "年份與活動待核" },
  { id: 11, image: "/association-history/source-review/source-11.jpg", originalFile: "335BA4F8-F52B-401B-973B-BDDEBE489678.jpg", title: "社區成果與獎項紀錄", description: "團隊與獎牌／題字合影；獎項名稱、年份及人物名單需再確認。", category: "社區培力與共同學習", status: "文字可辨識・細節待核" },
  { id: 19, image: "/association-history/source-review/source-19.jpg", originalFile: "754BFD53-4E74-4FE9-AB86-2FCAC5D2F3D4.jpg", title: "學校與地方教育合作", description: "大量學員於校園或教室合影，顯示地方知識走入教育現場。", category: "社區培力與共同學習", status: "學校與活動待核" },
  { id: 21, image: "/association-history/source-review/source-21.jpg", originalFile: "7FE083BF-65FF-4557-BCE9-B1CC6B931D31.jpg", title: "地方議題討論與交流", description: "在地方場域進行簡報、對話或共學，保留協作過程。", category: "社區培力與共同學習", status: "主題與參與者待核" },
  { id: 24, image: "/association-history/source-review/source-24.jpg", originalFile: "B43B3819-0907-4EFB-B400-C8F8A7C729EC.jpg", title: "社區工作坊成果合影", description: "居民與外部夥伴完成活動後合影，適合補入培力與交流的歷程。", category: "社區培力與共同學習", status: "活動名稱待核" },
  { id: 27, image: "/association-history/source-review/source-27.jpg", originalFile: "D363184D-7AC6-4BB6-B346-3CE91BAEDD11.jpg", title: "地方經驗分享紀錄", description: "講者以投影畫面分享社區經驗，呈現地方知識的整理與傳遞。", category: "社區培力與共同學習", status: "講題與場合待核" },
  { id: 29, image: "/association-history/source-review/source-29.jpg", originalFile: "DF4C9327-D04F-4049-925E-621C61DB248A.jpg", title: "跨社群共學與交流", description: "不同年齡與背景的參與者共同聚會，呈現協會長期的關係累積。", category: "社區培力與共同學習", status: "活動與名單待核" },

  { id: 7, image: "/association-history/source-review/source-07.jpg", originalFile: "18C81DD3-F635-4C72-9BFD-1E9A07BAE44D.jpg", title: "外部夥伴到訪與交流", description: "團隊在地方場域合影，顯示協會與外部人員的合作與接待。", category: "青年、學校與跨域交流", status: "團隊與年份待核" },
  { id: 9, image: "/association-history/source-review/source-09.jpg", originalFile: "1BD9C74F-3590-44B6-9F39-3500B6BEBEC1.jpg", title: "地方場域的跨域合作", description: "地方夥伴與外部團隊共同展示合作成果；計畫名稱待回查。", category: "青年、學校與跨域交流", status: "計畫名稱待核" },
  { id: 10, image: "/association-history/source-review/source-10.jpg", originalFile: "2ABFAE59-3120-420C-B149-596EBE1955F6.jpg", title: "國際青年交流", description: "多國青年與地方夥伴合影，呈現跨文化交流曾進入社區場域。", category: "青年、學校與跨域交流", status: "團隊、國別與年份待核" },
  { id: 14, image: "/association-history/source-review/source-14.jpg", originalFile: "382BD658-57E3-43F7-B5E0-3AC0CA5A38B1.jpg", title: "青年與田野學習", description: "參與者在田間或戶外進行共同活動，連結土地、教育與團隊經驗。", category: "青年、學校與跨域交流", status: "活動內容待核" },
  { id: 28, image: "/association-history/source-review/source-28.jpg", originalFile: "D5672510-6805-4317-B90F-D790832973AB.jpg", title: "兒少／青年營隊與地方行動", description: "大型團隊合影與活動布條，保留地方教育與青年參與的證據。", category: "青年、學校與跨域交流", status: "布條文字與年份待核" },
  { id: 32, image: "/association-history/source-review/source-32.jpg", originalFile: "FFA323E9-37CD-421F-A06B-0ACA84723440.jpg", title: "兒少環境與地方教育", description: "學童、教師與地方夥伴共同參與活動，呈現從小開始的地方學習。", category: "青年、學校與跨域交流", status: "學校、課程與肖像待核" },

  { id: 20, image: "/association-history/source-review/source-20.jpg", originalFile: "7624E293-E100-4F31-8160-C4FD5411F58F.jpg", title: "社群發布／獎項截圖", description: "手機畫面截圖可作查找原發布內容的線索，不直接視為正式活動紀錄。", category: "來源截圖與待核資料", status: "需找到原始貼文" },
  { id: 30, image: "/association-history/source-review/source-30.jpg", originalFile: "E1821EF8-E9D6-4ADB-AD43-B1AACC1EDBFE.png", title: "活動海報或行程表", description: "保留活動名稱、時間與流程線索；需取得清晰原檔並確認發布與使用權。", category: "來源截圖與待核資料", status: "文字與來源待核" },
];
