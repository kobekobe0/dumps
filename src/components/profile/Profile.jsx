import React from 'react'
import './profile.css'
import { useHistory } from 'react-router-dom'
function Profile() {
    const history = useHistory()
    const back = () => {
        history.push('/')
    }
    return (
        <div className="profile">
            <div className="profileHeader">img</div>
        </div>
    )
}

export default Profile