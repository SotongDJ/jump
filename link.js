var reverseShortDict = {
"BLG":{"hant":["%E7%99%BE%E9%9D%88%E6%9E%9C"],"en":["BLG","BAILINGGUO"]},
"2021GT":{"hant":["2021%E5%85%AC%E6%8A%95","%E5%85%AC%E6%8A%95"],"en":["2021GT"]},
"NIGHT":{"en":["NIGHT"]},
"RX":{"hant":["%E8%97%A5%E5%B1%80","%E5%BF%AB%E7%AF%A9"],"en":["RX","SELFTEST"]},
"CLOCK":{"en":["EINK","CLOCK"]}
};
var shortDict = {};
for (const targetKey in reverseShortDict) {
 for (const langKey in reverseShortDict[targetKey]) {
  for (const shortKey of reverseShortDict[targetKey][langKey]) {
   shortDict[shortKey] = {"lang":langKey,"key":targetKey};
  }
 }
};
// "YOUTUBE": Object { lang: "en", key: "YT" }
var jumpDict = {
"BLG" : {
"url" : "https://bailingguonews.com/",
"en" : "Bailingguo News",
"hant" : "百靈果 News"
},
"2021GT" : {
"url" : "https://plainlaw.me/category/%e5%b0%88%e9%a1%8c/2021%e5%85%ac%e6%8a%95/",
"en" : "Referendum 2021 by plainlaw.me",
"hant" : "2021 公投 by 法律白話文運動"
},
"NIGHT" : {
"url" : "https://www.nasa.gov/connect/ebooks/earthatnight_detail.html",
"en" : "Earth at Night",
"hant" : "Earth at Night"
},
"RX" : {
"url" : "https://selftest.mowd.tw/",
"en" : "selftest.mowd.tw by Mowd",
"hant" : "家用快篩熱度圖 by 陳柏宇 (Mowd)"
},
"CLOCK" : {
"url" : "https://j.stdj.me/clock",
"en" : "Clock for E-Ink Display",
"hant" : "E-Ink 專用時鐘"
}
};