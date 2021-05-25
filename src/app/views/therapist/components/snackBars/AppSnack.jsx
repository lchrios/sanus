import React, { useEffect, useState } from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import LongTextSnackbar from './LongLengthSnackbar'

const AppSnackbar = () => {
    const[charge, setCharge] = useState()

    return (
        <div className="m-sm-30">
            <SimpleCard title="message length">
                <LongTextSnackbar />
            </SimpleCard>
        </div>
    )
}

export default AppSnackbar
