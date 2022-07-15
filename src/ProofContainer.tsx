import { ProofInterface } from '@types';
import ProofContext from '@contexts/ProofContext';
import { useEffect, useState } from 'react';
import Proof from './Proof';

const DEFAULT_PROOF: ProofInterface = {
  id: 0,
  consequence: 'A -> B',
  rule: 'Imp_I',
  children: [
    {
      id: 1,
      consequence: 'C',
      rule: 'Imp_E',
      children: [
        {
          id: 2,
          consequence: 'B',
          rule: 'Hypo',
          children: [],
        },
        {
          id: 3,
          consequence: 'B -> C',
          rule: 'Hypo',
          children: [],
        },
      ],
    },
  ],
};

function ProofContainer() {
  const [mainProof, setMainProof] = useState<ProofInterface>(DEFAULT_PROOF);

  useEffect(() => {
    console.dir(mainProof);
  }, [mainProof]);

  return (
    <div className="w-full h-full border-2 flex items-center justify-center rounded-xl">
      <ProofContext.Provider value={{ mainProof, setMainProof }}>
        <Proof proof={mainProof} />
      </ProofContext.Provider>
    </div>
  );
}

export default ProofContainer;
