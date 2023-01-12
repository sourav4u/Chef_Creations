import React from 'react'
import { Navigate } from 'react-router-dom'

function Protected({children , status}) {

    if (!status) {
        return <Navigate to="/" replace />
    }
    else{
        return children
    }
 
}

export default Protected