import React, { useState, useEffect} from 'react'
import SideBarComponent from './sidebar/SideBarComponent'
import EditorComponent from './editor/EditorComponent'
import firebase from 'firebase/app'
import useAuth from 'app/hooks/useAuth'
import api from 'app/services/api'

const NotesApp = () => {
    const { user } = useAuth();
    const [state, setState] = useState({
        selectedNoteIndex: null,
        selectedNote: null,
        notes: null
    })

    const [addingNote, setAddingNote] = useState(false);
    const toggleAdding = () => {
        console.log("cambiando el display")
        setAddingNote(true)
    }

    useEffect(() => {
        api.get(`/t/${user.uid}/n`)
            .then(res => {
                console.log(res.data.data);
                setState({notes: res.data.data});
            })
            .catch(error => {
                console.error(error)
            })

        /*firebase.firestore().collection('notes').get()
            .then(query => {
                const notes = query.map(_doc => {
                    const data =  _doc.data();
                    data['id'] = _doc.id.toString();
                    return data;
                })

                console.log(notes)
                this.setState({notes: notes})
            })*/
    }, [])

    return(
        <div>
            <SideBarComponent 
                selectedNoteIndex={state.selectedNoteIndex}
                notes={state.notes}
                toggleAdding={toggleAdding}

            />
            <EditorComponent addingNote={addingNote}/>
        </div>
    )
}

export default NotesApp