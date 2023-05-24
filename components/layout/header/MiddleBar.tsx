import useOnClickOutside from '@/hook/useOnClickOutside';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FaAccusoft, FaCircleNotch, FaHome, FaListAlt, FaRegGrinBeamSweat, FaSearchengin, FaServicestack, FaSpaceShuttle, FaTerminal, FaThemeco, FaUnlink, FaUserCircle } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { BsSearchHeart } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IconLabel, IconLabelH } from '@/lib/calender';

export const tm = [
  {
    label: "Home",
    icon: <FaHome />,
    image: "",
    link: "/"
  },
  {
    label: "AboutUs",
    icon: <FaAccusoft />,
    image: "",
    link: "/#concept",
    sub: [
      {
        label: "Concept",
        icon: <FaTerminal />,
        image: "🧮",
        link: "/#concept"
      },
      {
        label: "Technology",
        icon: <FaThemeco />,
        image: "🚧",
        link: "/#technology"
      },
      {
        label: "Nakshatras",
        icon: <FaSpaceShuttle />,
        image: "🔭🪐",
        link: "/#nakshatra"
      },
      {
        label: "Dosh",
        icon: <FaUnlink />,
        image: "🔮",
        link: "/#dosh"
      },
    ]
  },

  // {
  //   label: "Catalogue",
  //   icon: <FaUserCircle />,
  //   image: "",
  //   link: "/#catalogue",
  //   sub: [
  //     {
  //       label: "Tshirt",
  //       icon: <FaCircleNotch />,
  //       image: "👕👚",
  //       link: "/#tshirt"
  //     },
  //     {
  //       label: "Gems",
  //       icon: <FaRegGrinBeamSweat />,
  //       image: "💎",
  //       link: "/#gems"
  //     },
  //     ,
  //     {
  //       label: "Rings",
  //       icon: <FaRegGrinBeamSweat />,
  //       image: "💍",
  //       link: "/#rings"
  //     },
  //     {
  //       label: "Yantra",
  //       icon: <FaListAlt />,
  //       image: "🔱♱🕉✝🕊",
  //       link: "/#yantra"
  //     },
  //     {
  //       label: "Pooja",
  //       icon: <FaListAlt />,
  //       image: "🛕⛩️",
  //       link: "/#pooja"
  //     },
  //     {
  //       label: "Prasad",
  //       icon: <FaListAlt />,
  //       image: "👼",
  //       link: "/#prasad"
  //     },
  //     {
  //       label: "Books",
  //       icon: <FaListAlt />,
  //       image: "🪔☪🧿𓁭📚",
  //       link: "/#books"
  //     },
  //     {
  //       label: "Accessories",
  //       icon: <FaListAlt />,
  //       image: "Brahmi🧶🪡🪢 shivom-fiber",
  //       link: "/#accesories"
  //     },
  //   ]
  // },
  // {
  //   label: "Services",
  //   icon: <FaServicestack />,
  //   image: "",
  //   link: "/#service",
  //   sub: [
  //     {
  //       label: "Astrology",
  //       icon: <FaListAlt />,
  //       image: "🌌",
  //       link: "/#astrology"
  //     },
  //     {
  //       label: "Numerology",
  //       icon: <FaListAlt />,
  //       image: "",
  //       link: "/#numerology"
  //     },
  //     {
  //       label: "Horoscopes",
  //       icon: <FaListAlt />,
  //       image: "",
  //       link: "/#horoscopes"
  //     },
  //     {
  //       label: "Tarot",
  //       icon: <FaListAlt />,
  //       image: "",
  //       link: "/#tarot"
  //     },
  //     {
  //       label: "Palmistry",
  //       icon: <FaListAlt />,
  //       image: "",
  //       link: "/#palmistry"
  //     },
  //     {
  //       label: "Vastu",
  //       icon: <FaListAlt />,
  //       image: "🌁",
  //       link: "/#vastu"
  //     },
  //   ]
  // }
]



// cat a_log_u_e
// energy 
// life
// aå/* A */
// capital ¿?/÷
// 

