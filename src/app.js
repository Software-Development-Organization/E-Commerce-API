const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const emailRoutes = require('./routes/emailRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/mail', emailRoutes);

app.use('/api/categories', categoryRoutes);

module.exports = app;
