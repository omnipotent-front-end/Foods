const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios")
const $ = cheerio.load('')
const { getFoodDetailByUrl } = require('./util/index.js')

// 常量
const URL = 'http://www.1qibi.com/food/food_index.php' // 网页链接
const DOMAIN_FOOD = 'http://www.1qibi.com/food/' // 域名
const GROUP_TABLE_SEL = '#food_list_left > table:nth-child(10) td' // 一个分类的表格
const GROUP_TITLE_SEL = '#food_list_left > table:nth-child(10) > tbody > tr > td:nth-child(1)' // 一个分类的标题
const GROUP_CONTENT_SEL = '#food_list_left > table:nth-child(10) > tbody > tr > td:nth-child(2) > table td' // 一个分类的内容列表
const DOC_TITLE = 'rootstock.md' // 该分类文档的标题

function getAbsoluteLinks(element) {
    return DOMAIN_FOOD + element.find('a')
        .attr('href')
}
function getContentLinks(elements) {
    let mylist = []
    try {
        elements.each((index, element) => {
            const temp = $(element)
            let mytext = temp.text()
            mytext = mytext.replace(/\s/g, '')
            if (mytext) {
                let mylink = getAbsoluteLinks(temp)
                mylist.push([mytext, mylink])

            }
        })
        return mylist
    } catch (error) {
        return;
    }
}

/**
 * 生成文档内容
 * @param {*} groupTitle 
 * @param {*} groupContentLinks 
 */
async function getDocContent(groupTitle, groupContentLinks) {
    try {
        let str = `# ${groupTitle}\n\n`
        for (const [mytext, mylink] of groupContentLinks) {
            try {
                const content = await getFoodDetailByUrl(mylink)
                str = `${str}## ${mytext}\n${content}\n`
            } catch (error) {
                str = `${str}## ${mytext}\n${mylink}\n`
            }
        }
        return str;
    } catch (error) {
        return ''
    }
}

/* axios.get(URL).then(response => {
    const $ = cheerio.load(response.data);
    main(response.data)
}) */

async function main(value) {
    const $ = cheerio.load(value);

    // 分类标题+菜列表
    const group = $(GROUP_TABLE_SEL)
    // 分类标题
    let groupTitle = $(GROUP_TITLE_SEL)
    groupTitle = groupTitle.text()
    groupTitle = groupTitle.replace(/\[|\]/g, '')
    // 分类列表
    const groupContentElement = $(GROUP_CONTENT_SEL)
    // 分类的标题+链接
    const groupContentLinks = getContentLinks(groupContentElement)
    // 转成文档
    const str = await getDocContent(groupTitle, groupContentLinks)
    // 写文档
    fs.writeFile(DOC_TITLE, str, (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    })
}

const food = require('./example/food.js')
main(food)
