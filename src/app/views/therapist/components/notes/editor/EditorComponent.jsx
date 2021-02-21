import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import TextForm from './textForm'
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './editorStyles';

class EditorComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            addingNote:false,
            text: '',
            title: '',
            id: ''
        };
    }

    render() {

        const { classes } = this.props;
       



        return (
            <div className={classes.editorContainer}>
                <TextForm
                    value={this.state.text} 
                    onChange={this.updateBody}
                    addingNote={this.props.addingNote}
                />
            </div>
        )
    }
    updateBody = async (val) => {
        console.log(val)
        await this.setState({ text: val })
        this.update();
    }
    update = debounce(() => {
        console.log('UPDATING DATA BASE')
        //*TODO COMEBACK
    }, 1500);
}

export default withStyles(styles)(EditorComponent)