import { Box } from '@/elements/box';
import React from 'react';

interface HindiAlphabet {
  alphabet: string;
  word: string;
  emoji: string;
}

export const alphabetData: HindiAlphabet[] = [
  { alphabet: 'अ', word: 'अमर', emoji: '⭐️' },
  { alphabet: 'आ', word: 'आकाश', emoji: '🌌' },
  { alphabet: 'इ', word: 'इंद्रधनुष', emoji: '🌈' },
  { alphabet: 'ई', word: 'ईश्वर', emoji: '🛐' },
  { alphabet: 'उ', word: 'उत्सव', emoji: '🎉' },
  { alphabet: 'ऊ', word: 'ऊर्जा', emoji: '⚡️' },
  { alphabet: 'ऋ', word: 'ऋषि', emoji: '🧙‍♂️' },
  { alphabet: 'ए', word: 'एकता', emoji: '🤝' },
  { alphabet: 'ऐ', word: 'ऐतिहासिक', emoji: '🏰' },
  { alphabet: 'ओ', word: 'ओजस्वी', emoji: '💪' },
  { alphabet: 'औ', word: 'औरत', emoji: '👩' },
  { alphabet: 'क', word: 'कर्म', emoji: '🔨' },
  { alphabet: 'ख', word: 'खुशी', emoji: '😊' },
  { alphabet: 'ग', word: 'गुण', emoji: '✨' },
  { alphabet: 'घ', word: 'घोड़ा', emoji: '🐎' },
  { alphabet: 'ङ', word: 'ङ्कुर', emoji: '🌱' },
  { alphabet: 'च', word: 'चंद्रमा', emoji: '🌙' },
  { alphabet: 'छ', word: 'छाती', emoji: '👕' },
  { alphabet: 'ज', word: 'ज्ञान', emoji: '📚' },
  { alphabet: 'झ', word: 'झूला', emoji: '🎠' },
  { alphabet: 'ञ', word: 'ञानी', emoji: '👵' },
  { alphabet: 'ट', word: 'ट्रेन', emoji: '🚆' },
  { alphabet: 'ठ', word: 'ठंडा', emoji: '❄️' },
  { alphabet: 'ड', word: 'डाकू', emoji: '🦹‍♂️' },
  { alphabet: 'ढ', word: 'ढोलक', emoji: '🥁' },
  { alphabet: 'ण', word: 'णगर', emoji: '🏙' },
  { alphabet: 'त', word: 'तपस्या', emoji: '🔥' },
  { alphabet: 'थ', word: 'थल', emoji: '🌎' },
  { alphabet: 'द', word: 'देश', emoji: '🏞' },
  { alphabet: 'ध', word: 'धरती', emoji: '🌍' },
  { alphabet: 'न', word: 'नमस्ते', emoji: '🙏' },
  { alphabet: 'प', word: 'प्यार', emoji: '❤️' },
  { alphabet: 'फ', word: 'फूल', emoji: '🌸' },
  { alphabet: 'ब', word: 'बादल', emoji: '☁️' },
  { alphabet: 'भ', word: 'भारत', emoji: '🇮🇳' },
  { alphabet: 'म', word: 'मित्र', emoji: '🤝' },
  { alphabet: 'य', word: 'योग', emoji: '🧘' },
  { alphabet: 'र', word: 'रंग', emoji: '🎨' },
  { alphabet: 'ल', word: 'लक्ष्य', emoji: '🎯' },
  { alphabet: 'व', word: 'विजय', emoji: '🏆' },
  { alphabet: 'श', word: 'शान्ति', emoji: '☮️' },
  { alphabet: 'ष', word: 'षड्यंत्र', emoji: '🎢' },
  { alphabet: 'स', word: 'सौभाग्य', emoji: '🍀' },
  { alphabet: 'ह', word: 'हरियाली', emoji: '🌿' },
  { alphabet: 'क्ष', word: 'क्षमा', emoji: '🙏' },
  { alphabet: 'त्र', word: 'त्रिशूल', emoji: '🔱' },
  { alphabet: 'ज्ञ', word: 'ज्ञानी', emoji: '👵' },
];

const HindiAlphabetChart: React.FC = () => {
 

  return (
    <div className="hindi-alphabet-chart sm:p-4 mt-4">
      <table>
        <tbody className='flex flex-row flex-wrap justify-around gap-2'>
          {alphabetData.map((item) => (
            <tr key={item.alphabet} className='flex flex-col bg-white shadow-lg w-[48%] sm:w-48 p-4 text-center'>

               <td className='text-3xl sm:text-7xl'>{item.alphabet}</td>
              <td>{item.word}</td>
              <td className='text-3xl sm:text-7xl'>{item.emoji}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HindiAlphabetChart;



// शोधन	n.	zodhana	removal[of dirt]	
// अपगम	m.	apagama	move-out[appartment]	
// विशेषाभिधान	m.	vizeSAbhidhAna	compilation[list]	
// अभाव	m.	abhAva	absence[non-existence]	
// उच्चारण	n.	uccAraNa	articulation[speech]	
