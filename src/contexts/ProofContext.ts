import { ProofInterface } from '@types';
import { createContext, Dispatch, SetStateAction } from 'react';

const ProofContext = createContext<{
  mainProof: ProofInterface;
  setMainProof: Dispatch<SetStateAction<ProofInterface>>;
}>(null);
export default ProofContext;
