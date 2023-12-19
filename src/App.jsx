// Inside here, is the routes to manage the pages inside the pages folder. 
// To do that, I Installed  react router dom package using (npm install react-router-dom --save)
// --save was used,  to make sure that it is added to the dependencies in the package.jason 

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notes from './pages/Notes'
import CreateNote from './pages/createNote';
import EditNote from './pages/EditNote';
// import dummyNotes from './dummyNotes'

import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []) //this is to  get the note  that is saved inside the local storage, and since there is a string, i paresed it using JSON  or parse and if there is nothing, we'll have an empty string. 

  // to save data, to the local storage. 
  // for the dependency array, whenever the note state changes, the function in the useeffect would rerun.
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes)) //since we can't save an array, i have to make this a JSON string
  }, [notes])
  return (
   <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes notes={notes}/>} />
          <Route path='/create-note' element={<CreateNote setNotes={setNotes} />} />
          <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes} />} />  {/* (:id, is going to make it possible for us to have dynamic items rendered inside the page.)*/}
        </Routes>
      </BrowserRouter>
   </main>
  )
}

export default App


