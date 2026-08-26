const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares (Intermédiaires)
app.use(cors()); // Autorise les requêtes provenant d'autres origines (notre futur Frontend)
app.use(express.json()); // Permet à Express de lire le format JSON dans les requêtes

// Route de test principale
app.get('/', (req, res) => {
  res.send('API KAMS Business Manager est en cours d\'exécution 🚀');
});

// Route de vérification d'état (Health Check)
app.get('/api/status', (req, res) => {
  res.json({
    status: 'OK',
    app: 'KAMS Business Manager API',
    version: '1.0.0'
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Le serveur Backend tourne sur http://localhost:${PORT}`);
});