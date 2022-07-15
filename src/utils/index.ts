import { ProofInterface } from '@types';

export function getProofById(
  proof: ProofInterface,
  id: number
): ProofInterface | null {
  // Leaf
  if (proof.children.length === 0) return proof.id === id ? proof : null;

  // Non-leaf
  if (proof.id === id) return proof;
  return proof.children.reduce<ProofInterface | null>(
    (acc, p) => getProofById(p, id) || acc,
    null
  );
}

let id = 4;
export function generateId() {
  return ++id;
}
