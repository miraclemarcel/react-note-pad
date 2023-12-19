import {CiSearch} from 'react-icons/ci'
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {BsPlusLg} from 'react-icons/bs'

import NoteItem from '../components/NoteItem'
import { useEffect, useState } from 'react'

const Notes = ({notes}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText ] = useState('')
  const [filteredNotes, seFilteredNotes] = useState(notes)

  //handles search inputs

  const handleSearch = () => {
    seFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLowerCase())){
        return note;
      }
    }))
  }

  useEffect (handleSearch, [text])


  return (
    <section>
        <header className="notes__header">
           { !showSearch && <h2>My Notes</h2>}
            {showSearch && <input type="text"  value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} autoFocus placeholder='keyword...'/> }
            <button className='btn'onClick={() => setShowSearch(prevState => !prevState)}>{showSearch  ? <MdClose/> : <CiSearch/>}</button>
        </header>

        <div className="notes__container">
          {filteredNotes.length == 0 &&  <p className=' empty__notes'>Oops....No notes found!</p>}

            {/* Mapping through the array created in the dummyNotes.js, inside the src folder. 
            To do that, i am going to create a map function to call each Note and render a 
            new component called note item */}

            {
                filteredNotes.map(note => <NoteItem key={note.id} note={note} />) // passed in prop  note={notes}
            }
        </div>

        <Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>

    </section>
  )
}

export default Notes



