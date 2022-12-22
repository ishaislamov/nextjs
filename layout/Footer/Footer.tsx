import { Ptag } from '../../components';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props}: FooterProps): JSX.Element => {
    return (
    <footer {...props} className={cn(className, styles.footer)}>
        <Ptag size='p16'>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</Ptag>
        <Ptag size='p16'><a href="/">Пользовательское соглашение</a></Ptag>
        <Ptag size='p16'><a href="/">Политика конфиденциальности</a></Ptag>
    </footer >);
}; 