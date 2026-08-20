let box = [];
let coins = 0;
let maxBox = 150;
let bannerImages = [];
let bannerType = "";
let bannerTitle = "";

/* =========================
   共通画像
========================= */

const highlightImage =
"https://files.catbox.moe/oh1ybq.jpeg";

const standardImage =
"https://files.catbox.moe/qcth78.jpeg";

/* =========================
   選手追加
========================= */

function addPlayer(name, rarity, image) {
  box.push({
    name: name,
    rarity: rarity,
    image: image
  });
}

/* =========================
   Highlight追加
========================= */

function addHighlights(count) {
  for (let i = 1; i <= count; i++) {
    addPlayer(
      "ハメス ロドリゲス" + i,
      "Highlight",
      highlightImage
    );
  }
}

/* =========================
   Standard追加
========================= */

function addStandards(count) {
  for (let i = 1; i <= count; i++) {
    addPlayer(
      "ハケウ ロンバルジ" + i,
      "Standard",
      standardImage
    );
  }
}

/* =========================
   BOX生成
========================= */

function createBox(type) {

  box = [];

  /* Epic150 */
  if (type === "epic150") {

    maxBox = 150;

       addPlayer(
        "ジェイ ジェイ オコチャ",
        "Epic",
        "https://files.catbox.moe/7eq6dv.gif");


        addPlayer(
        "ヌワンコ カヌ",
        "Epic",
        "https://files.catbox.moe/hn47hb.gif");


        addPlayer(
        "ティジャニ ババンギダ",
        "Epic",
        "https://files.catbox.moe/d8js6x.gif");

    bannerType = "Epic";

    bannerTitle = "Nigeria";

    bannerImages = [

      "https://files.catbox.moe/7eq6dv.gif",

      "https://files.catbox.moe/hn47hb.gif",

      "https://files.catbox.moe/d8js6x.gif"

    ];

    addHighlights(8);

    addStandards(139);

}
  /* ShowTime150 */
  else if (type === "showtime150") {

    maxBox = 150;

       addPlayer(
        "モーガン ロジャーズ",
        "ShowTime",
        "https://files.catbox.moe/2k2zpk.gif");


        addPlayer(
        "エリオット アンダーソン",
        "ShowTime",
        "https://files.catbox.moe/chz26t.gif");


        addPlayer(
        "デンゼル ドゥンフリース",
        "ShowTime",
        "https://files.catbox.moe/fu9xqb.gif");

    bannerType = "ShowTime";

    bannerTitle = "Summer Transfer";

    bannerImages = [

      "https://files.catbox.moe/2k2zpk.gif",

      "https://files.catbox.moe/chz26t.gif",

      "https://files.catbox.moe/fu9xqb.gif"

    ];

    addHighlights(8);

    addStandards(139);


  }
  /* BigTime + ShowTime 150 */
  else if (type === "bigshow150") {
    maxBox = 150;

    addPlayer(
      "キリアン エムバペ",
      "BigTime",
      "https://files.catbox.moe/va6tv9.gif"
    );
    addPlayer(
      "エンソ フェルナンデス",
      "ShowTime",
      "https://files.catbox.moe/n9i18i.gif"
    );
    addPlayer(
      "ヨハン マンザンビ",
      "ShowTime",
      "https://files.catbox.moe/0ezeck.gif"
    );

    bannerType = "BigTime&ShowTime";
    bannerTitle = "Victory Drivers 2026";
    bannerImages = [
      "https://files.catbox.moe/va6tv9.gif",
      "https://files.catbox.moe/n9i18i.gif",
      "https://files.catbox.moe/0ezeck.gif"
    ];

    addHighlights(8);
    addStandards(139);

  }
  /* BigTime + ShowTime2 150 */
  else if (type === "bigshow2_150") {
    maxBox = 150;

    addPlayer(
      "ジュード ベリンガム",
      "BigTime",
      "https://files.catbox.moe/2uyobp.gif"
    );
    addPlayer(
      "マイケル オリーセ",
      "ShowTime",
      "https://files.catbox.moe/9fnr53.gif"
    );
    addPlayer(
      "アユブ ブアディ",
      "ShowTime",
      "https://files.catbox.moe/1mslz3.gif"
    );

    bannerType = "BigTime & ShowTime";
    bannerTitle = "Pressure-Proof 2026";
    bannerImages = [
      "https://files.catbox.moe/2uyobp.gif",
      "https://files.catbox.moe/9fnr53.gif",
      "https://files.catbox.moe/1mslz3.gif"
    ];

    addHighlights(8);
    addStandards(139);

  }
  /* BigTime + Epic 150 */
  else if (type === "bigepic150") {
    maxBox = 150;

    addPlayer(
      "ラファエル ヴァラン",
      "Epic",
      "https://files.catbox.moe/1oqq1q.gif"
    );
    addPlayer(
      "ヴァンサン コンパニ",
      "Epic",
      "https://files.catbox.moe/30z9th.gif"
    );
    addPlayer(
      "メフディ ベナティア",
      "Epic",
      "https://files.catbox.moe/cuuy79.gif"
    );

    bannerType = "Epic";
    bannerTitle = "National Stars 2018";
    bannerImages = [
      "https://files.catbox.moe/1oqq1q.gif",
      "https://files.catbox.moe/30z9th.gif",
      "https://files.catbox.moe/cuuy79.gif"
    ];

    addHighlights(8);
    addStandards(139);

  }
  /* Epic + ShowTime 200 */
  else if (type === "epicshow200") {
    maxBox = 200;

    addPlayer(
      "ルート フリット",
      "Epic",
      "https://files.catbox.moe/1qsg6g.gif"
    );
    addPlayer(
      "パヴェル ネドヴェド",
      "Epic",
      "https://files.catbox.moe/i7e9eb.gif"
    );
    addPlayer(
      "ジャマル ムシアラ",
      "ShowTime",
      "https://files.catbox.moe/h9o7s4.gif"
    );
    addPlayer(
      "ヴィクトル ギョケレシュ",
      "ShowTime",
      "https://files.catbox.moe/rz44uf.gif"
    );

    bannerType = "Epic&ShowTime";
    bannerTitle = "1-2 Cut-in A";
    bannerImages = [
      "https://files.catbox.moe/1qsg6g.gif",
      "https://files.catbox.moe/i7e9eb.gif",
      "https://files.catbox.moe/rz44uf.gif"
    ];

    addHighlights(10);
    addStandards(186);

  }
  /* BigTime + Epic 250 */
  else if (type === "bigepic250") {
    maxBox = 250;

    addPlayer(
      "リオネル メッシ",
      "BigTime",
      "https://files.catbox.moe/78gbf6.gif"
    );
    addPlayer(
      "クリスティアーノ ロナウド",
      "BigTime",
      "https://files.catbox.moe/bk0c8t.gif"
    );
    addPlayer(
      "マヌエル ノイアー",
      "ShowTime",
      "https://files.catbox.moe/hbqmy4.gif"
    );
    addPlayer(
      "ケヴィン デ ブライネ",
      "ShowTime",
      "https://files.catbox.moe/nyzupg.gif"
    );
    addPlayer(
      "ネイマール",
      "ShowTime",
      "https://files.catbox.moe/121h2z.gif"
    );
    addPlayer(
      "ルカ モドリッチ",
      "ShowTime",
      "https://files.catbox.moe/i7gvu6.gif"
    );
    addPlayer(
      "ハメス ロドリゲス",
      "ShowTime",
      "https://files.catbox.moe/xq6fsi.gif"
    );

    bannerType = "BigTime&ShowTime";
    bannerTitle = "Living Legends 2026";
    bannerImages = [
      "https://files.catbox.moe/78gbf6.gif",
      "https://files.catbox.moe/bk0c8t.gif",
      "https://files.catbox.moe/hbqmy4.gif"
    ];

    addHighlights(20);
    addStandards(223);
  }

  /* ShowTime Vosinha 50BOX */
  else if (type === "vosinha50") {
    maxBox = 50;

    addPlayer(
      "ヴォジーニャ",
      "ShowTime",
      "https://files.catbox.moe/tnxchn.gif"
    );

    bannerType = "ShowTime";
    bannerTitle = "Vosinha";
    bannerImages = [
      "https://files.catbox.moe/tnxchn.gif"
    ];

    addHighlights(3);
    addStandards(46);
  }

  updateBannerImages();
  updateStatus();
}

