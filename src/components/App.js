import { useState } from 'react'
import Home from './Home'
import Install from './Install'

function App() {
	const [loading, setLoading] = useState(true)
  return loading ? <Install done={() => setLoading(false)} /> : <Home />
}


export default App
