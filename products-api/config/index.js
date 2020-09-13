require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  name: process.env.NAME,
  lastname: process.env.LASTNAME, 
  url_search: process.env.URL_SEARCH,
  url_item_id: process.env.URL_ITEM_ID,
};

module.exports = { config };
