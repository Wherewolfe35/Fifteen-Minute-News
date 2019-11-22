const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/', (req, res) => {
  console.log('Api Request', req.params);

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;
  axios.get(url).then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log('error in news GET', error);
    res.sendStatus(500);
  })
})


module.exports = router;
