import { useRecoilState } from 'recoil'
import reactLogo from '../assets/react.svg'
import countState from '../recoil/counter'

function Counter() {
  const [count, setCount] = useRecoilState(countState)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src="/vite.svg"
            className="logo inline h-24 p-6"
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo react inline h-24 p-6"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React + Recoil</h1>
      <div className="p-8">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Counter
