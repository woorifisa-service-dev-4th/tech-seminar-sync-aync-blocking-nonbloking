import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter1 from './Counter1.jsx'
import Counter2 from './Counter2.jsx'
import Counter3 from './Counter3.jsx'
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <Counter1 />
      <Counter2 />
      <Counter3 />
    </div>
  </StrictMode>,
)
