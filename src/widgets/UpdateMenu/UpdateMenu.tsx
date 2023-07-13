import style from './updateMenu.module.scss';
import iconBold from './icons/icon-text-bold.svg';
import iconItalic from './icons/icon-text-italic.svg';
import iconUnderline from './icons/icon-text-underline.svg';
import iconStrikethrough from './icons/icon-text-strikethrough.svg';

const BOLD = 'Bold';
const ITALIC = 'Italic';
const UNDERLINE = 'Underline';
const STRIKETHROUGH = 'Strikethrough';

export default function UpdateMenu() {
	return (
			<div className={style.layout}>
				<div className={style.buttonsGroup}>
					<button className={style.icon}>
						<img src={iconBold} alt={BOLD} />
					</button>
					<button className={style.icon}>
						<img src={iconItalic} alt={ITALIC} />
					</button>
					<button className={style.icon}>
						<img src={iconUnderline} alt={UNDERLINE} />
					</button>
					<button className={style.icon}>
						<img src={iconStrikethrough} alt={STRIKETHROUGH} />
					</button>
				</div>
					<button className={style.buttonSave}>Скопировать ссылку</button>
			</div>
	);
}
