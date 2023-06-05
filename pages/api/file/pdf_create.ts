import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';


const saveAsPdf = async (url: string) => {
  const browser = await puppeteer.launch({
    headless: 'new',
    // `headless: true` (default) enables old Headless;
    // `headless: 'new'` enables new Headless;
    // `headless: false` enables “headful” mode.
  });
  const page = await browser.newPage();

  await page.goto(url, {
      waitUntil: 'networkidle0'
    });

  const result = await page.pdf({
    format: 'a4',
  });
  await browser.close();

  return result;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query; // pass the page to create PDF from as param

  console.log(url,'-=-=>url')

  res.setHeader(
    'Content-Disposition',
    `attachment; filename="file.pdf"`
  );
  res.setHeader('Content-Type', 'application/pdf');

  const pdf = await saveAsPdf(url as string);

  return res.status(200).json(pdf);
};