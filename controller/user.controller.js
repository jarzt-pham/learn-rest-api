var user = require('../model/user.model')

module.exports.get = async function (req, res){
    await res.json(user)
}

module.exports.getOne = async function(req, res){
    var userMatch = await user.find(value => value.id == req.params.id);
    res.json(userMatch)
}

module.exports.post = async function(req, res){
    await user.push({
        "id": user.length + 1,
        "name": req.body.name
    })
    res.json(user)
}

module.exports.delete = async function(req, res){
    var userMatch = await user.find(value => value.id == req.params.id);
    var indexUserMatch = user.indexOf(userMatch)
    await user.splice(indexUserMatch, 1)
    res.json(user)
}

module.exports.put = async function(req, res){
    var userMatch = await user.find(value => value.id == req.params.id);
    
    //Kiểm tra có id trong collection
    if(userMatch != undefined) // Có
    {
        user[user.indexOf(userMatch)].name = req.body.name
        res.json(user)
    }
    else{ //Không có
        user.push({
            "id": req.params.id,
            "name": req.body.name
        })
        res.json(user)
    }
}