/* =========================
   残数表示
========================= */

function updateStatus() {
  let bigtime = box.filter(p => p.rarity === "BigTime").length;
  let epic = box.filter(p => p.rarity === "Epic").length;
  let showtime = box.filter(p => p.rarity === "ShowTime").length;

  let html = "";

  if (bigtime > 0) {
    html += "BigTime残り : " + bigtime + "<br>";
  }
  if (epic > 0) {
    html += "Epic残り : " + epic + "<br>";
  }
  if (showtime > 0) {
    html += "ShowTime残り : " + showtime + "<br>";
  }

  document.getElementById("boxCounter").innerHTML = "ボックスドロー" + box.length + "/" + maxBox;
  document.getElementById("status").innerHTML = html;
}

/* =========================
   演出
========================= */

function playAnimation(normalType, doubleRare, resultHTML) {
  let animation = document.getElementById("animation");
  animation.innerHTML = "";

  let normalVideo = "";
  let doubleVideo = "";

  if (normalType === "BigTime") {
    normalVideo = "https://files.catbox.moe/5fy7bl.mp4";
  } else if (normalType === "Epic") {
    normalVideo = "https://files.catbox.moe/461so9.mp4";
  } else if (normalType === "ShowTime") {
    normalVideo = "https://files.catbox.moe/9cd44h.mp4";
  }

  if (doubleRare === true) {
    doubleVideo = "https://files.catbox.moe/20yr65.mov";
  }

  if (normalVideo === "") {
    document.getElementById("result").innerHTML = resultHTML;
    return;
  }

  animation.innerHTML = `
    <video id="normalVideo" autoplay playsinline>
      <source src="${normalVideo}" type="video/mp4">
    </video>
  `;

  let video = document.getElementById("normalVideo");

  video.play().catch(error => {
    video.muted = true;
    video.play();
  });

  video.onended = function () {
    if (doubleVideo !== "") {
      animation.innerHTML = `
        <video id="doubleVideo" autoplay playsinline>
          <source src="${doubleVideo}" type="video/mp4">
        </video>
      `;

      let second = document.getElementById("doubleVideo");
      second.play().catch(() => {
        second.muted = true;
        second.play();
      });

      second.onended = function () {
        animation.innerHTML = "";
        document.getElementById("result").innerHTML = resultHTML;
      };
    } else {
      animation.innerHTML = "";
      document.getElementById("result").innerHTML = resultHTML;
    }
  };
}

