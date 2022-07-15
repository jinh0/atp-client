import { MutableRefObject } from 'react';

export type RuleType =
  | 'And_I'
  | 'And_E'
  | 'Or_I'
  | 'Or_E'
  | 'Imp_I'
  | 'Imp_E'
  | 'Neg_I'
  | 'Neg_E'
  | 'Raa'
  | 'Hypo'
  | 'unknown';

export interface ProofInterface {
  id: number;
  consequence: string;
  children: ProofInterface[];
  rule: RuleType;
}

export type InputRef = MutableRefObject<HTMLInputElement>;
