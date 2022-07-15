import ProofContext from '@contexts/ProofContext';
import { ProofInterface } from '@types';
import { generateId } from '@utils';
import { useContext } from 'react';
import ProofInput from './ProofInput';

function Assumption({ proof }: { proof: ProofInterface }) {
  const { mainProof, setMainProof } = useContext(ProofContext);
  const { id } = proof;

  function addProof() {
    function dfsReplace(proof: ProofInterface): ProofInterface {
      return {
        ...proof,
        children: proof.children.map((p) =>
          p.id !== id
            ? dfsReplace(p)
            : {
                ...p,
                rule: 'unknown',
                children: [
                  {
                    id: generateId(),
                    consequence: '',
                    rule: 'Hypo',
                    children: [],
                  },
                ],
              }
        ),
      };
    }

    setMainProof(dfsReplace(mainProof));
  }

  return (
    <div className="flex flex-col items-center justify-end group">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={addProof}
      >
        <div className="h-3">
          {/* <i className="fa-solid fa-plus mb-2"></i> */}
        </div>
        <div className="group-hover:bg-gray-200 w-12 h-0.5 transition duration-200 cursor-pointer"></div>
      </div>
      <ProofInput
        placeholder="Assumption"
        value={proof.consequence}
        id={proof.id}
      />
    </div>
  );
}

export default Assumption;
