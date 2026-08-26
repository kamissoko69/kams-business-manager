import { useState, useEffect } from 'react'

function App() {
  const [apiStatus, setApiStatus] = useState('Vérification en cours...')

  useEffect(() => {
    // Connexion à notre API Backend (Port 5000)
    fetch('http://localhost:5000/api/status')
      .then((res) => res.json())
      .then((data) => setApiStatus(`Connecté à l'API (${data.app} v${data.version})`))
      .catch(() => setApiStatus('Erreur : Impossible de contacter l\'API Backend sur le port 5000'))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>🏢 KAMS Business Manager</h1>
      <p>Interface de gestion d'entreprise en cours de construction.</p>
      
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        borderRadius: '8px', 
        backgroundColor: '#e3f2fd',
        color: '#0d47a1',
        fontWeight: 'bold'
      }}>
        Statut Backend : {apiStatus}
      </div>
    </div>
  )
}

export default App