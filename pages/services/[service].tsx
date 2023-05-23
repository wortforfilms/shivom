import { useRouter } from "next/router"

const Service = () => {
  const router = useRouter()
  const { service } = router.query



  return <div>
    <div className="h-12"></div>
    <h1 className="uppercase p-2">{service}</h1>
    {/* <BrahmiKaavya/> */}
    <div className="flex  flex-col gap-4 w-full  p-4">

      {service === 'education' && <div>
        {[
          {
            level: "introduction", chapters: 2, coarse: {
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
                }
                ],

                Conclusion: "Congratulations, little explorers! You have completed your journey into the world of Brahmi. You've learned about its fascinating history, its characters, and how it is used to write different languages. Remember, Brahmi is an important part of our heritage, and by understanding it, we can connect with the past and appreciate the rich cultural diversity of our world. Keep exploring, keep learning, and keep embracing the beauty of language!",
                Glossary: "Key terms and their meanings for easy reference",
                Notes: "Note to Parents and Educators",
                Suggestions: "for further exploration and activities to reinforce learning about Brahmi",
                "Resources and references": "for additional information",
                Remarks: "Remember, this book is designed to introduce the concept of Brahmi to kindergarteners in a fun and engaging way. Adapt the content and activities based on the age group and learning abilities of the children. Enjoy the journey of discovering Brahmi together!"
              }, lessons: [

              ]
            }
          },
          {
            level: "beginer", chapters: 2, coarse: {
              index: {
                Introduction: "Welcome to the world of Brahmi! In this coarse, we will embark on an exciting journey to explore the ancient Indian script called Brahmi. Brahmi is a fascinating writing system that dates back thousands of years and has influenced many scripts that we use today. Get ready to learn about its unique characters, their sounds, and the stories they can tell us about the past!",

                matter: [
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
          { level: "senior", chapters: 2, coarse: { index: {


Introduction:"The Brahmi script, in ancient times, played a role in facilitating advanced agricultural activities and knowledge. Here's an exploration of how Brahmi was used in the field of agriculture:",
matter:[

 { q:"Documentation of Agricultural Practices",
  d:["The Brahmi script was utilized to document various agricultural practices, techniques, and knowledge. Farmers and agricultural experts would write down their experiences, observations, and methodologies using Brahmi. This documentation served as a valuable resource for sharing agricultural wisdom and passing it down to future generations."]
  },
  {q:"Crop Cultivation and Management",
  d:["Brahmi enabled the recording of information related to crop cultivation and management. Farmers would document details such as crop varieties, sowing techniques, irrigation methods, soil fertility management, pest control measures, and harvesting practices. These records allowed for the accumulation of knowledge and the refinement of agricultural practices over time."]},
  {
  q:"Seasonal Calendar and Weather Predictions",
  d:["The Brahmi script facilitated the creation of seasonal calendars and weather predictions. Agricultural communities relied on these calendars to schedule and plan their agricultural activities, such as sowing, harvesting, and crop rotation. By observing celestial events and meteorological patterns, astrologers and agricultural experts would generate weather predictions using Brahmi-inscribed texts."]
  },
  {q:"Herbal and Medicinal Plants",
  d:["Brahmi was used to document information about herbal and medicinal plants, their properties, and their uses in agriculture. This knowledge included identifying plants that could enhance soil fertility, repel pests, or provide natural remedies for common agricultural ailments. The script allowed for the preservation and dissemination of such valuable knowledge across generations."]
  },
  {q:"Exchange and Trade",
  d:["Brahmi was employed for writing trade and exchange-related documents, including records of agricultural produce, prices, and transactions. It facilitated the efficient management of agricultural produce, enabling farmers to participate in local and regional markets and engage in trade activities."]
  },

  {
  q:"Agricultural Rituals and Festivals",
    d:["Agricultural rituals and festivals played an important role in ancient agricultural societies. Brahmi was used to document the rituals and associated practices, which were performed to seek blessings for abundant harvests, protection from pests and natural calamities, and overall agricultural prosperity."]
  }
],
Conclusion:"",
Remark:"By utilizing the Brahmi script for agricultural purposes, ancient communities were able to share knowledge, refine practices, and improve their agricultural productivity. The documentation and dissemination of agricultural wisdom using Brahmi contributed to the advancement and sustainability of agricultural practices in ancient India."

          }, lessons: [] } },
          { level: "advAnce", chapters: 2, coarse: { index: {

            Introduction:"The Brahmi script, an ancient Indian writing system, was not directly used for data science, robotics, and aviation in its historical context. However, we can explore how some of the underlying principles and advancements in these fields align with the spirit of Brahmi's contribution to knowledge and its potential implications. Let's discuss the potential advanced uses of Brahmi in modern contexts:",
matter:[
  {

    q:"Data Science",
  d:[  "Text Mining and Natural Language Processing: The principles of Brahmi, such as character representation and language understanding, can be applied to data science techniques. Brahmi's characters could serve as a basis for text mining and natural language processing algorithms, enabling analysis and extraction of meaningful insights from textual data.",
    "Historical Text Analysis: The rich historical texts written in Brahmi could be digitized and analyzed using data science techniques. By applying algorithms to these texts, researchers could uncover patterns, cultural insights, or historical events that can contribute to our understanding of ancient civilizations."
    ]
  },
  {   
   q:"Robotics",
   d:[

     "Symbolic Representation: The Brahmi script, with its unique characters and symbols, can be utilized as a symbolic representation system for programming robots. The script's characters could be mapped to specific commands, actions, or objects, enabling robots to understand and respond to symbolic instructions.",
     "Gesture Recognition: Brahmi's intricate and stylized characters could be used as inspiration for developing gesture recognition systems in robotics. The distinct shapes and patterns of Brahmi characters can serve as a basis for training algorithms to recognize and interpret hand gestures for human-robot interaction."
   ] 
     },
     {q:"Aviation",
  d:[   "Aircraft Identification and Documentation: The Brahmi script could be employed in the identification and documentation of aircraft components, maintenance records, and flight-related information. Incorporating Brahmi characters or their modified forms could provide a unique and recognizable system for labeling and organizing aviation-related data.",
     "Cultural Significance: While not directly related to aviation operations, Brahmi could find use in the aviation industry to honor and celebrate the cultural heritage of ancient India. For example, aircraft liveries, interior designs, or visual elements could incorporate Brahmi-inspired motifs, creating a sense of connection to the rich historical roots."
     ]}
],
            Conclusion:"It's important to note that these potential applications involve adapting and repurposing the fundamental aspects of Brahmi rather than using the script in its original form. Modern technological advancements have created new possibilities for integrating ancient cultural elements into contemporary domains, promoting a fusion of heritage and innovation.",
            
            Remark:"Please bear in mind that while these concepts showcase potential connections between Brahmi and data science, robotics, and aviation, their practical implementation would require significant research, adaptation, and collaboration between experts from relevant fields."

          }, lessons: [] } },
          { level: "IOT", chapters: 2, coarse: { index: {

            Information:"The Brahmi script, as an ancient writing system, was not directly used for creating Internet of Things (IoT) devices in its historical context. However, we can explore how the principles underlying Brahmi, such as communication, information storage, and symbolic representation, align with the concepts and requirements of modern IoT technology. Here are some ways Brahmi can be metaphorically linked to the creation of new IoT devices:",
            matter:[
              {
                q:"Symbolic Representation",
                d:["Brahmi's unique characters and symbols can serve as a basis for creating symbolic representations in IoT devices. Just as Brahmi characters conveyed meaning and represented sounds, IoT devices can utilize symbolic representations to represent and transmit information, commands, or data between connected devices."]
              },
              {
                q:"Communication and Protocol",
                d:["The communication aspect of Brahmi can inspire the development of protocols and standards for IoT communication. The systematic and structured nature of the script can influence the design of efficient data transmission protocols, ensuring reliable and secure communication between IoT devices."]
                
              },
              {
                q:"Data Storage and Encoding",
                d:["Brahmi's role in capturing and preserving knowledge can be linked to data storage and encoding in IoT devices. IoT devices generate vast amounts of data, and encoding and storing that data efficiently is crucial. Brahmi's concepts can inspire innovative approaches for data encoding, compression, and storage in IoT systems."]
                
              },
              {
                q:"Localization and Cultural Integration",
d:["Brahmi's historical and cultural significance can be leveraged in IoT devices to create a sense of connection with the local context. Incorporating Brahmi-inspired designs, symbols, or interfaces in IoT devices can add cultural richness and foster a sense of identity and heritage in the technology."]

              },
              {
                q:"Interdisciplinary Collaboration",
                d:["Just as Brahmi was a collaborative effort involving scholars, linguists, and craftsmen, the creation of new IoT devices can benefit from interdisciplinary collaboration. Drawing from the spirit of Brahmi, experts in various domains such as software development, hardware engineering, design, and user experience can come together to create innovative IoT solutions."] 
              }

            ],

Conclusion:"It's important to note that these connections are metaphorical and conceptual, highlighting the potential synergies between the principles behind Brahmi and the creation of new IoT devices. Implementing these concepts would require adaptation, innovation, and integration with modern technology standards and practices.",

Reamark:"The true value lies in leveraging the cultural and historical aspects of Brahmi to inspire creativity, foster cultural connections, and create a deeper sense of purpose in the design and implementation of IoT devices."
              

          }, lessons: [] } },
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

const BrahmiKaavya=()=>{
  const kavya=[
"ब्राह्मी वर्णमाला की कहानी,",
"विचारों का जन्म स्थानी।",
"अ और अंकित, वर्णों की श्रृंगारी,",
"जैसे काव्य का सुंदर सारी।",
"ब भ और द ड़, भावों की विविधता,",
"अर्थों का संग्रह, सौंदर्य की श्रेष्ठता।",
"च छ और ज झ, विचारों की धारा,",
"संदेशों का समुद्र, पुनर्जीवित करारा।",
"त ठ और ड़ ढ़, शब्दों की मधुरता,",
"वाणी की माला, भाषा की विविधता।",
"न ण और त थ, गति की गतिमयी धारा,",
"भूत, वर्तमान और भविष्य की संचारा।",
"प फ और ब भ, विद्या की प्राचीन वाणी,",
"ज्ञान का संकलन, ज्ञान की अद्भुत कहानी।",
"य र और ल, संगीत की अनुभूति,",
"कविताओं की संगीतमय सृजनशीलता।",
"व श और ष, भाषाओं की समान्यता,",
"विचारों की एकता, विदेशों की पहचानियता।",
"स ह और क्ष, विराम चिन्ह का आधार,",
"वाक्यों की सुव्यवस्था, बोली की अनुशासन चिन्हार।",
"अखरों की ये वर्णमाला,",
"हैं ज्ञान के अनमोल खजाना।",
"ब्राह्मी वर्णमाला की यह ज्योति,",
"आदि से अंत तक ब्रह्माण्ड का मोती।",
  ]

  return <div className="m-auto p-2 " >
    <div className="flex flex-col gap-2 m-auto w-full p-4 bg-white">

    {
      kavya.map((li,index)=>{
        return <div key={index} className={``}>{li}</div>
      })
    }
    </div>
  </div>
}

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
    <div className="p-2 mb-2 font-bold">{header}</div>
    <div className="p-1 flex flex-col gap-4">

      {
        data.map((d: any, index: number) => {
          return <li key={index}>{d}</li>
        })
      }
    </div>
  </div>

}


export const VedicCoarses=()=>{

const vedic={
  Introduction:"Course Structure for Vedic Studies (Starter to Advanced Level):",

matter:[
  {
    q:"Beginner Level",
  d: ["Introduction to the Vedas: Overview of the Vedas, their significance, and historical context.",
   "Basic Sanskrit: Introduction to Sanskrit language and script, pronunciation, and basic grammar.",
   "Vedic Texts: Introduction to selected hymns or passages from Rigveda, focusing on understanding the structure, meter, and language.",
   "Vedic Rituals: Exploration of the rituals mentioned in the Vedas, their symbolism, and their role in ancient society.",
   "Vedic Philosophy: Introduction to the philosophical concepts and ideas found in the Vedas, including the nature of reality, cosmology, and metaphysics."]

},
{

  q:"Intermediate Level",
  d:[
  "Advanced Sanskrit: In-depth study of Sanskrit grammar, syntax, and vocabulary to facilitate reading and understanding of Vedic texts.",
  "Rigveda: Detailed study of selected hymns from Rigveda, focusing on deeper interpretation, linguistic analysis, and contextual understanding.",
  "Vedic Rituals and Sacrifices: Comprehensive exploration of Vedic rituals, including their symbolic meanings, practical aspects, and their relevance in ancient and contemporary contexts.",
  "Vedic Cosmology and Mythology: Study of the cosmological and mythological aspects of the Vedas, including gods and goddesses, creation myths, and allegorical narratives.",
  "Vedic Philosophy and Upanishads: In-depth examination of the philosophical concepts in the Upanishads, such as Brahman, Atman, karma, and moksha.",]
},

{
  q:"Advanced Level",
    d:[
    "Advanced Vedic Texts: Study of selected texts from other Vedic literature like Yajurveda, Samaveda, and Atharvaveda, exploring their unique features and content.",
    "Vedic Commentaries: Analysis of ancient commentaries and interpretations on Vedic texts, including the works of traditional commentators and modern scholars.",
    "Comparative Vedic Studies: Comparative analysis of Vedic texts with other ancient religious and philosophical traditions, such as Buddhism, Jainism, and Greek philosophy.",
    "Vedic Linguistics: Advanced study of Vedic language, including etymology, semantics, and linguistic analysis of Vedic verses.",
    "Research and Dissertation: Encouraging students to undertake independent research projects in a specific area of Vedic studies, culminating in a dissertation or thesis.",]
},
{

  
  q:"Additionally, throughout the course, there can be supplementary topics such as:",
  d:["Vedic Music and Chants: Introduction to Vedic chanting techniques, musical notations, and the significance of sound in Vedic recitations.",
  "Vedic Astrology: Introduction to the basics of Vedic astrology, including the study of planetary movements, birth charts, and their relationship to Vedic concepts.",
  "Vedic Ethics and Social Systems: Examination of ethical principles, social organization, and moral values as reflected in the Vedas.",]
},],

Conclusion:"This course structure provides a progressive pathway for students to develop a comprehensive understanding of Vedic texts, rituals, philosophy, and their cultural and historical significance. It aims to cultivate proficiency in Sanskrit, critical analysis, and independent research skills, enabling students to engage with the rich heritage of Vedic literature and contribute to Vedic studies as scholars and researchers."
}

return <div>
            <div className="p-1 mt-2 mb-2">{vedic.Introduction}</div>

            {vedic.matter.map((c: any, index: number) => {
              return <div key={index} className="snakeCase text-sm  p-1">
                {/* {c.q} */}
                <List header={c.q} data={c.d} />
              </div>
            })}
</div>

}


// hardware bones muscles organs 
// software soul mind  heart sound
// tantra mind "decision making"

// https://www.qsearch.pw/se/search?source=ctappex&channel=2482b17d-3da8-45dd-b028-f8c83caaa6d2&product_id=qs1&mid=880bd9c07e62a79e3cddbf3aeb137e14&source_version=1.5.180&spid=99&os_version=11.7.0&sspid=8&browser_version=111.0.5563.64&query=tailwind+rotate
// https://spacert-2.info/api/v1/px?xmlid=opXCMkB6eoAatrZdU5D1S3UgLWCm3WP0dxgGdnfN
// https://1x-bet.in/en?tag=d_50239m_2895c_%5B%5DMS%5B%5Dnull%5B%5DBL%5B%5D06104f973ca019f004087dfdf_d26939_l15031_clickunder