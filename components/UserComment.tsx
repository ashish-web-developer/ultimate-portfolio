// Avatar 
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

const UserComment = ({comment,user})=>{
    const avatar = createAvatar(lorelei, {
        seed: user?.name,
        // ... other options
    });
    return (
        <div>
            <div style = {{width:"30px",height:"30px"}} dangerouslySetInnerHTML={{ __html: avatar.toString() }} />
            <span>{comment.body}</span>
        </div>
    )
}

export default UserComment;