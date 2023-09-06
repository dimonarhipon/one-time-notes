import style from './updateMenu.module.scss';
import { SvgIcon } from '@/shared';
import { IconName } from '@/shared/contants';

const BOLD = 'Жирный текст';
const ITALIC = 'Курсивынй текст';
const UNDERLINE = 'Подчёркнутый текст';
const STRIKETHROUGH = 'Зачёркнутый текст';

export default function UpdateMenu() {
	return (
		<div className={style.layout}>
			<div className={style.buttonsGroup}>
				<button className={style.icon}>
					<SvgIcon name={IconName.Bold} ariaLabel={BOLD} />
				</button>
				<button className={style.icon}>
					<SvgIcon name={IconName.Italic} ariaLabel={ITALIC}  />
				</button>
				<button className={style.icon}>
					<SvgIcon name={IconName.Underline} ariaLabel={UNDERLINE}  />
				</button>
				<button className={style.icon}>
					<SvgIcon name={IconName.LineThrough} ariaLabel={STRIKETHROUGH}  />
				</button>
			</div>
			<button className={style.buttonSave}>Скопировать ссылку</button>
		</div>
	);
}
