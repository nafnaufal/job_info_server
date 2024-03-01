const getFromApi = async (q, location) =>{
    // const {body} = req;
    // var search = body.search
    // if (!search){
    //     return res.json({
    //         'message': 'Error',
    //         'data': 'Search parameter is required'
    //     })
    // }
	var search = q.replace(" ","+")
    link = "https://www.jobstreet.co.id/api/chalice-search/v4/search?keywords=:key&siteKey=ID-Main&sourcesystem=houston".replace(":key",search)
    const response = await fetch(link)
    const d = await response.json()

	const data = { 'jobstreet': d.solMetadata.totalJobCount };

	return data;
    // return res.json({
    //     'message': 'OK',
    //     'data':data['solMetadata']['totalJobCount']
    // })
}
module.exports = {
    getFromApi
 };