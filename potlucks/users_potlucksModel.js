const db = require("../data/dbConnection.js");

module.exports = {
    findUsers_Potlucks,
    findUsers_PotlucksById,
    addUsers_Potlucks,
    removeUsers_Potlucks
};

function findUsers_Potlucks() {
    return db("users_potlucks").orderBy('id')
}

function findUsers_PotlucksById(id) {
    return db("users_potlucks").where({ id }).first()
}

function addUsers_Potlucks(user_potluck) {
    return db('users_potlucks')
        .insert(user_potluck, "id")
        .then(ids => {
            const id = ids[0]
            return findUsers_PotlucksById(id)
        })
}

function removeUsers_Potlucks(id) {
    return db("users_potlucks").where({id}).del()
}