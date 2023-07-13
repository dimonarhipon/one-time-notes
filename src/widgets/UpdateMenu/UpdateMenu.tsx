import style from './updateMenu.module.scss';
import iconBold from './icons/icon-text-bold.svg';
import iconItalic from './icons/icon-text-italic.svg';
import iconUnderline from './icons/icon-text-underline.svg';
import iconStrikethrough from './icons/icon-text-strikethrough.svg';

export default function UpdateMenu() {
	return (
		<>
			<div className={style.updateMenuLayout}>
				<div className={style.updateMenuButtonsGroup}>
					<button className={style.updateMenuIcon}>
						<img src={iconBold} alt='Bold' />
					</button>
					<button className={style.updateMenuIcon}>
						<img src={iconItalic} alt='Italic' />
					</button>
					<button className={style.updateMenuIcon}>
						<img src={iconUnderline} alt='Underline' />
					</button>
					<button className={style.updateMenuIcon}>
						<img src={iconStrikethrough} alt='Strikethrough' />
					</button>
				</div>
					<button className={style.updateMenuButtonSave}>Скопировать ссылку</button>
			</div>
		</>
	);
}