/* =========================
   10連
========================= */

function startGacha() {
  if (box.length <= 0) {
    alert("BOXが空です");
    return;
  }

  let html = "";
  let bigtimeCount = 0;
  let epicCount = 0;
  let showtimeCount = 0;

  for (let i = 0; i < 10; i++) {
    if (box.length <= 0) {
      break;
    }

    let rand = Math.floor(Math.random() * box.length);
    let player = box[rand];

    if (player.rarity === "BigTime") {
      bigtimeCount++;
    }
    if (player.rarity === "Epic") {
      epicCount++;
    }
    if (player.rarity === "ShowTime") {
      showtimeCount++;
    }

    html += `
      <div class="card ${player.rarity.toLowerCase()}">
        <img src="${player.image}">
      </div>
    `;

    box.splice(rand, 1);
  }

  let normalType = "";
  if (bigtimeCount >= 1) {
    normalType = "BigTime";
  } else if (epicCount >= 1) {
    normalType = "Epic";
  } else if (showtimeCount >= 1) {
    normalType = "ShowTime";
  }

  let totalRare = bigtimeCount + epicCount + showtimeCount;
  let doubleRare = false;
  if (totalRare >= 2) {
    doubleRare = true;
  }

  playAnimation(normalType, doubleRare, html);
  updateStatus();
}

function startSingleGacha() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("animation").innerHTML = "<h2>Connecting...</h2>";

  setTimeout(function () {
    if (box.length <= 0) {
      alert("BOXが空です");
      return;
    }

    let rand = Math.floor(Math.random() * box.length);
    let player = box[rand];

    let html = `
      <div class="card ${player.rarity.toLowerCase()}">
        <img src="${player.image}">
        <h2>${player.name}</h2>
        <h3>${player.rarity}</h3>
      </div>
    `;

    box.splice(rand, 1);
    playAnimation(player.rarity, false, html);
    updateStatus();
  }, 2000);
}

/* =========================
   リセット
========================= */

function resetBox() {
  let type = document.getElementById("gachaType").value;
  createBox(type);
  document.getElementById("result").innerHTML = "";
  document.getElementById("animation").innerHTML = "";
}

function changeGacha() {
  resetBox();
}

/* =========================
   残数表示ON/OFF
========================= */

function toggleStatus() {
  let status = document.getElementById("status");
  if (status.style.display === "none") {
    status.style.display = "block";
  } else {
    status.style.display = "none";
  }
}

createBox("epic150");

function gacha10() {
  if (box.length <= 0) {
    alert("BOXが空です");
    return;
  }
  if (box.length < 10) {
    alert("BOX残数が10未満のため引くことができません。");
    return;
  }
  document.getElementById("confirmModal").style.display = "flex";
}

