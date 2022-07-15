import { useEffect, useState } from 'react'

function Rule() {
  const [input, setInput] = useState('')

  return (
    <div className="w-14 absolute left-44 -translate-y-4">
      <input
        type="text"
        autoFocus
        placeholder="Rule"
        className="border-none focus:outline-none text-center text-2xl rounded-lg dark:text-white bg-inherit w-14"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  )
}

export default Rule
