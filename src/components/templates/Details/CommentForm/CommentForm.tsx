import React, { useState } from 'react';
import * as Style from "./index.styled";

interface CommentFormProps {
    onCommentSubmit: (comment: { id: number; name: string; text: string }) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onCommentSubmit }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const uniqueId = Date.now();
        onCommentSubmit({ id: uniqueId, name, text: comment });
        setName('');
        setComment('');
    };

    return (
        <Style.Content>
            <Style.Header>Share your opinion!</Style.Header>
                <form onSubmit={handleSubmit}>
                    <Style.Subheader>Your name:</Style.Subheader>
                    <Style.Username>
                        <input
                            placeholder='Write your name here'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Style.Username>
                    <Style.Subheader>Your comment:</Style.Subheader>
                    <Style.Text>
                        <textarea
                            className={"Text"}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write your comment here"
                            maxLength={300}
                            required
                        />
                    </Style.Text>
                    <Style.Buttton>
                        <button
                            type="submit"
                            >
                            Comment
                        </button>
                    </Style.Buttton>
                    </form>
            </Style.Content>
);
};

export default CommentForm;