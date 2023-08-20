export type TModalProps = {
	active?: boolean;
	callback?: () => void;
	children?: React.ReactNode;
	noteState?: 'get' | 'open' | 'delete';
	path?: string;
};
