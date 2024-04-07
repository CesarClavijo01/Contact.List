import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList.jsx'
import SelectedContact from './components/SelectedContact.jsx'

function App() {

  const [selectedId, setSelectedId] = useState(null)

  return (
    <>
    {selectedId ? (
        <SelectedContact setSelectedId={setSelectedId} selectedId={selectedId}/>
      ) : (
        <ContactList setSelectedId={setSelectedId}/>
      )}
    </>
  )
}

export default App
