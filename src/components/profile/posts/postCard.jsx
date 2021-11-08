import React from 'react'
import PostModal from './PostModal'

function PostCard(props) {
    const [modalShow, setModalShow] = React.useState(false)
    return (
        <div className="postCard">
            <img
                src={props.img}
                style={{ width: '300px' }}
                alt=""
                onClick={() => setModalShow(true)}
            />
        </div>
    )
}

export default PostCard