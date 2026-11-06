/*
 * 新手修改指南：所有每天的文字與景點資料都在這個 itineraryData 裡。
 * 1. 修改文字：直接改 title（標題）、desc（簡介）、history（歷史）、culture（人文）。
 * 2. 修改地圖：在該景點加入 customMapUrl: "https://你的地圖網址"。
 *    留空或刪除 customMapUrl，程式會依 title 自動搜尋 Google 地圖。
 * 3. 加外部網站：加入 officialUrl: "https://官方網站網址"，並可改 officialLabel 顯示名稱。
 *    不想顯示連結時，刪除 officialUrl 或留空字串即可。
 *    欄位寫法範例：customMapUrl: "https://maps.google.com/?q=清水寺",
 *                  officialUrl: "https://www.example.com/", officialLabel: "景點官方網站",
 * 4. 新增景點：複製一個 { ... } 景點物件，改成新的唯一 id、time、type、title 等欄位，
 *    再放進對應日期 items: [ ... ] 裡。逗號要保留，最後一筆後面不加逗號。
 *    id 必須和其他項目不同，避免打卡狀態互相覆蓋；type 可用 sight（景點）、food（美食）、transport（移動）、house（看房）。
 */
const itineraryData = {
    day1: {
        title: "1/4 (一) 搭新幹線or京都線 ➡️ 伏見稻荷（商量一下） ➡️ 京都祇園",
        subtitle: "鳥居神域與古都風情",
        transport: "新幹線抵達新大阪站 ➔ 放行李 ➔ JR奈良線 / 京阪電車",
        food: "祇園「名代豆福」日式烏龍麵、河原町經典抹茶芭菲",
        items: [
            {
                id: "d1_1",
                time: "09:00 - 11:30",
                type: "transport",
                title: "新幹線移動與寄放行李",
                desc: "搭乘新幹線抵達新大阪站，直接轉乘前往京都車站或住宿點寄放大件行李。",
                history: "新大阪站於 1964 年隨東海道新幹線開通而啟用，是大阪接入日本高速鐵路網的重要門戶。",
                culture: "車站周邊是現代通勤與新幹線旅客交會的生活場景；寄放大件行李後再輕裝轉乘，能更自在地走訪京都。"
            },
            {
                id: "d1_2",
                time: "13:00 - 15:30",
                type: "sight",
                title: "伏見稻荷大社（千本鳥居）",
                desc: "走入漫延整座山頭、震撼無比的朱紅色千本鳥居森林。",
                history: "神社沿革記載，稻荷大神於西元 711 年鎮座於稻荷山；伏見稻荷大社是日本各地稻荷神社的重要總本社。",
                culture: "稻荷信仰與五穀豐收、商業繁盛及家庭安泰相關。沿山參道的鳥居多由個人或企業奉納，狐狸則被視為神使。",
                officialUrl: "https://inari.jp/en/",
                officialLabel: "伏見稻荷大社官方網站"
            },
            {
                id: "d1_3",
                time: "16:00 - 18:30",
                type: "sight",
                title: "祇園・花見小路・鴨川散步",
                desc: "漫步在充滿江戶古風的木造老街與鴨川河畔，細看京都傳統街區的日常風景。",
                history: "祇園在八坂神社門前逐漸發展，茶屋與表演藝術文化在此累積；花見小路保留町家街景，鴨川則長年伴隨京都城市生活。",
                culture: "祇園是藝妓（京都稱「藝妓」）與舞妓傳統藝能的重要街區。請尊重居民與工作者，不闖入私人巷弄、不擅自拍攝藝妓；鴨川河畔則是當地人散步休憩的公共空間。",
                officialUrl: "https://kyoto.travel/en/areas/",
                officialLabel: "京都市官方旅遊指南"
            }
        ]
    },
    day2: {
        title: "1/5 (二) 世界遺產大點 ➡️ 復古清水寺一日遊",
        subtitle: "金碧輝華舍利殿與千年清水舞台",
        transport: "京都市營巴士一日券 / 地鐵",
        food: "清水寺周邊「藤菜美」醬油糰子、錦市場居酒屋",
        items: [
            {
                id: "d2_1",
                time: "09:00 - 11:30",
                type: "sight",
                title: "金閣寺（鹿苑寺）",
                desc: "早上陽光灑落時，欣賞倒映在鏡湖池上、閃閃發光的舍利殿。",
                history: "金閣寺原為室町幕府將軍足利義滿於 14 世紀末營建的北山殿；義滿逝世後改為禪寺鹿苑寺，現存金閣於 1955 年重建。",
                culture: "鏡湖池與金閣、庭園共同構成借景觀賞的禪寺景致。寺院是相國寺派的禪宗寺院，參觀時可留意庭園如何安排水面、樹石與建築的視線。",
                officialUrl: "https://www.shokoku-ji.jp/kinkakuji/about/",
                officialLabel: "金閣寺官方介紹"
            },
            {
                id: "d2_2",
                time: "13:00 - 17:00",
                type: "sight",
                title: "清水寺 ➡️ 二三年坂 ➡️ 八坂神社",
                desc: "站在清水寺本堂的木造舞台俯瞰京都市景，隨後沿石板坡道走訪東山街區。",
                history: "清水寺創建於奈良時代末期，長年是觀音信仰的靈場；二年坂、三年坂是通往寺院的歷史坡道，八坂神社則是祇園信仰與祭禮中心。",
                culture: "清水寺本堂舞台展現傳統木構工藝。東山坡道兩側仍有町家、茶屋與傳統工藝店；八坂神社主辦的祇園祭是京都代表性祭典之一。街道也是居民生活區，請放慢腳步、保持安靜。",
                officialUrl: "https://www.kiyomizudera.or.jp/en/learn/",
                officialLabel: "清水寺官方歷史介紹"
            }
        ]
    },
    day3: {
        title: "1/6 (三) 京都近郊絕景 ➡️ 移動回大阪",
        subtitle: "仙境竹林與渡月橋畔微醺",
        transport: "JR / 阪急電鐵（嵐山站至梅田/心齋橋約 50 分鐘）",
        food: "嵐山「廣川鰻魚飯」、渡月橋 Blue Bottle 咖啡",
        items: [
            {
                id: "d3_1",
                time: "09:30 - 13:00",
                type: "sight",
                title: "嵐山半日遊（竹林小徑、渡月橋）",
                desc: "漫步在竹林小徑，從渡月橋欣賞山色與桂川水景。",
                history: "嵐山自平安時代以來便是京都人親近山水的遊覽地；附近的天龍寺由足利尊氏於 14 世紀創建，為京都五山禪寺之一。",
                culture: "竹林與渡月橋是嵐山的代表景觀。這裡同時是居民與寺院所在的生活區，請走在步道上、不折取竹枝，並留意自行車及人力車通行。",
                officialUrl: "https://kyoto.travel/en/areas/",
                officialLabel: "京都市官方旅遊指南"
            }
        ]
    },
    day4: {
        title: "1/7 (四) 奈良找神鹿大佛 ➡️ 心齋橋夜景",
        subtitle: "遇見神鹿與大阪不夜城",
        transport: "近鐵電車（大阪難波 ↔ 近鐵奈良）",
        food: "奈良「志津香釜飯」、道頓堀「美津の大阪燒」",
        items: [
            {
                id: "d4_1",
                time: "10:00 - 14:00",
                type: "sight",
                title: "奈良公園 ➡️ 東大寺 ➡️ 春日大社",
                desc: "漫步奈良公園、參拜東大寺大佛殿與春日大社，近距離感受古都信仰。",
                history: "奈良在 8 世紀曾是日本首都。東大寺於奈良時代建成，與大佛信仰及國家祈願相連；春日大社則是奈良的重要古社。",
                culture: "奈良公園的鹿被視為春日大社神明的使者，至今仍是野生動物。餵鹿請使用鹿仙貝、不要逗弄或追趕；收起食物和紙張，避免鹿誤食。",
                officialUrl: "https://www.pref.nara.lg.jp/site/park/1000.html",
                officialLabel: "奈良公園官方介紹"
            }
        ]
    },
    day5: {
        title: "1/8 (三) 🏠 核心任務：大阪看房日 ➡️ 難波夜景",
        subtitle: "實地考察與置產資產評估",
        transport: "大阪 Metro 地鐵一日券",
        food: "美津の大阪燒、道頓堀章魚燒",
        items: [
            {
                id: "d5_1",
                time: "09:30 - 10:30",
                type: "transport",
                title: "從飯店前往難波仲介公司",
                desc: "搭乘大阪 Metro 御堂筋線前往難波站 14 號出口會合。",
                history: "難波是大阪南區（Minami）的核心交通與商業區，從古代的城市門戶逐漸發展為鐵路、商業與娛樂匯集之地。",
                culture: "車站周邊融合百貨、商店街、飲食與住宅。尖峰時段人潮密集，集合時先約定出口與地標會更方便。",
                officialUrl: "https://subway.osakametro.co.jp/en/",
                officialLabel: "大阪 Metro 官方網站"
            },
            {
                id: "d5_2",
                time: "10:30 - 12:30",
                type: "house",
                title: "實地看房：難波高層公寓物件 A",
                desc: "評估採光、隔音、修繕積立金，測試步行至地鐵站時間。",
                history: "難波周邊是持續更新的都會商業區，車站商圈與住宅街區可能只隔數個街口；實地步行能更了解物件所在的街道環境。",
                culture: "除了室內條件，也觀察垃圾分類與收集方式、夜間噪音、鄰里公共空間及大樓管理規約。這些日常細節有助理解日本公寓的居住文化。",
                checkList: [
                    "步行至最近地鐵站的時間與路線實測",
                    "採光、通風與隔音測試"
                ]
            }
        ]
    },
    day6: {
        title: "1/9 (四) 大阪歷史地標 ➡️ 昭和懷舊與現代高空絕景",
        subtitle: "JR 環狀線順遊不走回頭路",
        transport: "JR 環狀線 + 大阪 Metro",
        food: "新世界元祖串炸、近鐵百貨「東洋亭」百年漢堡排",
        items: [
            {
                id: "d6_1",
                time: "10:00 - 12:30",
                type: "sight",
                title: "大阪城天守閣",
                desc: "欣賞護城河與巨石城牆，並在天守閣博物館了解大阪城的歷史。",
                history: "豐臣秀吉於 1583 年開始築城；城池歷經戰亂與改建，現今天守閣於 1931 年重建，內部為介紹大阪城歷史的博物館。",
                culture: "大阪城不只有天守閣，也包含城門、石垣與護城河等歷史景觀。從石垣上刻印的家紋與城郭結構，可以觀察不同時期的築城技術。",
                officialUrl: "https://www.osakacastle.net/",
                officialLabel: "大阪城天守閣官方網站"
            }
        ]
    },
    day7: {
        title: "1/10 (五) 臨空城 Outlet 瘋狂大血拼 ➡️ 關西機場",
        subtitle: "滿載而歸・滿意返程",
        transport: "JR 關空快速（難波/天王寺 直達 臨空城/關西機場）",
        food: "臨空城 Seacle 日式定食",
        items: [
            {
                id: "d7_1",
                time: "10:30 - 15:00",
                type: "sight",
                title: "臨空城 Outlet 最終大出清",
                desc: "在臨空城 Outlet 把握回程前的購物時間，並預留前往關西機場的交通時間。",
                history: "臨空城位於大阪灣填海區，隨關西國際機場周邊開發而形成，是連接機場、購物設施與海岸景觀的現代門戶型城鎮。",
                culture: "這裡呈現關西的現代消費與機場旅運生活。購物後可先確認行李寄放、退稅及列車班次，讓返程安排更從容。",
                officialUrl: "https://www.rinku-town.com/",
                officialLabel: "臨空城官方資訊"
            }
        ]
    }
};

