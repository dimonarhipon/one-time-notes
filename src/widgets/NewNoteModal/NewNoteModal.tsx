import Button from '../Button/Button';

import styles from './NewNoteModal.module.scss';

const NewNoteModal = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.title}>Новая заметка</div>
            <button className={styles.buttonClose}>
                <svg
                    width='61' height='61' viewBox='0 0 61 61'>
                    <path d='M38.4464 23.443L23.4429 38.4465C22.9303 38.9591 22.0801 38.9591 21.5675 38.4465C21.0549 37.9339 21.0549 37.0837 21.5675 36.5711L36.571 21.5676C37.0836 21.0549 37.9338 21.0549 38.4464 21.5676C38.959 22.0802 38.959 22.9304 38.4464 23.443Z' fill='black'/>
                    <path d='M38.4464 38.4465C37.9338 38.9591 37.0836 38.9591 36.571 38.4465L21.5675 23.443C21.0549 22.9303 21.0549 22.0801 21.5675 21.5675C22.0801 21.0549 22.9303 21.0549 23.4429 21.5675L38.4464 36.571C38.959 37.0837 38.959 37.9339 38.4464 38.4465Z' fill='black'/>
                </svg>
            </button>
            
            <form className={styles.form}>
                <textarea
                    className={styles.textarea}
                    placeholder='Напиши свой секрет здесь... '
                />
            </form>
            
            <Button/>
        </div>
    );
};

export default NewNoteModal;