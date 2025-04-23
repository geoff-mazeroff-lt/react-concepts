import geoffHeadshot from './assets/geoff-headshot.png'
import './index.css'

function App() {
  return (
    <>
        <header>
            <img src={geoffHeadshot} />
            <h1>Geoff Mazeroff</h1>
            <p>Generally likable dude.</p>
        </header>
        <main>
            <p>I'm learning about React.</p>
            <p>Hopefully I figure this out soon...</p>
        </main>
    </>
  );
}

export default App
