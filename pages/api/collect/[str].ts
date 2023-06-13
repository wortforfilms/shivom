

const cheerio = require("cheerio"); // 1
const pretty = require("pretty");
const puppeteer = require("puppeteer");

// open url see result

const handler = async (req: any, res: any) => {

    if (req.method === "GET") {

        const {str}=req.query
// 
        // const str = req.query.str;
        console.log('start collection with params======>',str)
        
        const web=`https://wikipedia/translate?search=${str}&dir=es`

        try {
            const browser = await puppeteer.launch({
                headless: true,
                args: ["--disabled-setuid-sandbox", "--no-sandbox"],
            });
            const [page] = await browser.pages();
            await page.setDefaultNavigationTimeout(0);
            await page.setExtraHTTPHeaders({
                "User-Agent":
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36",
            });
            const lists: any = []
            const tltext: any=[]
            const tlhtml: any=[]
            const _url=web
            const url_to_collect = _url
            await page.goto(url_to_collect, { waitUntil: "domcontentloaded" });
            const response = await page.content();
            const htmlString = await response;
            const $ = cheerio.load(htmlString);

            console.log($,'for --->', url_to_collect)

            $('body').find('table').each((index:number,ele:any)=>{

                const tabl=$(ele).find('tr').each((index:number,row:any)=>{
                   const te= $(row).text()
                   const ml= $(row).html()

                   tltext.push(te)
                   tlhtml.push(ml)
                })

                    const tab=$(ele).text()
                    lists.push(tab)
            })
   
            await page.close()
            console.log('--=->sub list',lists)
 

            if(lists){
console.log('-----> sending list')
                res.statusCode = 200;
                return res.json({
                    tables: lists,
                    html:tlhtml,
                    text:tltext,
                    ans: "$ tabels in url"
                });
            }
        } catch (e) {

            res.statusCode = 404;
console.log('---> some issue',e)
            return res.json({
                error: `${"tables"} not found.${e}`,
                followerCount: -1,
            });
        }
    }
};

export default handler;

// raashi ke prasiddha vaigyAnik   test:{k->que}  jJ¿-> 
// vidyA {}-{}- []=()=>{}
// verbatum sectionalmmnn
// measure  balls in original shapes
// compare  bull  {balls}
// jambudveep
// jamµÂMbudweep
// 
//  colorof
// life¿?black?white
// 50 shades of gray in u_humanity 
// 