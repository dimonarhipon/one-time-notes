import { FC } from 'react';

type TIcon = {
	fill?: string;
	stroke?: string;
	width?: string;
	height?: string;
	className?: string;
	name: string;
};

export const SvgIcon: FC<TIcon> = ({
	name,
	className,
	fill,
	stroke,
	width = '20',
	height = '20',
	...props
}) => {
	const Id = `#icon-${name}`;

	return (
		<svg {...props} width={width} height={height} className={className}>
			<use href={Id} fill={fill} stroke={stroke} />
		</svg>
	);
};
