const words = [
    { english: "constant", chinese: "常量", level: 0, nextAppearance: 0 },
    { english: "variable", chinese: "变量", level: 0, nextAppearance: 0 },
    { english: "identify", chinese: "标识符", level: 0, nextAppearance: 0 },
    { english: "keywords", chinese: "关键字", level: 0, nextAppearance: 0 },
    { english: "sign", chinese: "符号", level: 0, nextAppearance: 0 },
    { english: "operator", chinese: "运算符", level: 0, nextAppearance: 0 },
    { english: "statement", chinese: "语句", level: 0, nextAppearance: 0 },
    { english: "syntax", chinese: "语法", level: 0, nextAppearance: 0 },
    { english: "expression", chinese: "表达式", level: 0, nextAppearance: 0 },
    { english: "initialition", chinese: "初始化", level: 0, nextAppearance: 0 },
    { english: "number format", chinese: "数据格式", level: 0, nextAppearance: 0 },
    { english: "declaration", chinese: "说明", level: 0, nextAppearance: 0 },
    { english: "type conversion", chinese: "类型转换", level: 0, nextAppearance: 0 },
    { english: "define", chinese: "定义", level: 0, nextAppearance: 0 },
    { english: "select", chinese: "选择", level: 0, nextAppearance: 0 },
    { english: "logical expression", chinese: "逻辑表达式", level: 0, nextAppearance: 0 },
    { english: "relational expression", chinese: "关系表达式", level: 0, nextAppearance: 0 },
    { english: "priority", chinese: "优先", level: 0, nextAppearance: 0 },
    { english: "operation", chinese: "运算", level: 0, nextAppearance: 0 },
    { english: "structure", chinese: "结构", level: 0, nextAppearance: 0 },
    { english: "circle", chinese: "循环", level: 0, nextAppearance: 0 },
    { english: "condition", chinese: "条件", level: 0, nextAppearance: 0 },
    { english: "variant", chinese: "变量", level: 0, nextAppearance: 0 },
    { english: "process", chinese: "过程", level: 0, nextAppearance: 0 },
    { english: "array", chinese: "数组", level: 0, nextAppearance: 0 },
    { english: "reference", chinese: "引用", level: 0, nextAppearance: 0 },
    { english: "element", chinese: "元素", level: 0, nextAppearance: 0 },
    { english: "address", chinese: "地址", level: 0, nextAppearance: 0 },
    { english: "sort", chinese: "排序", level: 0, nextAppearance: 0 },
    { english: "character", chinese: "字符", level: 0, nextAppearance: 0 },
    { english: "string", chinese: "字符串", level: 0, nextAppearance: 0 },
    { english: "application", chinese: "应用", level: 0, nextAppearance: 0 },
    { english: "call", chinese: "调用", level: 0, nextAppearance: 0 },
    { english: "return value", chinese: "返回值", level: 0, nextAppearance: 0 },
    { english: "function", chinese: "函数", level: 0, nextAppearance: 0 },
    { english: "declare", chinese: "声明", level: 0, nextAppearance: 0 },
    { english: "parameter", chinese: "参数", level: 0, nextAppearance: 0 },
    { english: "static", chinese: "静态的", level: 0, nextAppearance: 0 },
    { english: "extern", chinese: "外部的", level: 0, nextAppearance: 0 },
    { english: "pointer", chinese: "指针", level: 0, nextAppearance: 0 },
    { english: "argument", chinese: "参数", level: 0, nextAppearance: 0 },
    { english: "represent", chinese: "表示", level: 0, nextAppearance: 0 },
    { english: "manipulate", chinese: "处理", level: 0, nextAppearance: 0 },
    { english: "member", chinese: "成员", level: 0, nextAppearance: 0 },
    { english: "tag", chinese: "标记", level: 0, nextAppearance: 0 },
    { english: "enumerate", chinese: "枚举", level: 0, nextAppearance: 0 },
    { english: "union", chinese: "联合", level: 0, nextAppearance: 0 },
    { english: "create", chinese: "创建", level: 0, nextAppearance: 0 },
    { english: "insert", chinese: "插入", level: 0, nextAppearance: 0 },
    { english: "delete", chinese: "删除", level: 0, nextAppearance: 0 },
    { english: "modify", chinese: "修改", level: 0, nextAppearance: 0 },
    { english: "file", chinese: "文件", level: 0, nextAppearance: 0 },
    { english: "open", chinese: "打开", level: 0, nextAppearance: 0 },
    { english: "close", chinese: "关闭", level: 0, nextAppearance: 0 },
    { english: "read", chinese: "读", level: 0, nextAppearance: 0 },
    { english: "write", chinese: "写", level: 0, nextAppearance: 0 },
    { english: "error", chinese: "错误", level: 0, nextAppearance: 0 }
];

let currentWordIndex = 0;
let wordCounter = 0;
let masteredWords = 0;
const totalWords = words.length; // 初始化时记录总单词数

function shuffleWords() {
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
}

function getNextWord() {
    document.getElementById("next-button").style.display = "none";
    document.getElementById("reveal-button").style.display = "inline-block";
    document.getElementById("know-button").style.display = "inline-block";
    document.getElementById("dont-know-button").style.display = "inline-block";
    document.getElementById("chinese-translation").style.display = "none";
    
    wordCounter++;
    let nextWordIndex = -1;

    for (let i = 0; i < words.length; i++) {
        if (words[i].level < 3 && words[i].nextAppearance <= wordCounter) {
            nextWordIndex = i;
            break;
        }
    }
    
    if (nextWordIndex !== -1) {
        currentWordIndex = nextWordIndex;
        displayWord();
    } else {
        alert("所有单词已掌握！");
    }
    
    updateTotalProgress();
}

function displayWord() {
    const word = words[currentWordIndex];
    document.getElementById("english-word").innerText = word.english;
    document.getElementById("chinese-translation").innerText = word.chinese;
    updateWordProgress();
}

function revealTranslation() {
    document.getElementById("chinese-translation").style.display = "block";
    document.getElementById("reveal-button").style.display = "none";
    document.getElementById("know-button").style.display = "none";
    document.getElementById("dont-know-button").style.display = "none";
    document.getElementById("next-button").style.display = "inline-block";
}

function knowWord() {
    revealTranslation();
    words[currentWordIndex].level++;
    words[currentWordIndex].nextAppearance = wordCounter + Math.floor(Math.random() * 4) + 5;
    if (words[currentWordIndex].level >= 3) {
        masteredWords++;
    }
    updateWordProgress();
    updateTotalProgress();
}

function dontKnowWord() {
    revealTranslation();
    words[currentWordIndex].nextAppearance = wordCounter + Math.floor(Math.random() * 4) + 5;
    updateWordProgress();
}

function updateTotalProgress() {
    const progress = (masteredWords / totalWords) * 100;
    
    document.getElementById("total-progress").value = progress;
    document.getElementById("total-progress-text").innerText = `${masteredWords}/${totalWords}`;
}

function updateWordProgress() {
    const currentLevel = words[currentWordIndex].level;
    const progress = (currentLevel / 3) * 100;
    
    document.getElementById("word-progress").value = progress;
    document.getElementById("word-progress-text").innerText = `${progress.toFixed(0)}%`;
}

// 初始化
shuffleWords();
getNextWord();
updateTotalProgress();
updateWordProgress();
