import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const ListComponent = (_index, notes, selectedNoteIndex, selectNote) => {
    return(
        <div >
            <ListItem
            selected={selectedNoteIndex === _index}
            alignItems='flex-start' >
                <div
                onClick={() => selectNote(notes, _index)}>
                    <ListItemText
                    primary={notes.title}  
                    secondary={notes.body}></ListItemText>
                </div>
            </ListItem>
        </div>
    )
}

export default ListComponent;