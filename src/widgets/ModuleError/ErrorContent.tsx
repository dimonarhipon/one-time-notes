import styles from './ErrorContent.module.scss';

export const ErrorContent = ({ color = '#c5ff69', children = 'Страница не найдена' }: { color?: string, children?: React.ReactNode }) => {
    return <a href='/' className={styles.errorLink} >
        <svg className={styles.errorSvg} viewBox='0 0 480 274'>
            <path d='M183.502 18.0008L87.5021 114C84.2221 117.28 78.7821 117.28 75.5021 114C72.2221 110.72 72.2221 105.28 75.5021 102L171.502 6.00085C174.782 2.72088 180.222 2.72088 183.502 6.00085C186.782 9.28083 186.782 14.7208 183.502 18.0008Z' fill={color} />
            <path d='M183.502 113.999C180.222 117.279 174.782 117.279 171.502 113.999L75.5021 17.9999C72.2221 14.72 72.2221 9.28002 75.5021 6.00005C78.7821 2.72008 84.2221 2.72008 87.5021 6.00005L183.502 101.999C186.782 105.279 186.782 110.719 183.502 113.999Z' fill={color} />
            <path d='M403.502 18.0008L307.502 114C304.222 117.28 298.782 117.28 295.502 114C292.222 110.72 292.222 105.28 295.502 102L391.502 6.00085C394.782 2.72088 400.222 2.72088 403.502 6.00085C406.782 9.28083 406.782 14.7208 403.502 18.0008Z' fill={color} />
            <path d='M403.502 113.999C400.222 117.279 394.782 117.279 391.502 113.999L295.502 17.9999C292.222 14.72 292.222 9.28002 295.502 6.00005C298.782 2.72008 304.222 2.72008 307.502 6.00005L403.502 101.999C406.782 105.279 406.782 110.719 403.502 113.999Z' fill={color} />
            <path d='M4 270H475.004' stroke='#c5ff69' />
        </svg>
        <div className={styles.errorMessege} >
            {children}
        </div>
    </a>;
};