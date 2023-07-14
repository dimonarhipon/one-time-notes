import UpdateMenu from '../UpdateMenu/UpdateMenu';
import style from './updateNote.module.scss';
import iconDelete from './icons/icon-delete.svg';

const DELETE = 'Delete note';
const TEXTAREAHOLDER = 'Напиши свой секрет здесь...';


export default function UpdateNote() {
	return (
	<section className={style.updateSection}>
		<div>
				<h3 className={style.title}>Заметка 1</h3>
				<div>
					<button className={style.deleteButton}>
						<img src={iconDelete} alt={DELETE} />
					</button>
				</div>
			<UpdateMenu />
			<form className={style.textAreaSection}>
				<textarea className={style.textArea} placeholder={TEXTAREAHOLDER}></textarea>
			</form>
		</div>
	</section>
	);
}
