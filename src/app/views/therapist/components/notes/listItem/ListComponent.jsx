import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './listStyles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import {removeHTMLTags} from '../helpers'

class ListComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>HOLA DESDE LIST ITEM</div>
        )
    }
}

export default withStyles(styles)(ListComponent)