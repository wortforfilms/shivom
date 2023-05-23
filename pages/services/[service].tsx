import { useRouter } from "next/router"

const Service = () => {
  const router = useRouter()
  const { service } = router.query



  return <div>
    <div className="h-12"></div>
    <h1 className="uppercase p-2">{service}</h1>
    <div className="flex  flex-col gap-4 w-full  p-4">

      {service === 'education' && <div>
        {[
          {
            level: "introduction", chapters: 2, coarse: {
              index: {}, lessons: [

              ]
            }
          },
          {
            level: "beginer", chapters: 2, coarse: {
              index: {
                Introduction: "Welcome to the world of Brahmi! In this coarse, we will embark on an exciting journey to explore the ancient Indian script called Brahmi. Brahmi is a fascinating writing system that dates back thousands of years and has influenced many scripts that we use today. Get ready to learn about its unique characters, their sounds, and the stories they can tell us about the past!",

                matter: [{
                  q: "What is Brahmi?",

                  d: ["What is a writing system?",
                    "The origins of Brahmi",
                    "Fun facts about Brahmi's history",
                  ]
                },
                {
                  q: "Meet the Brahmi Characters",
                  d: ["Introducing the Brahmi characters",
                    "Learning the shapes and forms",
                    "Associating sounds with each character",]
                },
                {
                  q: "Brahmi in Action",
                  d: ["Discover how Brahmi is used to write words and sentences",
                    "Examples of Brahmi inscriptions and manuscripts",
                    "Exploring different styles and variations of Brahmi",]
                },
                {
                  q: "Brahmi and Languages",

                  d: ["Understanding how Brahmi is used to write different languages",
                    "Examples of languages written in Brahmi, such as Sanskrit and Prakrit"]
                },
                {
                  q: "Let's Write in Brahmi!",

                  d: ["Step-by-step guidance on writing your name in Brahmi",
                    "Practicing writing simple words and phrases"]
                },
                {
                  q: "Brahmi in Everyday Life",

                  d: ["Exploring how Brahmi was used in ancient times",
                    "Discovering Brahmi in art, coins, and seals",
                    "Recognizing Brahmi symbols in cultural contexts",
                    "Recognizing Brahmi symbols in botonical {botony} contexts",
                    "Recognizing Brahmi symbols in zoological {zoology} contexts",
                    "Recognizing Brahmi symbols in astronomical {astronomy}  contexts",
                    "Recognizing Brahmi symbols in astrological {astrology} contexts"]
                },
                {
                  q: "Fun Brahmi Activities",

                  d: ["Coloring pages featuring Brahmi characters",
                    "Word search puzzles with Brahmi words",
                    "Creating your own mini Brahmi inscription"]
                },
                ],

                Conclusion: "Congratulations, little explorers! You have completed your journey into the world of Brahmi. You've learned about its fascinating history, its characters, and how it is used to write different languages. Remember, Brahmi is an important part of our heritage, and by understanding it, we can connect with the past and appreciate the rich cultural diversity of our world. Keep exploring, keep learning, and keep embracing the beauty of language!",
                Glossary: "Key terms and their meanings for easy reference",
                Notes: "Note to Parents and Educators",
                Suggestions: "for further exploration and activities to reinforce learning about Brahmi",
                "Resources and references": "for additional information",
                Remarks: "Remember, this book is designed to introduce the concept of Brahmi to kindergarteners in a fun and engaging way. Adapt the content and activities based on the age group and learning abilities of the children. Enjoy the journey of discovering Brahmi together!"
              },
              lessons: []
            }
          },
          { level: "secondary", chapters: 2, coarse: { index: {
            Introduction:"In ancient times, the Brahmi script played a significant role in generating knowledge and fostering advancements in various fields, including astronomy, astrology, healthcare, and society development. Let's explore how Brahmi was used in each of these areas:",
matter:[


  {q: "Astronomy",
  d:["Recording Observations: Brahmi was used to record astronomical observations, such as positions of celestial bodies, eclipses, and comets. These recorded observations allowed astronomers to track and analyze celestial events, study patterns, and make predictions.",
  "Calculations and Formulas: Brahmi facilitated the representation of numerical values, mathematical symbols, and equations used in astronomical calculations. Astronomers used the script to perform complex calculations, develop formulas, and formulate astronomical theories.",]},
  
  {   q:"Astrology",
     d:["Horoscopes and Birth Charts: Brahmi was employed to write horoscopes and birth charts, which are key components of astrology. These charts recorded the positions of celestial bodies at the time of a person's birth, allowing astrologers to interpret and provide insights into an individual's personality traits, life events, and destiny."]
     },
     {q: "Healthcare",
     d:[ "Medical Texts and Treatments: Brahmi was used to write medical texts, such as the Ayurvedic scriptures. These texts contained valuable knowledge about herbs, remedies, and medical treatments. Brahmi script enabled the documentation and transmission of medical knowledge, facilitating the practice of healthcare in ancient times."]},
     
     {q:"Society Development",
     d:["Legal and Administrative Documents: Brahmi was employed in writing legal and administrative documents, such as inscriptions, edicts, and decrees. These documents played a crucial role in governance, ensuring order, and disseminating laws and regulations.",
     "Literary and Philosophical Works: Brahmi facilitated the composition and preservation of literary and philosophical works, including epics, poems, and philosophical treatises. It allowed scholars and thinkers to express their ideas, insights, and wisdom, contributing to the intellectual development of society."]
     }
],
            
            Conclusion:"In all these areas, the Brahmi script served as a medium for capturing, storing, and transmitting knowledge. It provided a means to document observations, theories, formulas, and philosophical concepts, enabling the continuity and development of various fields. The script's widespread usage across different domains contributed to the overall growth and advancement of ancient Indian civilization.",
            
            Remark:"It's important to note that while the Brahmi script played a vital role in generating knowledge in these fields, the accuracy and validity of the information varied depending on the specific context and the evolving understanding of the time. As knowledge progressed and new discoveries were made, subsequent scripts and systems were developed to refine and expand upon the foundations laid by Brahmi."

          }, lessons: [] } },
          { level: "senior", chapters: 2, coarse: { index: {}, lessons: [] } },
          { level: "advAnce", chapters: 2, coarse: { index: {}, lessons: [] } },
          { level: "IOT", chapters: 2, coarse: { index: {}, lessons: [] } },
        ].map((level, index) => {
          return <div key={index} className="p-2 mt-4 rounded-lg shadow-lg  bg-white">
            <h2 className="uppercase">
              {level.level}
            </h2>
            <div className="p-1 mt-2 mb-2">{level.coarse.index.Introduction}</div>
            {level.coarse && level.coarse.index && level.coarse.index.matter && level.coarse.index.matter.map((c: any, index: number) => {
              return <div key={index} className="snakeCase text-sm  p-1">
                {/* {c.q} */}
                <List header={c.q} data={c.d} />
              </div>
            })}
          </div>
        })}
      </div>}

      {
        service === 'mantra(software)' && <Mantra />
      }

      {
        service === 'yantra(hardware)' && <Yantra />
      }
    </div>

  </div>
}


