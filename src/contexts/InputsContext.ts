import { InputRef } from '@types'
import { createContext, Dispatch, SetStateAction } from 'react'

const InputsContext = createContext<{
  inputs: InputRef[]
  setInputs: Dispatch<SetStateAction<InputRef[]>>
}>(null)

export default InputsContext
