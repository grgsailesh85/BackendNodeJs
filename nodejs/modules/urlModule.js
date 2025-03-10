const codeitUrl = "https://codeit.com.np/search-course?q=React+with+Next+JS&time=8";

const urlObj = new URL(codeitUrl);
console.log(urlObj);
console.log(urlObj.host);
console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search)
console.log(params)
params.set("q", "Node with Express");
console.log(params)
params.append("date","2025-04-01")
console.log(params)