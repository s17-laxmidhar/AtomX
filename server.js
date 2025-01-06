const app = require('./src/app');
const connectDB = require('./src/config/db');
const { PORT } = require('./src/config/dotenv');

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
