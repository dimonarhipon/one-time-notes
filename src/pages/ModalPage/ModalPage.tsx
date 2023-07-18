import { ModalButton } from '@/widgets/ModalButton/ModalButton';
import { ModalTitle } from '@/widgets/ModalTitle/ModalTitle';
import { ModalTemplate } from '@/widgets/ModalTemplate/ModalTemplate';
import { ScrollBlock } from '@/widgets/ScrollBlock/ScrollBlock';
import { useState } from 'react';
import { DarkLink } from '@/widgets/DarkLink/DarkLink';

import styles from './ModalPage.module.scss';

const STATUS_OPEN = 'open';
const STATUS_CLOSE = 'close';
const STATUS_DELETE = 'delete';

export const ModalPage = () => {
    const [NoteState, SetNote] = useState<'open' | 'close' | 'delete'>('close');
    const [modalState, SetModal] = useState<boolean>(true);

    return <ModalTemplate active={modalState}>
        <div className={styles.navigation_container}>
            <ModalTitle>
                {NoteState === STATUS_OPEN ? 'Заметка будет удалена' : ''}
                {NoteState === STATUS_CLOSE ? 'Заметка получена' : ''}
                {NoteState === STATUS_DELETE ? 'Заметка удалена' : ''}
            </ModalTitle>
            {NoteState === STATUS_OPEN ?
                <svg width='30px' height='30px' viewBox='0 0 1024 1024'
                    xmlns='http://www.w3.org/2000/svg' className={styles.navigation_close_img}
                    onClick={() => SetNote(STATUS_DELETE)}>
                    <path fill='#000000' d='M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 
                    64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 
                    285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z' />
                </svg> : ''}
        </div>
        {NoteState === STATUS_CLOSE ?
            <ModalButton callback={() => SetNote(STATUS_OPEN)}>
                Открыть
            </ModalButton> : ''}

        {NoteState === STATUS_OPEN ?
            <ScrollBlock>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium assumenda saepe, optio dicta porro laudantium ex hic atque illum modi ea provident laborum labore non exercitationem? Quaerat, impedit aut.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta in minus dolores quia ad recusandae asperiores eaque rerum quos. Eveniet reiciendis natus modi nisi dolore ullam consectetur quidem consequuntur voluptatum.                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, obcaecati laudantium. Eligendi dignissimos nemo eaque magnam nobis maiores libero mollitia explicabo, deleniti minima eius nam delectus corporis modi odit animi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus possimus cupiditate perspiciatis obcaecati quae iure repudiandae quam at cum rerum exercitationem eos, hic doloremque, totam corporis aut magni. Officia, aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem distinctio voluptatum at quam eos quisquam aliquam! Repudiandae laborum optio eveniet nesciunt omnis atque similique nihil. Veritatis nam necessitatibus doloribus.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta in minus dolores quia ad recusandae asperiores eaque rerum quos. Eveniet reiciendis natus modi nisi dolore ullam consectetur quidem consequuntur voluptatum.                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, obcaecati laudantium. Eligendi dignissimos nemo eaque magnam nobis maiores libero mollitia explicabo, deleniti minima eius nam delectus corporis modi odit animi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus possimus cupiditate perspiciatis obcaecati quae iure repudiandae quam at cum rerum exercitationem eos, hic doloremque, totam corporis aut magni. Officia, aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem distinctio voluptatum at quam eos quisquam aliquam! Repudiandae laborum optio eveniet nesciunt omnis atque similique nihil. Veritatis nam necessitatibus doloribus.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta in minus dolores quia ad recusandae asperiores eaque rerum quos. Eveniet reiciendis natus modi nisi dolore ullam consectetur quidem consequuntur voluptatum.                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, obcaecati laudantium. Eligendi dignissimos nemo eaque magnam nobis maiores libero mollitia explicabo, deleniti minima eius nam delectus corporis modi odit animi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus possimus cupiditate perspiciatis obcaecati quae iure repudiandae quam at cum rerum exercitationem eos, hic doloremque, totam corporis aut magni. Officia, aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem distinctio voluptatum at quam eos quisquam aliquam! Repudiandae laborum optio eveniet nesciunt omnis atque similique nihil. Veritatis nam necessitatibus doloribus.
            </ScrollBlock> : ''}
        {NoteState === STATUS_OPEN || NoteState === STATUS_DELETE ?
            <DarkLink callback={() => SetModal(false)}>
                Написать заметку
            </DarkLink> : ''}
    </ModalTemplate>;
};
