import { ProofInterface } from '@types';
import Assumption from './Assumption';
import ProofInput from './ProofInput';
import Rule from './Rule';

function Proof({ proof }: { proof: ProofInterface }) {
  if (proof.children.length == 0) return <Assumption proof={proof} />;

  const justify =
    proof.children.length == 1 ? 'justify-center' : 'justify-between';
  const childrenStyle = `w-full flex flex-row ${justify}`;

  return (
    <div
      className="flex flex-col items-center justify-end mx-2"
      onKeyDown={() => console.log('hello world')}
    >
      <div className={childrenStyle}>
        {proof.children.map((p, i) => (
          <Proof proof={p} key={i} />
        ))}
      </div>

      <div className="bg-black w-full h-0.5 justify-self-center"></div>

      {/* <div className="flex flex-row w-full items-center justify-between">
        <div className="w-14"></div>
        <div className="bg-black w-44 h-0.5 justify-self-center"></div>
        <Rule />
      </div> */}
      {/* 
      <div className="relative">
        <div className="bg-black w-44 h-0.5 justify-self-center"></div>
        <Rule />
      </div> */}

      <ProofInput
        placeholder="Conclusion"
        value={proof.consequence}
        id={proof.id}
      />
    </div>
  );
}

export default Proof;
