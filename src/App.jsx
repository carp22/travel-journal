import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import List from './components/List'
import data from '../data.js'


function App() {
  const article = data.map(place => {
    return <List
      place = {place}
    />
  })

  return (
    <div>
      <Navbar />
      {article}
    </div>
  )
}

export default App
