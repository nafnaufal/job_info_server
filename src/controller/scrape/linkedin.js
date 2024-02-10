const puppeteer = require("puppeteer")

const linkedin = async (q, location, data) => {
	query = q.replaceAll(' ', '%20');
	let url = `https://www.linkedin.com/jobs/search?keywords=${query}&location=Indonesia`;
	
	if (!data.hasOwnProperty(q)) {
		const browser = await puppeteer.launch()
		const page = await browser.newPage()
		await page.goto(url);

		const hasil = await page.evaluate(() => {
			const hasilTag = document.querySelector('.results-context-header__job-count').innerText;
			return hasilTag;
		})
		await browser.close();
		data[q] = hasil;
		console.log("run");
		return data;
	}else{
		return data;
	}
}
module.exports = {
	linkedin
};