export default Service



const Yantra = () => {
  return <div>
    <h3>
      In ancient India, the concepts of mantra, yantra, and the Brahmi script were interconnected in a way that drew parallels to modern software and hardware systems. Let's explore this analogy:
    </h3>


    <h2>
      Yantra as Hardware:
    </h2>

    <List
      header={"Yantras are geometric diagrams or symbols that represent various aspects of the cosmos, deities, or divine energies. They are considered to be the hardware or physical counterparts to mantras, providing a tangible structure for their manifestation and amplification."}
      data={[
        "Geometry and Symbols: Yantras are meticulously designed using specific geometric shapes, such as triangles, circles, and squares, along with sacred symbols and patterns. These geometries and symbols act as the hardware components, representing specific energies or deities and enabling their interaction.",
        "Material Manifestation: Yantras were often created on physical mediums such as metal plates, paper, or even etched onto stones. These tangible manifestations of the yantras acted as the hardware that provided a focal point for concentration and meditation. Just as hardware devices provide a physical interface for software execution, yantras served as a tangible medium for connecting with the energies represented by the mantras.",
        "Activation and Amplification: Yantras were considered conduits for the energy and power of the associated mantras. Through focused meditation, rituals, and visualization, individuals would activate the yantras, thereby harnessing and amplifying the effects of the corresponding mantras. This activation process can be likened to booting up and utilizing hardware devices in modern technology.",

      ]}
    />


    <div className="mt-4 font-italic ">

      By considering mantras as software and yantras as hardware, ancient Indian spiritual practitioners integrated the realms of sound, script, and symbolism. This holistic approach allowed them to engage in profound spiritual practices and tap into the deeper dimensions of consciousness. The Brahmi script played a vital role in capturing and transmitting these mantras, acting as the bridge between the abstract and the physical.
    </div>
  </div>
}

