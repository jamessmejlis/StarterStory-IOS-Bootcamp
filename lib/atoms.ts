import { atomWithStorage } from 'jotai/utils';

export interface Session {
  id: string;
  date: string;
  title: string;
  image?: string;
  summary?: string;
  facts?: string[];
  furtherImpact?: string;
}

export const sessionsAtom = atomWithStorage<Session[]>('sessions', []);
