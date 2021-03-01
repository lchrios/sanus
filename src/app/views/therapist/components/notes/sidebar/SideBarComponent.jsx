import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './sidebarStyles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import { TextValidator } from 'react-material-ui-form-validator';



class SideBarComponent extends React.Component{
    constructor() {
        super()
        this.state = {
            addingNote: false,
            title: null
        }
    }
    render() {
    const {notes, classes, selectedNoteIndex} = this.props;

        return(
            <div className={classes.sidebarContainer}>
                <Button
                onClick={this.newNoteBtnClick}
                className={classes.newNoteBtn}>Crear nota</Button>
                {
                    this.state.newNoteBtnClick ? 
                    <div>
                        <TextField />
                    </div> : null
                    
                }
            </div>
        )
    }
    
    newNoteBtnClick = () => {
        console.log('CREATING NEW NOTE');
            
    }
    updateTitle = (txt) => {
        console.log('HERE IT IS ', txt)
    }
}

export default withStyles(styles)(SideBarComponent)