import { Link, useParams, useNavigate, Navigate} from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useState } from 'react';
import useCreateDate from '../components/useCreateDate';



const EditNote = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item) => item.id === id) // find and check if the id of the current object, is the same with the id that is coming in from the params.
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const date = useCreateDate();
  const navigate = useNavigate();

  //to save changes made to an edited note
  const handleForm = (e) => {
    e.preventDefault();
    
    if (title && details) {
      const newNote ={...note, title, details, date}

      // map through note array
      const newNotes = notes.map(item => {
        if(item.id === id) {
          item = newNote;
        }
        return item;
      })
      setNotes(newNotes);
    }
    //redirect to homepage 
    navigate ('/')
  }

  //handles delete notes===========
  const  handleDelete = () =>{
    if(window.confirm('Confirm delete? ')) {
      const newNotes = notes.filter(item => item.id !== id);

      setNotes(newNotes);
      navigate('/')
    }
  }

  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className='btn'><IoIosArrowBack/></Link>
        <button className="btn lg primary" onClick={handleForm}>Save</button>
        <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line/></button>
      </header>
      <form action="" className="create-note__form" onSubmit={handleForm}>
        <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <textarea rows="28" placeholder='Note details...' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}


export default EditNote






