import { Link , useNavigate} from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import useCreateDate from '../components/useCreateDate'

const CreateNote = ({setNotes}) => {

  // to be able to create and save a note
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const date = useCreateDate();
  const navigate = useNavigate ();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && details ) {
      const note = {id: uuid(), title, details, date}
      //adds note to the note array
      setNotes(prevNotes => [note, ...prevNotes])


      //re-direct to hompage=============

      navigate('/')

    }
  }

  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className='btn'><IoIosArrowBack/></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>
      <form action="" className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <textarea rows="28" placeholder='Note details...' value={details} onChange={(e) => setDetails(e.target.value)} ></textarea>
      </form>
    </section>
  )
}

export default CreateNote