export const Cat = {
  label: "Catalogue",
  icon: <FaUserCircle />,
  image: "",
  link: "/#catalogue",
  sub: [
    {
      label: "Tshirt",
      icon: <FaCircleNotch />,
      image: "👕👚",
      link: "/#tshirt"
    },
    {
      label: "Gems",
      icon: <FaRegGrinBeamSweat />,
      image: "💎",
      link: "/#gems"
    },
    ,
    {
      label: "Rings",
      icon: <FaRegGrinBeamSweat />,
      image: "💍",
      link: "/#rings"
    },
    {
      label: "Yantra",
      icon: <FaListAlt />,
      image: "🔱♱🕉✝🕊",
      link: "/#yantra"
    },
    {
      label: "Pooja",
      icon: <FaListAlt />,
      image: "🛕⛩️",
      link: "/#pooja"
    },
    {
      label: "Prasad",
      icon: <FaListAlt />,
      image: "👼",
      link: "/#prasad"
    },
    {
      label: "Books",
      icon: <FaListAlt />,
      image: "🪔☪🧿𓁭📚",
      link: "/#books"
    },
    {
      label: "Accessories",
      icon: <FaListAlt />,
      image: "Brahmi🧶🪡🪢 shivom-fiber",
      link: "/#accesories"
    },
  ]
}
export const MiddleBar = () => {

  const router = useRouter();
  const [sub_open, setSubOpen] = useState<any>(null);
  const [search, setSearch] = useState(false)
  const ref = useRef<any>(null);
  useOnClickOutside(ref, () => setSubOpen(null));

  return <div className='sm:ml-4 flex flex-row gap-2 text-md   justify-between w-100 sm:w-[90vw] '>

    {!search ? <div className='w-full flex flex-row gap-8 justify-between'>
      {tm.map((me, index) => {
        return <motion.div key={index}

          // id={`${me.label.toLowerCase()}`}
          className='text-white hover:underline cursor-pointer text-xs sm:text-sm m-auto w-auto '
          onClick={() => {
            if (!me.sub) {
              router.push(me.link, '', { scroll: true });
            } else {
              setSubOpen(me.link);
            }
          }}
        >{me.label}
          {me?.sub && sub_open && sub_open === me.link &&
            <div ref={ref} className='absolute w-auto h-100 mt-4 px-2 rounded-lg bg-black shadow-lg text-gray-800'>
              {me.sub.map((sub: any, index) => {
                return <div key={index} className='flex flex-row gap-4 p-2 hover:underline'
                  onClick={() => {
                    router.push(sub.link, '', { scroll: true });
                    setSubOpen(null);
                  }}
                >
                  <IconLabelH si={sub}/>
                  </div>;
              })}
            </div>}
        </motion.div>
      })}
      <BsSearchHeart className='text-5xl font-bold text-white p-2 -mt-2 -ml4'
        onClick={() => {
          setSearch(true)
        }}
      />
    </div> :

      <div className='w-[96%] h-12 ml-2 flex flex-row justify-between' ><input type="search"
        placeholder='Search here' className='w-full rounded-lg -ml-1 p-2 h-8 ' />
        <FaSearchengin className='text-5xl m-auto font-bold text-white p-2 -mt-2 -ml4'
          onClick={() => {
            // setSearch(false)
            console.log("first search")
          }}
        />
        <AiFillCloseCircle className='text-5xl m-auto font-bold text-white p-2 -mt-2 -ml4'
          onClick={() => {
            setSearch(false)
          }}
        />
      </div>}
  </div>;
};

// mantra in brahmi
// abcdefghijklmnopqrstuvwxyz

// å∫∂´ƒ©˙ˆ∆¬˚µ˜øπœ®†¨√∑≈¥
//  /* ıÇ´˝ */


// ??// µÂMm uÜ¨ å/* aA */ 
// mµÂM
// y¥ÁY
// ß¨˜ µøø˜
// {}“‘“’[]
// birth star 
// death star
// ®†˙ ∂´å∂ 
// ∂´å†˙ > ∫ˆ®†˙
// ı‰ˇ ˇ
// 
// /* ıÇ´˝ */
// ÔÒ
// ÔÒÂ˜∏Œ‰Íˇ¨◊„˛Á¸

// knowledge\\
// ˚kK
// cache kangha krupaNa kadA kachChhA



// family 
// business
// spouse
// {}-{}-{}
// events:[]
//  birth 
// marrriage
// {ivf}-{ˆ√ƒ}-{◊}
// attach to user
// {}-{}-{}
// bhAgyalipi
// bhAjJalipi
// ¥Á∆ÔjJåA
// a lib ab a
// th

