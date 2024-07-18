const musicService = require('../services/musicService')
const addMusic = async (req, res) => {
    try {
        const { name, src, author } = req.body;
        const response = await musicService.addMusic(name, src, author);
        if(response._options.isNewRecord === true){
            res.status(200).send({err: 0}); // Status 200 for success
        }else{
            res.status(500).send({err: 1});
        }
    } catch (error) {
        console.log("Internal server error:", error);
        res.status(500).send("Internal server error"); // Status 500 for internal server error
    }
};

const getAll = async (req, res) => {
    try {
        const response = await musicService.getAll();
        res.status(200).send(response);
    } catch (error) {
        console.log("Internal server error:", error);
        res.status(500).send("Internal server error"); // Status 500 for internal server error
    }
};

const deleteMusic = async (req, res) => {
    try {
        const {id} = req.body;
        const response = await musicService.deleteMusic(id);
        if (response === 0){
            res.status(200);
        }else{
            res.status(500);
        }
    } catch (error) {
        console.log("Internal server error:", error);
        res.status(500).send("Internal server error");
    }
};

module.exports = {
    addMusic,
    getAll,
    deleteMusic,
}