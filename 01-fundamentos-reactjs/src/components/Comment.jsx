import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../../src/Coment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
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
                        <button title="Deletar Comentário">
                                 <Trash size={24}/>
                        </button>
                    </header>

                <p>Muito bem devo, parabéns!! </p>
    </div>
            <footer>
                <button title="Aplaudir Post">
                    <ThumbsUp />
                    Aplaudir <span>23</span>
                </button>
            </footer>
        </div>
        </div>
    )
}