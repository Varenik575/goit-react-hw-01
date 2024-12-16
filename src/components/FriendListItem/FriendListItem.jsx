import styles from "./FriendListItem.module.css"
import clsx from "clsx";
const FriendListItem = ({name, avatar, isOnline}) => {
    return (
        <li className={styles.friendListItem}>
            <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={styles.name}>{name}</p>
            <p className={clsx(isOnline ? styles.isOnline : styles.isOffline)}>{isOnline ? 'Online' : 'Offline'}</p>
        </li>
    )
}

export default FriendListItem;