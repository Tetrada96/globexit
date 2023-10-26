
import { IUser } from '../../App';
import styles from './ModalInfo.module.css';
import closeIcon from '../../assets/close.svg';

export const ModalInfo = ({ user, onClose }: { user?: IUser; onClose: () => void }) => {
    if (!user) return null;
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <div className={styles.name}>{user.name}</div>
                <button className={styles.close} onClick={onClose}>
                    <img src={closeIcon} alt='иконка закрытия карточки' />
                </button>
            </div>
            <div className={styles.body}>
                
                <div className={styles.info}>
                    <div className={styles.row}>
                        <div className={styles.label}>Телефон:</div>
                        <div className={styles.value}>{user.phone}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Почта:</div>
                        <div className={styles.value}>{user.email}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Дата приема:</div>
                        <div className={styles.value}>{user.hire_date}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Должность:</div>
                        <div className={styles.value}>{user.position_name}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Подразделение:</div>
                        <div className={styles.value}>{user.department}</div>
                    </div>
                </div>
                <div className={styles['add-info']}>
                    <div className={styles.label}>Дополнительная информация:</div>
                    <div className={styles['add-value']}>{ user.address}</div>
            </div>
            </div>

        </div>
    )
}