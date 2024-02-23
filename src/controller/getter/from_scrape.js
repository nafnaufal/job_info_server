const puppeteer = require("puppeteer")

const getFromScrape = async (q, location, data) => {
	let linkedin_query = q.replaceAll(' ', '%20');
	let indeed_query = q.replaceAll(' ', '+');

	let linkedin_url = `https://www.linkedin.com/jobs/search?keywords=${linkedin_query}&location=Indonesia`;
	let indeed_url = `https://id.indeed.com/jobs?q=${indeed_query}&l=Indonesia`;
	let glints_url = `https://glints.com/opportunities/jobs/explore?keyword=${indeed_query}`;

	const browser = await puppeteer.launch({
		headless: false
	})

	const page = await browser.newPage()
	await page.goto(linkedin_url, { waitUntil: 'domcontentloaded' });
	const linkedin_hasil = await page.evaluate(() => {
		const hasilTag = document.querySelector('.results-context-header__job-count').innerText;
		return parseInt(hasilTag);
	})

	await page.goto(indeed_url), { waitUntil: 'domcontentloaded' };
	const indeed_hasil = await page.evaluate(() => {
		const hasilTag = document.getElementsByClassName('jobsearch-JobCountAndSortPane-jobCount css-13jafh6 eu4oa1w0')[0].querySelectorAll('span')[0].innerText;
		return parseInt(hasilTag);
	})

	await page.goto(glints_url), { waitUntil: 'domcontentloaded' };
	const glints_hasil = await page.evaluate(() => {
		const lestPage = document.getElementsByClassName('UnstyledButton-sc-zp0cw8-0 AnchorPaginationsc__Number-sc-8wke03-3 dYSdtB bkvUQn');
		const hasilTag = lestPage[lestPage.length - 1].innerText;
		return parseInt(hasilTag) * 30;
	})

	await browser.close();
	data[q] = {
		'linkedin': linkedin_hasil,
		'indeed': indeed_hasil,
		'glints': glints_hasil
	};

	return data;
}
module.exports = {
	getFromScrape
};