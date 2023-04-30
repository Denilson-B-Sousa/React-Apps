import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../../src/Coment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({content, deleteComment}){

    const [likeCount, setLikeCount] = useState(0); //Estado para o like

    function handleDeleteComment(){
        deleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }
    return(
        <div className={styles.comment}>
            <Avatar src="https://github.com/Denilson-B-Sousa.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                             <strong>Denilson</strong>
                             <time className={styles.authorAndTime} title="06 de Março às 10:22" dateTime='2023-03-06 10:22:30'>Cerca de 1 hora atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário" >
                                 <Trash size={24}/>
                        </button>
                    </header>

                <p>{content}</p>
    </div>
            <footer>
                <button onClick={handleLikeComment} title="Aplaudir Post">
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
        </div>
    )
}