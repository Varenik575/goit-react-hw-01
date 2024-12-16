import styles from './Profile.module.css'

const Profile = ({name, tag, location, image, stats}) => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.profile}>
            <img className={styles.avatar} src={image} alt="User avatar"/>
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

    <ul className={styles.statsList}>
        <li className={styles.stat}>
            <span>Followers</span>
            <span className={styles.statNum}>{stats.followers}</span>
        </li>
        <li className={`${styles.stat} ${styles.middleStat}`}>
            <span>Views</span>
            <span className={styles.statNum}>{stats.views}</span>
        </li>
        <li className={styles.stat}>
            <span>Likes</span>
            <span className={styles.statNum}>{stats.likes}</span>
        </li>
    </ul>
</div>
    )

};

export default Profile;
