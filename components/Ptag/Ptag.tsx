import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';

export const Ptag = ({ size = 'p16', children }: PtagProps): JSX.Element => {
    switch (size) {
        case 'p14':
            return <p className={styles.p14}>{children}</p>;
        case 'p16':
            return <p className={styles.p16}>{children}</p>;
        case 'p18': 
            return <p className={styles.p18}>{children}</p>;
        default:
            return <p className={styles.p16}>{children}</p>;
    }
};