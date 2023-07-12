export default function getNote(event:any, styles:any): void {
	event.preventDefault();
	if(event.currentTarget !== null){
		event.currentTarget.classList.add(styles.active);
	}
}
