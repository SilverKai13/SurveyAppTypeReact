import React from 'react';
import { Post } from '../../../../common/interfaces/post.interface';

const PostsGridItem: React.FC<{ post: Post}> = ({post}: {post:Post}) => {
    return (
        <div>
                <p>
                    {post.name}
                </p>
                <p>
                    {post.email}
                </p>
                <p>
                    {post.age}
                </p>  
                <p>
                    {post.address}
                </p>  
        </div>

    );
}

export default PostsGridItem;