function gacha1() {
  if (box.length <= 0) {
    alert("BOXが空です");
    return;
  }
  document.getElementById("singleConfirmModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("confirmModal").style.display = "none";
}

function closeSingleModal() {
  document.getElementById("singleConfirmModal").style.display = "none";
}

function startConfirmGacha() {
  if (!spendCoins(900)) {
    return;
  }

  const gachaSound = new Audio("https://files.catbox.moe/jqfxyq.mp3");
  gachaSound.play().catch(() => {});

  closeModal();
  document.getElementById("result").innerHTML = "";
  document.getElementById("animation").innerHTML = "<h2>Connecting...</h2>";

  setTimeout(function () {
    startGacha();
  }, 2000);
}

function startSingleConfirmGacha() {
  if (!spendCoins(100)) {
    return;
  }

  const gachaSound = new Audio("https://files.catbox.moe/jqfxyq.mp3");
  gachaSound.play().catch(() => {});

  closeSingleModal();
  document.getElementById("result").innerHTML = "";
  document.getElementById("animation").innerHTML = "<h2>Connecting...</h2>";

  setTimeout(function () {
    startSingleGacha();
  }, 2000);
}

function openMenu() {
  document.getElementById("menuPopup").style.display = "flex";
}

function closeMenu() {
  document.getElementById("menuPopup").style.display = "none";
}

function openGachaMenu() {
  document.getElementById("gachaMenu").style.display = "flex";
}

function closeGachaMenu() {
  document.getElementById("gachaMenu").style.display = "none";
}

function selectGacha(type) {
  document.getElementById("gachaType").value = type;
  changeGacha();
  closeGachaMenu();
}

function updateBannerImages() {
  document.getElementById("bannerType").innerHTML = bannerType;
  document.getElementById("bannerTitle").innerHTML = bannerTitle;
  document.getElementById("pickup1").src = bannerImages[0];
  document.getElementById("pickup2").src = bannerImages[1];
  document.getElementById("pickup3").src = bannerImages[2];
}

function openShop() {
  document.getElementById("shopModal").style.display = "flex";
}

function closeShop() {
  document.getElementById("shopModal").style.display = "none";
}

function buyCoins(amount) {
  coins += amount;
  document.getElementById("coinCount").innerHTML = coins;
  closeShop();
}

function spendCoins(cost) {
  if (coins < cost) {
    alert("コインが不足しています");
    return false;
  }
  coins -= cost;
  document.getElementById("coinCount").innerHTML = coins;
  return true;
}

/* =========================
   お知らせ機能
========================= */

const newsData = [

  {
    date: "2026.08.17",
    title: "✨ 新ガチャ「Summer Transfer」追加！",
    content: "ShowTime「モーガン ロジャーズ」が手に入る150BOXガチャを追加しました！ガチャ変更から選択できます。"
  },
   {
    date: "2026.08.14",
    title: "✳️ガチャ演出を2027バージョンに刷新！",
    content: "2026→2027に伴い、ガチャ演出を最新にしました。※BigTime演出のサウンドは未実装"
  },
  {
    date: "2026.08.14",
    title: "✨ 新ガチャ「Chelsea B」追加！",
    content: "Epic「エデン アザール」が手に入る150BOXガチャを追加しました！ガチャ変更から選択できます。"
  },   
   {
    date: "2026.08.06",
    title: "✨ 新ガチャ「Vosinha 50BOX」追加！",
    content: "ShowTime「ヴォジーニャ」が手に入る50BOXガチャを追加しました！ガチャ変更から選択できます。"
  },
  {
    date: "2026.08.06",
    title: "📖 遊び方ページを追加しました",
    content: "コインの増やし方やガチャの仕様についてまとめた「遊び方」を公開しました。メニューからご確認いただけます。"
  },
  {
    date: "2026.08.03",
    title: "✨BigTimeガチャ追加＆リリース！",
    content: "当サイトをリリースしました！さらに、BigTime「ジュード ベリンガム」を含む150Boxガチャを追加しました。"
  }
];

function openNewsModal() {
  const container = document.getElementById("newsListContainer");
  container.innerHTML = "";

  newsData.forEach(item => {
    container.innerHTML += `
      <div style="border-bottom: 1px solid #444; padding-bottom: 12px; margin-bottom: 12px;">
        <div style="font-size: 0.8rem; color: #aaa; margin-bottom: 4px;">${item.date}</div>
        <div style="font-weight: bold; color: #fff; margin-bottom: 4px;">${item.title}</div>
        <div style="color: #ddd; font-size: 0.85rem;">${item.content}</div>
      </div>
    `;
  });

  document.getElementById("newsModal").style.display = "flex";
  closeMenu(); // メニューが開いていたらし閉じる
}

function closeNewsModal() {
  document.getElementById("newsModal").style.display = "none";
}
