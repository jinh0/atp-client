import ProofContext from '@contexts/ProofContext';
import { InputRef } from '@types';
import {
  ChangeEvent,
  KeyboardEvent,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

function ProofInput({
  id,
  placeholder,
  value = '',
}: {
  id: number;
  placeholder: string;
  value?: string;
}) {
  const [content, setContent] = useState(value);
  const { mainProof, setMainProof } = useContext(ProofContext);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
    setMainProof({
      ...mainProof,
      children: mainProof.children.map((p) =>
        p.id == id ? { ...p, consequence: e.target.value } : p
      ),
    });
  }

  function handleKeyPress(e: KeyboardEvent) {
    if (e.code == 'ArrowUp') {
      console.log('up');
    }
  }

  return (
    <div
      style={{ width: content.length + 1 + 'ch' }}
      className="flex flex-col items-center"
    >
      <input
        type="text"
        autoFocus
        placeholder={placeholder}
        className="w-full focus:outline-none text-center text-2xl rounded-lg dark:text-white bg-inherit p-0"
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default ProofInput;
