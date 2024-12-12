const FriendListItem = ({name, avatar, isOnline}) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>Friend status: {isOnline}</p>
        </div>
    )
}

export default FriendListItem;