import React, { useState, useEffect } from 'react'
import {
    MatxSidenavContainer,
    MatxSidenavContent,
} from 'app/components'
import InboxTopBar from './components/comments/InboxTopbar'
import { getAllMessage } from './components/comments/InboxService'
import { useMediaQuery, Card, Button } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import CommentsList from './components/comments/CommentsList'
import useAuth from 'app/hooks/useAuth'
import history from '../../../history'
import { Link, Redirect } from 'react-router-dom'

const Comments = () => {
    const { user } = useAuth()
    const [isAlive, setIsAlive] = useState(true)
    const [open, setOpen] = useState(false)
    const [masterCheckbox, setMasterCheckbox] = useState(false)
    const [messageList, setMessageList] = useState([])

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const toggleSidenav = () => {
        setOpen(!open)
    }

    const handleMasterCheckbox = (event) => {
        let temp = messageList
        let isChecked = event.target.checked
        if (isChecked) {
            temp.map((message) => {
                message.selected = true
                return message
            })
        } else {
            temp.map((message) => {
                message.selected = false
                return message
            })
        }
        setMessageList(temp)
        setMasterCheckbox(isChecked)
    }

    const handleCheckboxSelection = (event, index) => {
        event.persist()
        let temp = messageList
        temp[index].selected = event.target.checked
        setMessageList([...temp])
    }

    useEffect(() => {
        if (isMobile) setOpen(false)
    }, [isMobile])

    useEffect(() => {
        getAllMessage().then(({ data }) => {
            if (isAlive) setMessageList(data)
        })
    }, [isAlive])

    useEffect(() => {
        return () => setIsAlive(false)
    }, [])

    var obj = '/' + user.uid + '/dashboard'

    return (
        <div className="flex m-sm-30">
            <div className="w-full">
                <MatxSidenavContainer>
                    <MatxSidenavContent>
                    <div className="mb-10">
                        <Link to={obj}>
                        <Button
                            variant="contained"
                            color="secondary" 
                            className="x-center"
                            onClick={() => {
                                console.log("HICISTE CLICK PUTO")
                                history.push(obj)

                            }}
                        >
                            Volver al escritorio
                        </Button>
                        </Link>
                    </div>
                    
                        <InboxTopBar
                            masterCheckbox={masterCheckbox}
                            handleMasterCheckbox={handleMasterCheckbox}
                            toggleSidenav={toggleSidenav}
                        />
                        <CommentsList
                            handleCheckboxSelection={handleCheckboxSelection}
                            messageList={messageList}
                        />
                    </MatxSidenavContent>
                </MatxSidenavContainer>
            </div>
        </div>
    )
}

export default Comments
