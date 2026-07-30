// database.js
const database = [
    {
      id: "Pikachu",
      name: "ピカチュウ",
      weakness: "闘",
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
      id: "Mew",
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
      id: "Bulbsaur",
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
      id: "Charmander",
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
      id: "Squirtle",
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
    },
    {
      id: "Eevee",
      name: "イーブイ",
      weakness: "闘",
      moves: [
        { name: "しっぽではたく", power: 10, energy: "飛", effect: "①③④10ダメージ追加。" },
        { name: "たいあたり", power: 10, energy: "飛飛", effect: "①②③④20ダメージ追加。" },
        { name: "とっしん", power: 30, energy: "飛飛", effect: "①②20ダメージ追加。\n⑤⑥このポケモンにも20ダメージ。" },
        { name: "はねまわる", power: 0, energy: "飛飛飛", effect: "①70ダメージを与える。\n②⑤40ダメージを与える。\n③④⑥20ダメージを与える。" },
        { name: "ぜんりょくダッシュ", power: 40, energy: "無無無無無", effect: "①②⑤40ダメージ追加。" },
        { name: "あまえる", power: 20, energy: "悪", effect: "①②③④次の相手の番、相手のエネコロを2個少なくする。" },
        { name: "かみつく", power: 10, energy: "悪無無", effect: "①③④20ダメージ追加。" }
      ]
    },
    {
      id: "Grimer",
      name: "ベトベター",
      weakness: "闘",
      moves: [
        { name: "どくガス", power: 10, energy: "悪", effect: "①③④次の相手の番、相手のエネコロを1個少なくする。" },
        { name: "ベトベトなげ", power: 20, energy: "悪悪", effect: "①③④20ダメージ追加。" },
        { name: "ベノムスリップ", power: 20, energy: "悪悪", effect: "①②③④相手もキャラコロを振って、③④⑤⑥が出たなら、20ダメージ追加。" },
        { name: "どくどくボンバー", power: 30, energy: "悪悪悪", effect: "①②⑤前の自分の番、「どくガス」のエネコロが成功していたなら、30ダメージ追加。" },
        { name: "どくどくヒール", power: 30, energy: "悪悪悪", effect: "①②③④前の自分の番、「どくガス」のエネコロが成功していたなら、このポケモンのHPを30回復する。" },
        { name: "ヘドロでかこむ", power: 30, energy: "悪悪悪", effect: "①②⑤相手のワザを1つ選ぶ。次の相手の番、そのワザは使えない。" },
        { name: "ヘドロタックル", power: 20, energy: "悪悪悪", effect: "①③④30ダメージ追加。\n②⑤⑥このポケモンにも20ダメージ。" },
        { name: "ベノムパンチ", power: 40, energy: "悪悪悪悪", effect: "①②30ダメージ追加。" },
        { name: "いやがらせベノム", power: 20, energy: "悪悪悪悪", effect: "①③④前の相手の番、相手のワザのエネコロが失敗していたなら、50ダメージ追加。" }
      ]
    },
    {
      id: "Onix",
      name: "イワーク",
      weakness: "草",
      moves: [
        { name: "ぶつかる", power: 10, energy: "闘", effect: "①②⑤10ダメージ追加。" },
        { name: "いわなだれ", power: 20, energy: "闘闘", effect: "①③④20ダメージ追加。" },
        { name: "がんせきタックル", power: 10, energy: "闘闘", effect: "次の相手の番、このポケモンが受けるダメージを-10する。\n①③④受けるダメージをさらに-20する。" },
        { name: "ワイルドタックル", power: 30, energy: "闘闘闘", effect: "①②20ダメージ追加。\n③④⑤⑥このポケモンにも20ダメージ。" },
        { name: "いわおとし", power: 20, energy: "闘闘闘", effect: "①②30ダメージ追加。" },
        { name: "ロックウォール", power: 30, energy: "闘闘闘", effect: "①②③④次の相手の番、このポケモンが受けるダメージを-30する。" },
        { name: "ハードインパクト", power: 30, energy: "闘闘闘闘", effect: "①③④30ダメージ追加。\n⑥次の自分の番、自分のエネコロを1個少なくする。" },
        { name: "がんせきバリア", power: 40, energy: "闘闘闘闘", effect: "①②次の相手の番、このポケモンが受けるダメージを-50する。" },
        { name: "ジャイロボール", power: 20, energy: "鋼無無", effect: "①②③④相手もキャラコロを振って、⑤⑥が出たなら、60ダメージ追加。" },
        { name: "アイアンテール", power: 20, energy: "鋼無無", effect: "①③④次の相手の番、このポケモンが受けるダメージを-10する。" }
      ]
    },
    {
      id: "Pinsir",
      name: "カイロス",
      weakness: "飛",
      moves: [
        { name: "しゅうちゅう", power: 10, energy: "草", effect: "①③④次の自分の番、自分のエネコロを2個多くする。" },
        { name: "チャージばさみ", power: 20, energy: "草草", effect: "①②次の自分の番、自分のエネコロを1個多くする。" },
        { name: "たえる", power: 0, energy: "草草", effect: "次の相手の番、このポケモンが受けるダメージを-20する。\n①②⑤受けるダメージをさらに-20する。" },
        { name: "とつげき", power: 30, energy: "草草草", effect: "①②20ダメージ追加。\n⑤⑥このポケモンにも20ダメージ。" },
        { name: "つのでたたく", power: 20, energy: "草草草", effect: "①③④30ダメージ追加。" },
        { name: "ぎゃくじょうスイング", power: 10, energy: "草草草", effect: "①③④前の自分の番、自分のワザのエネコロが失敗していたなら、40ダメージ追加。" },
        { name: "ひっさつばさみ", power: 20, energy: "草草草草", effect: "①80ダメージ追加。" },
        { name: "ハサミギロチン", power: 0, energy: "草草草草草", effect: "①150ダメージ与える。" },
        { name: "かわらわり", power: 20, energy: "闘", effect: "①②20ダメージ追加。" },
        { name: "じごくぐるま", power: 30, energy: "闘無無無", effect: "①②⑤⑥30ダメージ追加。" }
      ]
    },
    {
      id: "Moltres",
      name: "ファイヤー",
      weakness: "水",
      moves: [
        { name: "ほのおのうず", power: 20, energy: "炎炎", effect: "①②40ダメージ追加。\n③④⑤⑥次の自分の番、自分のエネコロを2個少なくする。" },
        { name: "ほのおのつばさ", power: 30, energy: "炎炎", effect: "①②30ダメージ追加。\n③④このポケモンにも20ダメージ。" },
        { name: "ヒートブレス", power: 40, energy: "炎炎炎", effect: "①②40ダメージ追加。\n⑤⑥このポケモンにも30ダメージ。" },
        { name: "ねっぷう", power: 30, energy: "炎炎炎", effect: "①③④20ダメージ追加。" },
        { name: "かえんほうしゃ", power: 40, energy: "炎炎炎炎", effect: "①②40ダメージ追加。\n③④⑤⑥次の自分の番、自分のエネコロを2個少なくする。" },
        { name: "もえつきる", power: 80, energy: "炎炎炎炎", effect: "②⑤⑥このワザは失敗する。" },
        { name: "フレアドライブ", power: 50, energy: "炎炎炎炎炎", effect: "①②⑤40ダメージ追加。\n③④⑥このポケモンにも40ダメージ。" },
        { name: "ウイングラッシュ", power: 20, energy: "飛", effect: "①②③④10ダメージ追加。" },
        { name: "そらをとぶ", power: 30, energy: "飛無無", effect: "①③④次の相手の番、このポケモンはワザのダメージを受けない。\n②⑤⑥このワザは失敗する。" },
        { name: "ぼうふう", power: 20, energy: "飛無無無", effect: "①60ダメージ追加。" }
      ]
    },
    {
      id: "Zapdos",
      name: "サンダー",
      weakness: "闘",
      moves: [
        { name: "ダブルサンダー", power: 0, energy: "電", effect: "このワザはキャラコロを合計2回振る。\n①②⑤このワザでキャラコロが成功するたび、20ダメージ追加。" },
        { name: "でんきショック", power: 10, energy: "電", effect: "①②③④10ダメージ追加。" },
        { name: "でんじフラッシュ", power: 20, energy: "電電", effect: "①②30ダメージ追加。" },
        { name: "エレキアロー", power: 20, energy: "電電", effect: "①40ダメージ追加。" },
        { name: "ほうでん", power: 30, energy: "電電電", effect: "①②⑤20ダメージ追加。" },
        { name: "ボルトラッシュ", power: 10, energy: "電電電電", effect: "このワザはキャラコロを合計3回振る。\n①③④このワザでキャラコロが成功するたび、30ダメージ追加。" },
        { name: "サンダーチェイン", power: 30, energy: "電電電電", effect: "①②⑤30ダメージ追加、もう1回キャラコロを振る。(失敗するまで繰り返せる。)" },
        { name: "つばめがえし", power: 20, energy: "飛", effect: "①②20ダメージ追加。" },
        { name: "そらをとぶ", power: 30, energy: "飛無無", effect: "①③④次の相手の番、このポケモンはワザのダメージを受けない。\n②⑤⑥このワザは失敗する。" },
        { name: "バリバリウイング", power: 40, energy: "飛無無無無", effect: "①③④40ダメージ追加。" }
      ]
    },
    {
      id: "Articuno",
      name: "フリーザー",
      weakness: "鋼",
      moves: [
        { name: "フリーズダイブ", power: 10, energy: "水", effect: "①②20ダメージ追加。" },
        { name: "アイスショット", power: 20, energy: "水水", effect: "①③④20ダメージ追加。" },
        { name: "アイスウイング", power: 10, energy: "水水", effect: "①②③④次の相手の番、相手のエネコロを1個少なくする。" },
        { name: "コールドブレス", power: 20, energy: "水水水", effect: "①③④次の相手の番、相手のエネコロを2個少なくする。" },
        { name: "いてつくやいば", power: 30, energy: "水水水", effect: "①③④次の相手の番、相手はキャラコロを振れない。" },
        { name: "ブリザードストーム", power: 30, energy: "水水水水", effect: "①②③④30ダメージ追加。" },
        { name: "ぜったいれいど", power: 40, energy: "水水水水", effect: "①②次の相手の番、相手のエネコロを2個少なくする。さらにキャラコロを振れない。" },
        { name: "はねやすめ", power: 0, energy: "飛飛", effect: "このポケモンのHPを20回復する。\n①③④さらに20回復する。" },
        { name: "そらをとぶ", power: 30, energy: "飛無無", effect: "①③④次の相手の番、このポケモンはワザのダメージを受けない。\n②⑤⑥このワザは失敗する。" },
        { name: "エアカッター", power: 40, energy: "飛無無無", effect: "①②30ダメージ追加。" }
      ]
    }
  ];
