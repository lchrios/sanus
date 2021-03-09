import React, {useState} from 'react'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { Button, Divider, List } from '@material-ui/core'
import ListComponent from '../listItem/ListComponent'


const SideBarComponent = (notes, selectedNoteIndex) => {
    // const [addingNote, setAddingNote] = useState(false)
    // const [title, setTitle] = useState(null)

    const [state, setState] = useState({
        addingNote:false,
        title:null
    })


    const newNoteBtn = () => {
        setState({
            addingNote: !state.addingNote,
            title:null
        })
    }

    const updateTitle = (txt) => {
        setState({...state,title: txt})
        console.log('here it is',txt)
    }

    const saveNote = () => {
        console.log(state)
    }   

    const selectNote = () => {
        console.log('select note')
    }
    const deleteNote = () => {
        console.log('delete note')
    }

    
    if(notes.length != 0) {
        return(
            <div>
                <Button
                className='mt-4'
                onClick={newNoteBtn}
                color='primary'
                variant='contained'>{state.addingNote ? 'Cancelar' : 'Crear nueva nota'}</Button>
    
                {
                    state.addingNote ? 
                    <div className='pt-4'>
                        <ValidatorForm>
                            <TextValidator
                            className="mb-4 w-full"
                            label="Ingresa el título de la nota"
                            type="text"
                            onKeyUp={(e) => updateTitle(e.target.value)}
                        />
                        </ValidatorForm>
                        <Button
                        color='secondary'
                        variant='contained'
                        onClick={saveNote}>
                            Guardar nota
                        </Button>
                    </div> :
                    null
                }
                <List>
                    {
                        notes.notes.map(( _index) => {
                            return(
                                <div key={_index}>
                                    <ListComponent
                                    _note={notes}
                                    _index={_index}
                                    selectedNoteIndex={selectedNoteIndex}
                                    selectNote={selectNote}
                                    deleteNote={deleteNote}/>
                                    <Divider></Divider>
                                </div>
                            )
                        })
                    }
                </List>
            </div>
        )
    } else {
        return(
            <div>No pudimos recibir las notas de NotesApp.JSX</div>
        )
    }
    
}

export default SideBarComponent