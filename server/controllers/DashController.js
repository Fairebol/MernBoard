const dataResponse = require('../models/data');

function dashboardView(req, res)
{
    res.status(200).send({success: true})
}


//fetch the database WORK IN PROGRESS LIMIT = 19
async function dashboardResults(req, res, Limit)
{
    const dashboardResult = await dataResponse.find().limit(Limit = 10).exec()
    .then(dashboardResult => {
        res.json(dashboardResult);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
}

module.exports = {
    dashboardView,
    dashboardResults
};