let currentDay = 'day1';
let completedItems = JSON.parse(localStorage.getItem('kyoto_osaka_progress') || '{}');

window.onload = function() {
    switchTab('day1');
    updateProgress();
};

// 切換天數分頁
function switchTab(dayKey) {
    currentDay = dayKey;
    document.querySelectorAll('.day-tab').forEach(tab => {
        if (tab.getAttribute('data-day') === dayKey) {
            tab.classList.add('active-tab');
            tab.setAttribute('aria-pressed', 'true');
            tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            tab.classList.remove('active-tab');
            tab.setAttribute('aria-pressed', 'false');
        }
    });
    renderDayContent(dayKey);
}

// 渲染當天內容卡片 (自動生成 Google Maps 導航連結)
function renderDayContent(dayKey) {
    const data = itineraryData[dayKey];
    const container = document.getElementById('itinerary-content');
    if (!data) return;

    const dayNumber = dayKey.replace('day', '').padStart(2, '0');
    let html = `
        <section class="day-overview">
            <div class="day-heading">
                <div class="day-heading-copy">
                    <span class="day-kicker"><span>DAY ${dayNumber}</span> <i></i> 今日行旅</span>
                    <h2>${data.title}</h2>
                    <p>${data.subtitle}</p>
                </div>
                <div class="day-stamp" aria-hidden="true">${dayNumber}<span>旅</span></div>
            </div>
            <div class="day-essentials">
                <div class="essential-card transport-card">
                    <span class="essential-icon"><i class="fa-solid fa-train-subway"></i></span>
                    <div><span class="essential-label">MOVE · 交通</span><p>${data.transport}</p></div>
                </div>
                <div class="essential-card food-card">
                    <span class="essential-icon"><i class="fa-solid fa-bowl-food"></i></span>
                    <div><span class="essential-label">TASTE · 美食</span><p>${data.food}</p></div>
                </div>
            </div>
        </section>
        <section class="schedule-section" aria-label="當日行程">
            <div class="section-heading"><span>ITINERARY</span><h3>沿途行程</h3><span class="section-rule"></span></div>
            <div class="timeline">
    `;

    data.items.forEach((item) => {
        const isChecked = completedItems[item.id] || false;
        // 地圖連結：每筆行程可在資料裡設定 customMapUrl；沒設定時自動用景點標題搜尋 Google 地圖。
        const mapUrl = item.customMapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title)}`;
        const typeLabels = { sight: '景點', food: '美食', transport: '移動', house: '看房任務' };

        html += `
            <article class="timeline-item ${isChecked ? 'is-complete' : ''}">
                <div class="timeline-rail"><span class="timeline-dot"></span><input type="checkbox" id="${item.id}" ${isChecked ? 'checked' : ''} onchange="toggleCheck('${item.id}')" aria-label="完成：${item.title}" class="itinerary-check"></div>
                <div class="timeline-card">
                    <div class="timeline-meta"><span class="time-label"><i class="fa-regular fa-clock"></i> ${item.time}</span><span class="type-label type-${item.type}">${typeLabels[item.type] || '行程'}</span>
                        <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="map-link" aria-label="在 Google 地圖中查看 ${item.title}"><i class="fa-solid fa-location-arrow"></i><span>地圖導航</span></a>
                    </div>
                    <h4>${item.title}</h4>
                    <p class="timeline-description">${item.desc}</p>
        `;

        // 只有資料有填歷史、人文或官網時，才顯示這個可展開的資訊區。
        if (item.history || item.culture || item.officialUrl) {
            html += `<details class="culture-note">
                <summary><i class="fa-solid fa-book-open"></i> 歷史與人文</summary>
                <div class="culture-content">`;
            if (item.history) {
                html += `<p><strong>歷史脈絡</strong>${item.history}</p>`;
            }
            if (item.culture) {
                html += `<p><strong>人文特色</strong>${item.culture}</p>`;
            }
            // officialUrl 請填入完整 https:// 網址；officialLabel 可自訂畫面上的連結名稱。
            if (item.officialUrl) {
                html += `<a class="official-link" href="${item.officialUrl}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${item.officialLabel || '官方網站／延伸閱讀'}</a>`;
            }
            html += `</div></details>`;
        }

        if (item.checkList && item.checkList.length > 0) {
            html += `<div class="checklist-panel"><span class="checklist-title"><i class="fa-solid fa-clipboard-check"></i> 看房檢查清單</span>`;
            item.checkList.forEach((subTask, subIndex) => {
                const subId = `${item.id}_sub_${subIndex}`;
                const isSubChecked = completedItems[subId] || false;
                html += `
                    <label class="checklist-item ${isSubChecked ? 'is-checked' : ''}">
                        <input type="checkbox" id="${subId}" ${isSubChecked ? 'checked' : ''} onchange="toggleCheck('${subId}')">
                        <span>${subTask}</span>
                    </label>
                `;
            });
            html += `</div>`;
        }

        html += `</div></article>`;
    });

    html += `</div></section>`;
    container.innerHTML = html;
    updateProgress();
}

// 打卡勾選與進度更新
function toggleCheck(id) {
    completedItems[id] = !completedItems[id];
    localStorage.setItem('kyoto_osaka_progress', JSON.stringify(completedItems));
    renderDayContent(currentDay);
    showToast("進度已自動儲存！");
}

function toggleAllTips() {
    document.getElementById('tips-modal').classList.toggle('hidden');
}

function updateProgress() {
    let total = 0, checked = 0;
    Object.keys(itineraryData).forEach(day => {
        itineraryData[day].items.forEach(item => {
            total++;
            if (completedItems[item.id]) checked++;
            if (item.checkList) {
                item.checkList.forEach((_, idx) => {
                    total++;
                    if (completedItems[`${item.id}_sub_${idx}`]) checked++;
                });
            }
        });
    });
    const percent = total > 0 ? Math.round((checked / total) * 100) : 0;
    document.getElementById('progress-bar').style.width = `${percent}%`;
    document.getElementById('progress-text').innerText = `${percent}%`;
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').innerText = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 2000);
}