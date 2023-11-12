import React from 'react';

import Comment from './comment';

const CommentGroup = ({ reviews }) => (
    <div>
        {
            Object.keys(reviews).map((reviewKey) => (
                <Comment key={reviewKey} review={reviews[reviewKey]} />
            ))
        }
    </div>
)

export { CommentGroup };