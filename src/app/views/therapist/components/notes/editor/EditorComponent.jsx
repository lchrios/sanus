import React, { useState } from 'react';
import debounce from '../helpers';
import { withStyles } from '@material-ui/core/styles';
import styles from './editorStyles';
import RichTextEditor from 'app/components/RichTextEditor/RichTextEditor';

class EditorComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            addingNote:false,
            content: '',
            title: '',
            id: ''
        };
    }

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.editorContainer}>
                <RichTextEditor value={this.state.content} onChange={this.updateBody} />
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