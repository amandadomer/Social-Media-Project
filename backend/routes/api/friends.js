const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const auth = require("../../middleware/auth");

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const friends = await Promise.all(
            user.friends.map(friendId =>{
                return User.findById(friendId)
            })
        )
        let friendList = [];
        friends.map(friend=>{
            const {_id, username, photo} = friend;
            friendList.push({_id, username, photo});
        })
        res.status(200).json(friendList)
    } catch (ex){
        res.status(500).json(ex)
    }
});

router.post('/:userId/request', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send(`The user with id ${req.params.id} does not exist.`);

        user .request.push(user.userId);

        await user.save();
        return res.send(user.request);

    } catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

module.exports = router;