import Card from './Card';
import Button from './Button';

import styles from './ErrorModal.module.css';

function ErrorModal(props) {
    return (
        <div onClick={props.onErrorClick} className={styles.backdrop}>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.errTitle}</h2>
                </header>

                <main className={styles.content}>
                    <p>{props.errMessage}</p>
                </main>

                <footer className={styles.actions}>
                    <Button onClick={props.onErrorClick}>Got it</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;
