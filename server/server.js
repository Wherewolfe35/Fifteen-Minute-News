const express = require('express');

const app = express();

const newsRouter = require('./routes/news');

app.use('/api/news', newsRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});