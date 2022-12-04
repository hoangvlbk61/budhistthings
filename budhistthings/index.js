const fs = require("fs");
let data = [];
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
for (let i = 1; i < 22; i++) {
    data.push({
        index: `key-id-${i}`,
        image: "/dharma-dress/" + i + ".jpg",
        price: randomIntFromInterval(50, 150) * 10000,
        name: `Pháp phục Thanh Hoa, sản phẩm thứ ${i} `,
        sold: randomIntFromInterval(20, 1000),
    })
}
fs.writeFileSync("clothes.json", JSON.stringify(data));
// console.log(data)