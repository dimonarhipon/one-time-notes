import UpdateMenu from '../UpdateMenu/UpdateMenu';
import style from './updateNote.module.scss';
import iconDelete from './icons/icon-delete.svg';



export default function UpdateNote() {
	return (
	<>
	<section className={style.updateSection}>
		<div>
				<h3 className={style.title}>Заметка 1</h3>
				<div>
					<button className={style.deleteButton}>
						<img src={iconDelete} alt='Delete note' />
					</button>
				</div>
			<UpdateMenu />
			<div className={style.textAreaSection}>
				<textarea className={style.textArea} placeholder='Напиши свой секрет здесь...'></textarea>
			</div>
		</div>
	</section>
	</>

	);
}
