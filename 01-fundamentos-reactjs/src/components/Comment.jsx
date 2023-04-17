import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../../src/Coment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={styles.comment}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <Avatar src='https://github.com/Denilson-B-Sousa.png'/>
                        <strong>Denilson</strong>
                        <time title="06 de Março às 10:22" dateTime='2023-03-06 10:22:30'>Cerca de 1 hora atrás</time>
                        <button title="Deletar Comentário">
                            <Trash size={29}/>
                        </button>
                    </div>
                </header>

                <p>Muito bem devo, parabéns!! </p>
            </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>23</span>
                </button>
            </footer>
        </div>
    )
}