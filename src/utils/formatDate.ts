// eslint-disable-next-line import/no-duplicates
import { format, parseISO } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import { ptBR } from 'date-fns/locale';

export function formatDate(date: string): string {
  const formatedDate = format(parseISO(date), 'd MMM yy', {
    locale: ptBR,
  });

  return formatedDate;
}
