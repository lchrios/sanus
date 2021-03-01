import React, { useState, useEffect} from 'react'
import SideBarComponent from './sidebar/SideBarComponent'
import EditorComponent from './editor/EditorComponent'
import useAuth from 'app/hooks/useAuth'
import api from 'app/services/api'


const NotesApp = () => {
    const { user } = useAuth();
    /**Arre perdón por la versión anterior */
    const [state, setState] = useState({
        selectedNoteIndex: null,
        selectedNote: null,
        notes: null
    })

    const [addingNote, setAddingNote] = useState(false);
    const toggleAdding = () => {
        setAddingNote(true)
    }

    /**
     * ?PORQUE METES ASÍ NOMAS EL USEFFECT Y LO TOMAN LOS COMPONENTES DE REACT O QUE ROLLO 
     */

    useEffect(() => {

        
        const getNotes = api.get(`/t/${user.uid}/n`)
            .then(res => {
                setState({notes: res.data.data});   
            })
            .catch(error => {
                console.error(error)
            })

            /**
             * *!AQUÍ ERA DONDE LLAMABA LA FUNCIÓN DE COMPONENT DID MOUNT PARA HACER LIFECYCLE METHOD CON HTTPS REQUEST
             *  */
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
            <EditorComponent toggleAdding={toggleAdding} addingNote={addingNote}/>
        </div>
    )
}

export default NotesApp