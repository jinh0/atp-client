import ProofContainer from "./ProofContainer"

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white dark:bg-gray-700">
      <div className="w-1/2 h-1/3">
        <h1 className="text-2xl dark:text-white">Automated Theorem Prover</h1>

        <ProofContainer />
      </div>
    </div>
  )
}

export default App
