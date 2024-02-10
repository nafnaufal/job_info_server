const { search } = require("../routes/api");

const getCountJobs = async (req, res) =>{
    const {body} = req;
    var search = body.search
    if (!search){
        return res.json({
            'message': 'Error',
            'data': 'Search parameter is required'
        })
    }
    var search = search.replace(" ","+")
    link = "https://www.jobstreet.co.id/api/chalice-search/v4/search?keywords=:key&siteKey=ID-Main&sourcesystem=houston".replace(":key",search)
    const response = await fetch(link)
    const data = await response.json()
    return res.json({
        'message': 'OK',
        'data':data['solMetadata']['totalJobCount']
    })
}
module.exports = {
    getCountJobs
 };