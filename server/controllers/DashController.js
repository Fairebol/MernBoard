const dataResponse = require('../models/data');

function dashboardView(req, res)
{
    res.status(200).send({success: true})
}

async function dashboardResults(req, res)
{
    const dashboardResult = await dataResponse.find().limit(req.params.limit).exec()
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
