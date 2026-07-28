// database.js
const database = [
  {
    id: "pikachu",
    name: "ピカチュウ",
    weakness: "地面",
    moves: [
      { name: "かじる", power: 10, energy: "電", effect: "①②30ダメージ追加。" },
      { name: "でんきショック", power: 10, energy: "電電", effect: "①③④⑥20ダメージ追加。" },
      { name: "エレキラッシュ", power: 20, energy: "電電", effect: "このワザは弱点を計算しない。\n①②もう一回「エレキラッシュ」使う。（失敗するまで繰り返せる。）" },
      { name: "10まんボルト", power: 30, energy: "電電電", effect: "①③④30ダメージ追加。\n②⑤⑥次の自分の番、自分のエネコロを2個少なくする。" },
      { name: "かみなり", power: 20, energy: "電電電", effect: "①60ダメージ追加。" },
      { name: "ボルテッカー", power: 40, energy: "電電電電", effect: "このポケモンにも30ダメージ。\n①②⑤40ダメージ追加。" },
      { name: "アイアンテール", power: 20, energy: "鋼", effect: "①②⑤次の相手の番、このポケモンが受けるダメージを-10する。" }
    ]
  },
  {
    id: "mew",
    name: "ミュウ",
    weakness: "悪",
    moves: [
      { name: "ねんりき", power: 10, energy: "超", effect: "①③④20ダメージ追加。" },
      { name: "サイケこうせん", power: 20, energy: "超超", effect: "①⑥30ダメージ追加。" },
      { name: "バリアー", power: 0, energy: "超超", effect: "次の相手の番、このポケモンが受けるダメージを-20する。\n①②受けるダメージをさらに-30する。" },
      { name: "メモリースキップ", power: 20, energy: "超超", effect: "①③④相手のワザを1つ選ぶ。次の相手の番、そのワザは使えない。" },
      { name: "サイコショット", power: 30, energy: "超超超", effect: "①②⑤⑥20ダメージ追加。" },
      { name: "サイコキネシス", power: 20, energy: "超超超", effect: "①②⑤相手はエネコロを3個振る。一番多く出たタイプのエネルギーの数×10ダメージ追加。" },
      { name: "リフレクション", power: 0, energy: "超超超超", effect: "相手が最後に選んだワザに書かれているダメージを相手に与える。(選んだワザのキャラコロの効果は無視する。)\n①③④このワザで与えるダメージは2倍になる。" }
    ]
  }
];
