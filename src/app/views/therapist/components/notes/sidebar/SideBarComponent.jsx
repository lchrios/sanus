import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './sidebarStyles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebarItem/sidebarItem';
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
                onClick={this.newNoteBtnClick} //* al chile apenas me di cuenta que esta forma de darle propiedades al button es muy parecida a la forma en HTML
                className={classes.newNoteBtn}>Crear nota</Button>
                {
                    this.state.addingNote ? 
                    <div>
                        {/* <input 
                        type="text"
                        placeholder="Esribe el título"
                        className={classes.newNoteBtn}
                        onKeyUp={(e) => this.updateTitle(e.target.value)}></input> */}
                        
                    </div> : null
                    
                }
            </div>
        )
    }
    
    newNoteBtnClick = () => {
        console.log('CREATING NEW NOTE');
        this.props.toggleAdding();
        this.setState({title: null, addingNote: !this.state.addingNote})
    }
    updateTitle = (txt) => {
        console.log('HERE IT IS ', txt)
    }
}

export default withStyles(styles)(SideBarComponent)