const Mantra = () => {
  return <div>
    <h3>
      In ancient India, the concepts of mantra, yantra, and the Brahmi script were interconnected in a way that drew parallels to modern software and hardware systems. Let's explore this analogy:
    </h3>
    <h2>
      Mantra as Software:
    </h2>
    <List
      header={"Mantras are sacred chants or sounds that hold spiritual significance. They are considered to be software in the sense that they carry specific vibrations, frequencies, and intentions. Mantras were written and transmitted using the Brahmi script, which served as the medium for capturing and preserving these sacred vibrations."}
      data={[
        "Brahmi Script: The Brahmi script was used to write down mantras in ancient India. It acted as a digital representation of the sound patterns and syllables that formed the mantras. The script facilitated the storage, transmission, and dissemination of mantras from generation to generation, akin to how software code is written and shared today.",
        "Encoding and Decoding: Just as software code is written in a specific programming language, mantras were written in the Brahmi script. Individuals who were trained in mantra recitation could decode these written mantras by understanding the script's characters and their corresponding sounds. They would then recite the mantras, activating the desired spiritual effects.",
        "Functionality and Intent: Mantras were believed to have specific functions and intentions. They were treated as powerful tools for spiritual growth, healing, protection, and manifestation. Similar to software programs designed for specific purposes, mantras were recited or executed with the intention of producing desired effects in the individual's consciousness or external reality."
      ]}
    />

    <div className="mt-4 font-italic ">

      By considering mantras as software and yantras as hardware, ancient Indian spiritual practitioners integrated the realms of sound, script, and symbolism. This holistic approach allowed them to engage in profound spiritual practices and tap into the deeper dimensions of consciousness. The Brahmi script played a vital role in capturing and transmitting these mantras, acting as the bridge between the abstract and the physical.
    </div>
  </div>
}

const List = (props: any) => {
  const { header, data } = props

  return <div>
    <div className="p-2 mb-2">{header}</div>
    <div className="p-1 flex flex-col gap-4">

      {
        data.map((d: any, index: number) => {
          return <li key={index}>{d}</li>
        })
      }
    </div>
  </div>

}

// hardware bones muscles organs 
// software soul mind  heart sound
// tantra mind "decision making"

// https://www.qsearch.pw/se/search?source=ctappex&channel=2482b17d-3da8-45dd-b028-f8c83caaa6d2&product_id=qs1&mid=880bd9c07e62a79e3cddbf3aeb137e14&source_version=1.5.180&spid=99&os_version=11.7.0&sspid=8&browser_version=111.0.5563.64&query=tailwind+rotate
// https://spacert-2.info/api/v1/px?xmlid=opXCMkB6eoAatrZdU5D1S3UgLWCm3WP0dxgGdnfN
// https://1x-bet.in/en?tag=d_50239m_2895c_%5B%5DMS%5B%5Dnull%5B%5DBL%5B%5D06104f973ca019f004087dfdf_d26939_l15031_clickunder