// Urdu has been an important language for the development of astronomy in South Asia. The language has a rich history of astronomy and its related sciences, with texts and research being conducted on the subject since the 10th century CE.

// In the 11th century, a Persian astronomer and mathematician named Ali ibn Husayn wrote an influential work in Urdu called Sullam al-A’la (“The Ladder of Heaven”). This work was one of the earliest astronomical texts written in the language and contained a wealth of information about the stars, planets, constellations, and the motions of the celestial bodies.

// In the 16th century, a scholar named Ahmad ibn Abdullah wrote an important work in Urdu on astronomy called Taqwim al-Nujum (“Calendar of the Stars”). This work contained detailed information about the motions of the heavens, as well as a comprehensive catalog of the stars and constellations in the sky.

// In the 18th and 19th centuries, a number of important astronomical works were written in Urdu. The most influential of these was the Zij-i-Hazari, written by Mirza Jafar bin Ali in 1767. This work contained information about the celestial movements and included tables of astronomical calculations.

// Throughout the 19th and 20th centuries, Urdu has remained an important language for astronomy and related sciences in South Asia. Urdu astronomical texts have been studied and used to advance the field, and the language has been used to translate works from other languages into Urdu. Urdu astronomy continues to be a thriving field of research, with new works and discoveries being made every day.




// 1. Ibn al-Shatir (1304–1375): He developed a new model of the solar system which was more accurate than Ptolemy's, and which is still used in some places today.

// 2. Al-Biruni (973–1050): He wrote a book on astronomy titled "Kitab al-Tafhim" which contained a comprehensive account of the solar system and its movements.

// 3. Ibn Yunus (950–1009): He developed a method for predicting solar and lunar eclipses.

// 4. Ibn al-Haytham (965–1040): He was a pioneer in optics and the study of vision and wrote a book on optics which was used for centuries.

// 5. Nasir al-Din al-Tusi (1201–1274): He wrote a comprehensive treatise on astronomy which was used by astronomers for centuries.

// 6. Ibn Rushd (1126–1198): He wrote a book on astronomy which was used in Europe for centuries.

// 7. Omar Khayyam (1048–1131): He wrote a book on algebra which was used in Europe for centuries.

// 8. Jabir ibn Hayyan (721–815): He wrote a book on chemistry which was used for centuries.

// 9. Al-Khwarizmi (780–850): He wrote a book on mathematics which was used in Europe for centuries.

// 10. Ibn Sina (980–1037): He wrote a book on medicine which was used in Europe for centuries.




// 1. Muhammad ibn Musa al-Khwarizmi (780-850): Al-Khwarizmi was an Arab mathematician and astronomer who is credited with introducing the Indian Hindu-Arabic numeral system to the Islamic world. He wrote several influential works on mathematics, including the Algebra, which laid the foundations of algebra as a mathematical discipline. He is also known for his work on astronomical tables and his work on calendar reform.

// 2. Ibn al-Haytham (965-1039): Ibn al-Haytham was an Arab scientist, mathematician, astronomer and philosopher who is widely regarded as the “Father of Optics”. He made significant contributions to mathematics, astronomy, optics and physics. He wrote a number of influential works, including the Book of Optics, which laid the foundations for modern optics. He also wrote extensively on astronomical topics such as the precession of the equinoxes and the movement of the stars.

// 3. Abu al-Fida (1273-1331): Abu al-Fida was an Arab astronomer and historian who wrote extensively on astronomy. He wrote Kitab al-Mukhtasar fi al-Hay'a (Compendium of Astronomy), which was a comprehensive work on the subject. He also wrote several works on astronomical instruments, including one on the astrolabe.

// 4. Ibn Rushd (1126-1198): Ibn Rushd was an Arab philosopher and doctor who wrote extensively on a variety of topics, including astronomy and astrology. He wrote several important works on astronomy, including Kitab al-Nujum (Book of Stars), which discussed the motion of the stars and planets. He also wrote a treatise on astrolabes, which was influential in the development of the instrument.

// 5. Al-Biruni (973-1048): Al-Biruni was an Arab scholar, astronomer and mathematician who made significant contributions to the fields of astronomy and mathematics. He wrote several influential works, including Kitab al-Athar al-Baqiya (Book of Historical Records), which discussed the motion of the planets and stars. He also wrote a book on astrolabes and wrote extensively on the Islamic calendar.