import { IUser } from "../../App";
import styles from './UserCard.module.css'
import emailIcon from '../../assets/email.svg';
import phoneIcon from '../../assets/phone.svg';


export const UserCard = ({ user, onClick }: { user: IUser; onClick: (user: IUser) => void; }) => {

  return (
    <div className={styles['user-card']} onClick={() => onClick(user)} >
      <div className={styles['info-wrapper']}>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.contacts}>
          <div className={styles.block}>
            <img src={phoneIcon} />
            <div>{user.phone}</div>
          </div>
          <div className={styles.block}>
            <img src={emailIcon} />
            <div>{user.address}</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}