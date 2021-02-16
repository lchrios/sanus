import React from 'react'

const firebase =  require('firebase')

class NotesApp extends React.Component{
    constructor() {
        super();
        this.state = {
            selectedNoteIndex: null,
            selectedNote: null,
            notes: null
        };
    }


    render() {
        return(
            <div>
                <h1>QUE PEDO SI JALA</h1>
            </div>
        )
    }

    componentDidMount =  () => {
        firebase.firestore().collection('notes').onSnapshot(serverUpdate => {
            const notes = serverUpdate.docs.map(_doc => {
                const data = _doc.data();
                data['id'] = _doc.id();
                return data;
            });
            console.log(notes)
            this.setState({notes:notes})
        });
    }
}

export default NotesApp