const db = require("../models");

const musicService = {
  addMusic: async (name, src, author) => {
    try {
      const response = await db.MusicPlayer.create({
        name,
        author,
        src,
      });
      return response;
    } catch (error) {
      console.log("Error at musicServiec.addMusic()");
    }
  },
  getAll: async () => {
    try {
      const response = await db.MusicPlayer.findAll();
      return response;
    } catch (error) {
      console.log("Error at musicServiec.getAll()");
    }
  },
  deleteMusic: async (id) => {
    try {
      const response = await db.MusicPlayer.destroy({ where: { id } });
      return response;
    } catch (error) {
      console.log("Error at musicServiec.deleteMusic()");
    }
  },
};

module.exports = musicService;
