import UpdateMenu from '../UpdateMenu/UpdateMenu';
import style from './updateNote.module.scss';
import { SvgIcon } from '@/shared';
import { IconName } from '@/shared/contants';

const DELETE_TEXT = 'Delete note';
const TEXTAREAHOLDER = 'Напиши свой секрет здесь...';

type TUpdateProps = {
	className?: string;
};

export default function UpdateNote({ className }: TUpdateProps) {
	return (
		<section className={`${style.updateSection} ${className}`}>
			<div>
				<h3 className={style.title}>Заметка 1</h3>
				<div>
					<button className={style.deleteButton}>
						<SvgIcon name={IconName.Delete} width='24' height='24' ariaLabel={DELETE_TEXT} />
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
