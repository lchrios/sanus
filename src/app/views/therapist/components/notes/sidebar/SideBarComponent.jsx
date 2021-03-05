import React, {useState} from 'react'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { Button, Divider } from '@material-ui/core'
import ListComponent from '../listItem/ListComponent'


const SideBarComponent = () => {
    const [addingNote, setAddingNote] = useState(false)
    const [title, setTitle] = useState(null)
    
    const notes = []

    const newNoteBtn = () => {
        setAddingNote(addingNote => !addingNote)
        setTitle(null)
    }

    const updateTitle = (txt) => {
        setTitle(txt)
    }

    const saveNote = () => {
    
    }   

    const selectNote = () => {
        console.log('select note')
    }
    const deleteNote = () => {
        console.log('delete note')
    }

    

    return(
        <div>
            <Button
            className='mt-4'
            onClick={newNoteBtn}
            color='primary'
            variant='contained'>{addingNote ? 'Cancelar' : 'Crear nueva nota'}</Button>

            {
                addingNote ? 
                <div className='pt-4'>
                    <ValidatorForm>
                        <TextValidator
                        className="mb-4 w-full"
                        label="Ingresa el título de la nota"
                        type="text"
                        onKeyUp={(e) => {updateTitle(e.target.value)}}
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
            <list>
                {
                    notes.map((_note, _index) => {
                        return(
                            <div key={_index}
                            >
                                <ListComponent>
                                deleteNote={deleteNote}
                                selectNote={selectNote}>
                                </ListComponent> 
                                <Divider></Divider>

                            </div>
                        )
                    })
                }
            </list>
        </div>
    )
}

export default SideBarComponent