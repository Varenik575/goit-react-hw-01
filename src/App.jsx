import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import  styles from './App.module.css'
import userData from './userData.json'
import friends from './friends.json'
import transactions from './transactions.json'

function App() {
  return (
    <div className={styles.grid}>
    <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends}
      />
<TransactionHistory items={transactions}/>
    </div>
  )
}

export default App
