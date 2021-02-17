import React from 'react';
import ReactQuill from 'react-quill';
import TextForm from './textForm'
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './editorStyles';

class EditorComponent extends React.Component{
    constructor() {
        super();
        this.state = {
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
                />
            </div>
        )
    }
    updateBody = async(event) => {
        await this.setState({ text: event.target.value })
        this.update();
    }
    update = debounce(() => {
        console.log('UPDATING DATA BASE')
        //*TODO COMEBACK
    }, 1500);
}

export default withStyles(styles)(EditorComponent)