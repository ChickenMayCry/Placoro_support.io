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
    },
    {
      id: "fushigidane",
      name: "フシギダネ",
      weakness: "炎",
      moves: [
        { name: "つるのムチ", power: 10, energy: "草", effect: "①②⑤20ダメージ追加。" },
        { name: "はっぱカッター", power: 20, energy: "草草", effect: "①③④20ダメージ追加。" },
        { name: "やどりぎのタネ", power: 10, energy: "草草", effect: "①②③④次の相手の番、相手のエネコロを1個少なくする。次の自分の番、自分のエネコロを1個多くする。" },
        { name: "くさむすび", power: 30, energy: "草草草", effect: "①②⑤相手のワザを1つ選ぶ。次の相手の番、そのワザは使えない。" },
        { name: "とつげき", power: 30, energy: "草草草", effect: "①②40ダメージ追加。\n⑤⑥このポケモンにも30ダメージ。" },
        { name: "ギガドレイン", power: 40, energy: "草草草草", effect: "①③④このポケモンのHPを40回復する。" },
        { name: "アシッドボム", power: 10, energy: "悪無無", effect: "①③④20ダメージ追加。" }
      ]
    },
    {
      id: "hitokage",
      name: "ヒトカゲ",
      weakness: "水",
      moves: [
        { name: "ひのこ", power: 20, energy: "炎炎", effect: "①②30ダメージ追加。" },
        { name: "ヒートアップ", power: 10, energy: "炎炎", effect: "①②次の自分の番、自分のエネコロを2個多くする。" },
        { name: "かえんほうしゃ", power: 40, energy: "炎炎炎", effect: "①②20ダメージ追加。\n③④⑤⑥次の自分の番、自分のエネコロを1個少なくする。" },
        { name: "ほのおのキバ", power: 30, energy: "炎炎炎炎", effect: "①②⑤30ダメージ追加。" },
        { name: "フレアストーム", power: 20, energy: "無無無無無", effect: "①③④エネコロで出た炎エネルギーの数×10ダメージ追加。" },
        { name: "かみなりパンチ", power: 10, energy: "電無無", effect: "①②③④20ダメージ追加。" },
        { name: "メタルクロー", power: 20, energy: "鋼無無", effect: "①40ダメージ追加。" }
      ]
    },
    {
      id: "zenigame",
      name: "ゼニガメ",
      weakness: "電",
      moves: [
        { name: "みずでっぽう", power: 10, energy: "水", effect: "①⑤20ダメージ追加。" },
        { name: "からにこもる", power: 0, energy: "水", effect: "次の相手の番、このポケモンが受けるダメージを-20する。\n⑤このポケモンのHPを30回復する。" },
        { name: "みずのはどう", power: 20, energy: "水水", effect: "①③④20ダメージ追加。" },
        { name: "シェルアタック", power: 30, energy: "水水水", effect: "①②⑤次の相手の番、このポケモンが受けるダメージを-20する。" },
        { name: "バブルこうせん", power: 30, energy: "水水水", effect: "①②⑤次の相手の番、相手のエネコロを1個少なくする。" },
        { name: "ハイドロアンガー", power: 40, energy: "水水水水", effect: "①②⑤このポケモンの残りHPが40以下なら、60ダメージ追加。" },
        { name: "マッドショット", power: 30, energy: "闘無無無", effect: "①③④30ダメージ追加。" }
      ]
    }
  ];
