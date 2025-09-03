function showExamples(type) {
  const output = document.getElementById("output");
  output.innerHTML = ""; // 初期化

  let examples = [];

  if (type === "but") {
    examples = [
      { word: "Although", 
        sentence: "Although it was raining, we went hiking.", 
        translation: "雨が降っていたけれども、私たちはハイキングに行った。" },
      { word: "Even though", 
        sentence: "Even though he was tired, he kept working.", 
        translation: "彼は疲れていたけれども、働き続けた。" },
      { word: "Though", 
        sentence: "Though it was expensive, I bought it.", 
        translation: "高かったけれども、それを買った。" }
    ];
  } else if (type === "reason") {
    examples = [
      { word: "Because", 
        sentence: "Because she was late, we started without her.", translation: "彼女が遅れたので、私たちは先に始めた。" },
      { word: "Since", 
        sentence: "Since it’s raining, let’s stay inside.", 
        translation: "雨が降っているので、家の中にいましょう。" },
      { word: "As", 
        sentence: "As it was getting dark, we went home.", 
        translation: "暗くなってきたので、家に帰った。" }
    ];
  } else if (type === "time") {
    examples = [
      { word: "During", 
        sentence: "During the meeting, she took notes.", 
        translation: "会議の間ずっと、彼女はメモを取っていた。" },
      { word: "While", 
        sentence: "While I was cooking, he called me.", 
        translation: "料理している間に、彼が電話してきた。" },
      { word: "meanwhile", 
        sentence: "He was studying; meanwhile, she was cooking.", translation: "彼が勉強している間、彼女は料理していた。" }
    ];  
    
    } else if (type === "cause") {
    examples = [
      { word: "Because of",
        sentence: "Because of the heavy rain, the event was canceled.",
        translation: "激しい雨が原因で、そのイベントは中止された。"},
      { word: "Due to",
        sentence: "Due to technical issues, the website was down for hours.",
        translation: "技術的な問題が原因で、ウェブサイトは数時間停止していた。" },
      { word: "Owing to",
        sentence: "Owing to his hard work, he passed the exam.",
        translation: "彼の努力が原因で、試験に合格した。" },
      { word: "On account of",
        sentence: "On account of the traffic jam, I arrived late.",
        translation: "渋滞が原因で、私は遅れて到着した。" }
    ];

    } else if (type === "contrast") {
    examples = [
      { word: "In spite of", 
        sentence: "In spite of the cold, they went swimming.", 
        translation: "寒さにもかかわらず、彼らは泳ぎに行った。" },
      { word: "Despite", 
        sentence: "Despite his injury, he played the game.", 
        translation: "けがにもかかわらず、彼は試合に出た。" },
      { word: "nevertheless", 
        sentence: "He was tired; nevertheless, he continued working.", translation: "彼は疲れていたが、それにもかかわらず働き続けた。" }
    ];
  
  } else if (type === "timing") {
    examples = [
      { word: "As soon as", 
        sentence: "As soon as I arrived, it started to rain.",
        translation: "到着するとすぐに雨が降り始めた。" },
      { word: "Once", 
        sentence: "Once you finish, let me know.", 
        translation: "終わったら知らせてください。" }
    ];
  } else if (type === "purpose") {
    examples = [
      { word: "so that", 
        sentence: "I studied hard so that I could pass.", 
        translation: "合格するために一生懸命勉強した。" },
      { word: "in order that", 
        sentence: "He left early in order that he might catch the train.", translation: "電車に間に合うように早く出発した。" }
    ];
  } else if (type === "condition") {
    examples = [
      { word: "provided that", 
        sentence: "You can go out provided that you finish your homework.", translation: "宿題を終えれば外出してもいい。" },
      { word: "in case", 
        sentence: "Take an umbrella in case it rains.", 
        translation: "雨が降る場合に備えて傘を持っていきなさい。" },
      { word: "In the event that", 
        sentence: "In the event that you are late, call me.", 
        translation: "遅れる場合には、私に電話してください。" }
    ];
  } else if (type === "extent") {
    examples = [
      { word: "As far as", 
        sentence: "As far as I know, he’s honest.", 
        translation: "私の知る限り、彼は正直です。" },
      { word: "As long as", 
        sentence: "As long as you try, I’ll support you.", 
        translation: "努力する限り、私は応援します。" },
    //   { word: "whereas", 
    //     sentence: "He likes tea, whereas I prefer coffee.", 
    //     translation: "彼は紅茶が好きだが、私はコーヒーの方が好きだ。" }
    ];

  } else if (type === "addition") {
    examples = [
      { word: "Moreover", 
        sentence: "She’s smart. Moreover, she’s kind.", 
        translation: "彼女は賢い。その上、親切だ。" },
      { word: "In addition", 
        sentence: "In addition to math, he studies physics.", 
        translation: "数学に加えて、彼は物理も勉強している。" },
      { word: "also", 
        sentence: "She also speaks Spanish.", 
        translation: "彼女はスペイン語も話す。" },
      { word: "Besides", 
        sentence: "Besides English, he speaks French.", 
        translation: "英語に加えて、彼はフランス語も話す。" }
    ];
  } else if (type === "contrast2") {
    examples = [
      { word: "instead of", 
        sentence: "He watched TV instead of studying.", 
        translation: "勉強する代わりにテレビを見た。" },
      { word: "In contrast", 
        sentence: "In contrast to her brother, she is quiet.", 
        translation: "彼女の兄とは対照的に、彼女は静かだ。" },
      { word: "rather", 
        sentence: "I would rather stay home than go out.", 
        translation: "外出するよりも家にいたい。" }
    ];
  }  else if (type === "contrast3") {
  examples = [
    { word: "whereas",
      sentence: "He enjoys outdoor activities, whereas I prefer staying indoors.",
      translation: "彼はアウトドアが好きだが、私は室内にいる方が好きだ。"
    },
    { word: "While",
      sentence: "While I enjoy classical music, my friend prefers rock.",
      translation: "私はクラシック音楽を楽しむが、友人はロックを好む。"
    },
    { word: "On the other hand",
      sentence: "He is very outgoing. On the other hand, his sister is shy.",
      translation: "彼はとても社交的だが、一方で彼の妹は内気だ。"
    },
    { word: "In contrast",
      sentence: "In contrast to last year, this winter is much colder.",
      translation: "昨年とは対照的に、今年の冬はずっと寒い。"
    },
    { word: "Nevertheless",
      sentence: "It was raining. Nevertheless, they went hiking.",
      translation: "雨が降っていた。それにもかかわらず、彼らはハイキングに行った。"
    }

  ];
}

  examples.forEach(ex => {
    const block = document.createElement("div");
    const sentence = ex.sentence.replace(ex.word, `<span class="marker">${ex.word}</span>`);
    block.innerHTML = `<p>${sentence}</p><p class="translation">${ex.translation}</p>`;
    output.appendChild(block);
  });
}