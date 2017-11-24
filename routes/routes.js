const ArtController = require('../controllers/art_controller');

module.exports = (app) => {
  app.get('/', ArtController.landing);
};
