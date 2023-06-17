import { Brahmiplate } from "@/components/classes/brahmi/Brahmiplate";


export const hindi_to_brahmi = (str: any) => {
  const s = str.split('').map((i: any) => {
    if (i === ' ') {
      return '  ';
    } else {

      return Brahmiplate[i.charCodeAt(0) - 2303];
    }
  });
  return s.join('');
};
