const cheerio = require("cheerio");
const axios = require("axios")
const $ = cheerio.load('');

function html2markdown(value) {
    let mark = ''
    let article = $(value).find('#detail_intro')
    $(article).children().each((index, paragraph) => {
        $(paragraph).children().each((j, element) => {
            const temp = $(element)
            let text = temp.text()
            // 无内容return
            if (!/\S/.test(text)) return;
            // 段落标题
            if (temp.get(0).tagName === 'h3') {
                // 去掉4个空格 和\t \n
                let result = text.replace(/(\t|\s|\n){4,}/g, '')
                mark = `${mark}### ${result}`
                return;
            }
            // 段落的内容 空格地方换行
            let result = text.replace(/(\t|\s|\n){4,}/g, '\n')
            // 1. 2. 之后加空格
            result = result.replace(/(\d\.)(\S)/g, '$1 $2')
            mark = `${mark}${result}\n\n`
        })
    })
    return mark;
}
function getFoodDetailByUrl(url) {
    return axios.get(url).then(response => {
        const result = html2markdown(response.data)
        return result
    })
}
// getFoodDetailByUrl('http://www.1qibi.com/food/food_introduce.php?id=1235047')

// const shanyao = require('../example/shanyao.js')
// const html = html2markdown(shanyao)
// console.log(html)

module.exports = { getFoodDetailByUrl }