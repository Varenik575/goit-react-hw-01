import Profile from './components/Profile/Profile'
import './App.css'
import userData from './userData.json'

function App() {
  return (
    <>
    <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <p>hello</p>
    </>
  )
}

export default App
