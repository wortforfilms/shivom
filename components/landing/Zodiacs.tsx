import { gold } from "@/sty";
import { motion } from "framer-motion";
import Image from "next/image"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Element_ from "./Element";
import Compass from "../tool/Compass";
import Gyroscope from "../tool/Gyroscope";
import GyroHome from "../tool";
import { Nakshatras } from "./Nakshatras";
import { Nakshatra } from "../kundli";
import { raashi_naam } from "@/data/rishi";
import { hindi_to_brahmi } from "@/util/hindi_to_brahmi";
export const zods = [
  {
    sign: "♈",
    label: "Aries"
  },
  {
    sign: "♉",
    label: "Taurus"
  },
  {
    sign: "♊",
    label: "Gemini"
  },
  {
    sign: "♋",
    label: "Cancer"
  },
  {
    sign: "♌",
    label: "Leo"
  },
  {
    sign: "♍",
    label: "Virgo"
  },
  {
    sign: "♎",
    label: "Libra"
  },
  {
    sign: "♏",
    label: "Scorpio"
  },
  {
    sign: "♐",
    label: "Sagittarius"
  },
  {
    sign: "♑",
    label: "Capricorn"
  },
  {
    sign: "♒",
    label: "Aquarius"
  },
  {
    sign: "♓",
    label: "Pisces"
  },
  {
    sign: "⛎",
    label: "Ophiuchus"
  }
];


export const astro=[
{sh:"खगोलशास्त्र	n.	khagolazAstra	astronomy	BV"},
{sh:"अभिजित्	m.	abhijit	Vega[Alpha Lyrae - Astron.]	"},
{sh:"नक्षत्रविद्या	f.	nakSatravidyA	astronomy	"},
{sh:"ज्योतिःशास्त्र	n.	jyotiHzAstra	astronomy	"},
{sh:"ज्योतिष	n.	jyotiSa	astronomy	"},
{sh:"ज्योतिर्ज्ञ	m.	jyotirjJa	astronomer	"},
{sh:"ज्योतिर्विद्	m.	jyotirvid	astronomer	"},
{sh:"ज्योतिष	adj.	jyotiSa	astronomical	"},
{sh:"नाक्षत्रिक	adj.	nAkSatrika	astronomical	"},
{sh:"तस्दी		tasdI	hexagon[astron.]	"},
{sh:"तस्दी		tasdI	hexagon[astron.]	"},
{sh:"कुत्सयति{कुत्स्}	verb	kutsayati[kuts]	despise[astron.]	"},
{sh:"गैरकंवूल		gairakaMvUla	9thyoga[astron.]	"},
{sh:"खगोल-विद्या	f.	khagola-vidyA	astronomy	"},
{sh:"ज्योतिषविद्या	f.	jyotiSavidyA	astronomy	"},
{sh:"खगोलविद्या	f.	khagolavidyA	astronomy	"},
{sh:"ज्योतिर्विद्या	f.	jyotirvidyA	astronomy	"},
{sh:"गगनयात्रिक	m.	gaganayAtrika	astronaut	"},
{sh:"श्लिकु	m.n.	zliku	astronomy	"},
{sh:"ज्यीतिःशास्त्र	n.	jyItiHzAstra	astronomy	"},
{sh:"नाक्षत्र	m.	nAkSatra	astronomer	"},
{sh:"ज्यौतिषिक	m.	jyautiSika	astronomer	"},
{sh:"लघुसप्तर्षि	m.	laghusaptarSi	UrsaMinor[Astron. Little Bear]	"},
{sh:"ज्योतिष	m.	jyotiSa	astronomer	"},
{sh:"ज्योतिर्मेधातिथि	m.	jyotirmedhAtithi	astronomer	"},
{sh:"ज्योतिषिक	m.	jyotiSika	astronomer	"},
{sh:"ज्योतिर्विद्	adj.	jyotirvid	anastronomer	"},
{sh:"सुगणक	m.	sugaNaka	goodastronomer	"},
{sh:"देवस्वामिन्	m.	devasvAmin	ofanastronomer	"},
{sh:"माण्डव्य	m.	mANDavya	ofanastronomer	"},
{sh:"विष्णुगुप्त	m.	viSNugupta	ofanastronomer	"},
{sh:"श्रुतकीर्ति	m.	zrutakIrti	ofanastronomer	"},
{sh:"सिद्धसेन	m.	siddhasena	ofanastronomer	"},
{sh:"ज्योतिर्गर्ग	m.	jyotirgarga	astronomergarga	"},
{sh:"ज्योतिःसिद्धान्त	m.	jyotiHsiddhAnta	workonastronomy	"},
{sh:"आक्रामति{आक्रम्}	verb	AkrAmati[Akram]	eclipseÃ‚Â[astron.]	"},
{sh:"पतक	m.	pataka	astronomicaltable	"},
{sh:"कारणा	f.	kAraNA	astronomicalperiod	"},
{sh:"गण्ड	m.	gaNDa	astronomicalperiod	"},
{sh:"ज्योतिःपराशर	m.	jyotiHparAzara	astronomerparAzara	"},
{sh:"चक्र	n.	cakra	astronomicalcircle	"},
{sh:"अभिमर्दति{अभिमृद्}	verb	abhimardati[abhimRd]	beinoppositionto[astron.]	"},
{sh:"नाली	f.	nAlI	periodof24minutes[quantum of time - Astronomy]	"},
{sh:"औदयक	m.	audayaka	schoolofastronomers	"},
{sh:"क्षेप	m.	kSepa	astronomicallatitude	"},
{sh:"उपज्योतिष	n.	upajyotiSa	compendiumofastronomy	"},
{sh:"पिण्डिल	m.	piNDila	astrologerorastronomer	"},
{sh:"शुक्ल	m.	zukla	24thoftheastronomical	"},
{sh:"ज्योतिषसंग्रह	m.	jyotiSasaMgraha	wholescienceofastronomy	"},
{sh:"ज्योतिषसङ्ग्रह	m.	jyotiSasaGgraha	wholescienceofastronomy	"},
{sh:"सुकर्मन्	m.	sukarman	7thofthe27astronomical	"},
{sh:"सौभाग्य	n.	saubhAgya	fourthoftheastronomical	"},
{sh:"आर्यभट्ट	m.	AryabhaTTa	nameofrenownedastronomer	"},
{sh:"समाससंहिता	f.	samAsasaMhitA	conciseastronomicalsaMhitA	"},
{sh:"विष्कम्भक	m.	viSkambhaka	particularastronomicalyoga	"},
{sh:"शुभयोग	m.	zubhayoga	particularastronomicalyoga	"},
{sh:"सुगणक	m.	sugaNaka	goodcalculatororastronomer	"},
{sh:"पर्वेश	m.	parveza	regentofanastronomicalnode	"},
{sh:"सिद्ध	m.	siddha	21stoftheastronomicalyogas	"},
{sh:"चाप	m.n.	cApa	kindofastronomicalinstrument	"},
{sh:"गोलयन्त्र	n.	golayantra	kindofastronomicalinstrument	"},
{sh:"सूर्यसिद्धान्त	m.	sUryasiddhAnta	celebratedastronomicaltext-book	"},
{sh:"अभिताडयति{अभितड्}	verb 1	abhitADayati[abhitaD]	eclipsethegreaterpartofadisk[astron.]	"},
{sh:"ग्रहगणित	n.	grahagaNita	astronomicalpartofajyotiHzAstra	"},
{sh:"युग	n.	yuga	periodorastronomicalcycleof5years	"},
{sh:"रौमक	adj.	raumaka	derivedorcomingfromtheastronomerromaka	"},
{sh:"फलकयन्त्र	n.	phalakayantra	astronomicalinstrumentinventedbybhAskara	"},
{sh:"ज्योतिःपितामह	m.	jyotiHpitAmaha	brahmAconsideredasthegrandfatherofastronomy	"},
{sh:"गणित	n.	gaNita	astronomicalorastrologicalpartofajyotiHzAstra	"},
{sh:"लम्ब	m.	lamba	thearcbetweenthepoleofanyplaceandthezenith[Astronomy]	"},
{sh:"मुसल	m.n.	musala	22ndastronomicalyogaordivisionofthemoon'spath	"},
{sh:"करणाब्द	m.	karaNAbda	yearsusedinastronomicalcalculationsi.e.yearsofthesAkaera	"},
{sh:"पारसीविनोद	m.	pArasIvinoda	PersianandArabtermsofastronomyandastrologyexplainedinSanskrit	"},
{sh:"माध्यन्दिन	m.	mAdhyandina	nameofanastronomicalschoolwhofixedthestarting-pointofplanetarymovementsatnoon	"},
{sh:"शतपद	n.	zatapada	astronomicalcirclewithahundreddivisionsforexhibitingthevariousdivisionsofthenakSatras	"},
{sh:"विष्कम्भ	m.	viSkambha	firstofthetwenty-sevenastronomicalperiodscalledyogasortheleadingstarofthefirstlunarmansion	"},

]

const yoga=[
{sh:"मुद्रा	f.	mudrA	seal[Yoga: Mudra]	BV"},
{sh:"सूत्र	n.	sUtra	thread[Yoga: Sutra]	BV"},
{sh:"ध्यान	n.	dhyAna	meditation[Yoga: Dhyana]	BV"},
{sh:"आसन	n.	Asana	seat[Yoga: Asana]	"},
{sh:"शक्ति		zakti	power[Yoga: Shakti]	"},
{sh:"अहिम्सा	f.	ahimsA	nonviolence[Yoga: Ahimsa]	"},
{sh:"आसनंकरोति{कृ}	verb 8	AsanaMkaroti[kR]	makeyogicposture[Yoga]	"},
{sh:"अविद्या	f.	avidyA	spiritualignorance[Yoga: Avidya]	"},
{sh:"प्राण	m.	prANa	life[Yoga: Prana]	"},
{sh:"दृष्टि	m. {f.}	dRSTi	view[Yoga: Drishti]	"},
{sh:"आयुस्	n.	Ayus	life[Yoga: Ayush]	"},
{sh:"चित्त	n.	citta	mind[Yoga: Chitta (or Citta)]	"},
{sh:"सत्य	n.	satya	truth[Yoga: Sutra]	"},
{sh:"प्रकृति		prakRti	nature[Yoga: Prakriti]	"},
{sh:"प्रज्ञा	f.	prajJA	wisdom[Yoga: Prajna]	"},
{sh:"मण्डल	n.	maNDala	circle[Yoga: Mandala]	"},
{sh:"नाडि		nADi	conduit[Yoga: Nadi]	"},
{sh:"गुरु	m.	guru	teacher[Yoga: Guru]	"},
{sh:"तपस्	n.	tapas	penance[Yoga: Tapas]	"},
{sh:"कोश	m.	koza	envelope[Yoga: Kosha]	"},
{sh:"सूत्र	n.	sUtra	aphorism[Yoga: Sutra]	"},
{sh:"ओजस्	n.	ojas	vitality[Yoga: Ojas]	"},
{sh:"पदाङ्गुष्ठ	m.	padAGguSTha	greattoe[yoga: Padangushta (or Padangusta)]	"},
{sh:"याम(Yअम)	m.	yAma(Yama)	restraint[Yoga]	"},
{sh:"तपस्	n.	tapas	austerity[Yoga: Tapas]	"},
{sh:"ओजस्	n.	ojas	splendour[Yoga: Ojas]	"},
{sh:"नियम		niyama	observance[Yoga: Niyama]	"},
{sh:"मन्त्र	m.	mantra	Vedichymn[Yoga: Mantra]	"},
{sh:"संस्कार	m.	saMskAra	impression[Yoga: Samskara]	"},
{sh:"प्रत्याहार	m.	pratyAhAra	withdrawal[Yoga: withdrawal of senses from external objects]	"},
{sh:"अभ्यासिन्	m.	abhyAsin	practitioner[Yoga: Abhyasin]	"},
{sh:"सत्य	n.	satya	truthfulness[Yoga: Satya]	"},
{sh:"कुन्दलिनि-स्हक्ति		kundalini-shakti	serpentpower[Yoga]	"},
{sh:"पिङ्गल	adj.	piGgala	reddishbrown[Yoga: Pingala]	"},
{sh:"म्य्स्तिचल्सोउन्द्स्,हेअर्द्दुरिन्ग्मेदिततिओन्	n.	mysticalsounds,heardduringmeditation	Yoga:Anahata[1]	"},
{sh:"नमस्ते	phrase	namaste	Ibowtoyou.[Yoga: Namaste]	"},
{sh:"आनन्द	m.	Ananda	purehappiness[Yoga: Ananda]	"},
{sh:"प्राण	m.	prANa	breathoflife[Yoga: Prana]	"},
{sh:"प्रच्तितिओनेर्	m.abhyAsin	practitioner	Yoga:Abhyasin[1]	"},
{sh:"पिन्गल-नदि		pingala-nadi	reddishconduit[Yoga: Pingala Nadi]	"},
{sh:"अनागत	adj.	anAgata	notyetarrived[Yoga: Anagata]	"},
{sh:"कुन्दलिनि-स्हक्ति		kundalini-shakti	spiritualenergy[coiled power: Yoga]	"},
{sh:"प्राणायाम		prANAyAma	breathextension[Yoga: Pranayama]	"},
{sh:"नाडि	f.	nADi	anytubeorpipe[Yoga: Nadi]	"},
{sh:"जप	m.	japa	mutteringprayers[Yoga: Japa]	"},
{sh:"गुरु	m.	guru	spiritualteacher[Yoga: Guru]	"},
{sh:"मन्त्र	m.	mantra	formulaofprayer[Yoga: Mantra]	"},
{sh:"अधोमुखश्वानासन	n.	adhomukhazvAnAsana	Downward-FacingDog[Yoga Asana: Adho Mukha Shvanasana (Standing)]	"},
{sh:"निरोध	m.	nirodha	restraint,restriction[Yoga: Nirodha]	"},
{sh:"भक्ति	f.	bhakti	faithorloveordevotion[Yoga]	"},
{sh:"नियम		niyama	practicesofself-restraint[Yoga: Niyama]	"},
{sh:"नाडी	f.	nADI	anytubularorganofthebody[Yoga: Nadi]	"},
{sh:"मन्त्र	m.	mantra	mysticalverseormagicalformula[Yoga: Mantra]	"},
{sh:"अनाहत{हन्}	m.	anAhata[han]	mysticalsoundsheardduringmeditation[Yoga: Anahata]	"},
{sh:"गलीनाषड्वादनतःसप्तवादनंपर्यन्तंयोगासनम्करोति	sent.	galInASaDvAdanataHsaptavAdanaMparyantaMyogAsanamkaroti	Galinadoesyogafrom6o'clocktill7o'clock	"},
{sh:"अभ्यास	m	abhyAsa	constantandsteadypracticewithoutinterruption[Yoga: Abhyasa]	"},
{sh:"समाधि	m.	samAdhi	unionofthesubject(themeditator)andtheobject(ofmeditation)[Yoga: Samadhi]	"},
{sh:"इदानीम्अहंयोगासनंनकरोमिएव|	sent.	idAnImahaMyogAsanaMnakaromieva|	Idon'tdoyogaanymore.	"},
{sh:"रेणुकामहोदयाप्रतिदिनंयोगासनंकरोति|	sent.	reNukAmahodayApratidinaMyogAsanaMkaroti|	Renukadoesyogaeveryday.	"},
{sh:"योगासनविषयेअहम्अतीवनूतनः|	sent.	yogAsanaviSayeahamatIvanUtanaH|	I'macompletebeginneratyoga.	"},
{sh:"योगासनार्थंकिञ्चित्समयःआसक्तिःचएवआवश्यके|	sent.	yogAsanArthaMkiJcitsamayaHAsaktiHcaevaAvazyake|	Yogaisaformofexercisethatrequiresnothingotherthanmotivationandsometime.	"},
{sh:"बिडालासन,मार्जरीआसन	n.	biDAlAsana,mArjarIAsana	Cat[Yoga Asana: Bidalasana, Marjariasana (Kneeling)]	"},
{sh:"धनुरासन	n.	dhanurAsana	Bow[Yoga Asana: Dhanurasana (Reclining)]	"},
{sh:"सुखासन	n.	sukhAsana	Easy[Yoga Asana: Sukhasana (Sitting)]	"},
{sh:"परिघासन	n.	parighAsana	Gate[Yoga Asana: Parighasana (Standing)]	"},
{sh:"भेकासन	n.	bhekAsana	Frog[Yoga Asana: Bhekasana (Reclining)]	"},
{sh:"वृक्षासन	n.	vRkSAsana	Tree[Yoga Asana: Vrikshasana (Standing, Balancing)]	"},
{sh:"मत्स्यासन	n.	matsyAsana	Fish[Yoga Asana: Matsyasana (Reclining )]	"},
{sh:"सिंहासन	n.	siMhAsana	Lion[Yoga Asana: Simhasana (Sitting)]	"},
{sh:"नावासन,नौकासन	n.	nAvAsana,naukAsana	Boat[Yoga Asana: Navasana, Naukasana (Sitting)]	"},
{sh:"कोश	m.	koza	cover[Kosha: Yoga]	"},
{sh:"पाशासन	n.	pAzAsana	Noose[Yoga Asana: Pashasana (Squatting)]	"},
{sh:"पद्मासन	n.	padmAsana	Lotus[Yoga Asana: Padmasana (Sitting)]	"},
{sh:"भुजंगासन	n.	bhujaMgAsana	Cobra[Yoga Asana: Bhujangasana (Reclining)]	"},
{sh:"क्रौञ्चासन	n.	krauJcAsana	Heron[Yoga Asana: Kraunchasana (Sitting)]	"},
{sh:"दण्डासन	n.	daNDAsana	Staff[Yoga Asana: Dandasana (Sitting)]	"},
{sh:"उष्ट्रासन	n.	uSTrAsana	Camel[Yoga Asana: Ushtrasana (Kneeling)]	"},
{sh:"बालासन	n.	bAlAsana	Child[Yoga Asana: Balasana (Sitting)]	"},
{sh:"कपोतासन	n.	kapotAsana	Pigeon[Yoga Asana: Kapotasana (Kneeling)]	"},
{sh:"शलभासन	n.	zalabhAsana	Locust[Yoga Asana: Shalabhasana (Reclining)]	"},
{sh:"शवासन	n.	zavAsana	Corpse[Yoga Asana: Shavasana (Reclining )]	"},
{sh:"हलासन	n.	halAsana	Plough[Yoga Asana: Halasana (Inversion)]	"},
{sh:"लोलासन	n.	lolAsana	Pendant[Yoga Asana: Lolasana (Balancing)]	"},
{sh:"मालासन	n.	mAlAsana	Garland[Yoga Asana: Malasana (Squatting)]	"},
{sh:"टिट्टिभासन	n.	TiTTibhAsana	Firefly[Yoga Asana: Tittibhasana (Balancing)]	"},
{sh:"Fरोग्	n.	Frog	Sitting[Yoga Asana: Mandukasana ()]	"},
{sh:"मयूरासन	n.	mayUrAsana	Peacock[Yoga Asana: Mayurasana (Balancing)]	"},
{sh:"गैरकंवूल		gairakaMvUla	9thyoga[astron.]	"},
{sh:"कूर्मासन	n.	kUrmAsana	Tortoise[Yoga Asana: Kurmasana (Sitting )]	"},
{sh:"ताडासन	n.	tADAsana	Mountain[Yoga Asana: Tadasana (Standing)]	"},
{sh:"त्रिकोणासन,उत्थितत्रिकोणासन	n.	trikoNAsana,utthitatrikoNAsana	Triangle[Yoga Asana: Trikonasana, Utthita Trikonasana (Standing)]	"},
{sh:"वृश्चिकासन	n.	vRzcikAsana	Scorpion[Yoga Asana: Vrischikasana (Inversion)]	"},
{sh:"तम्बीर		tambIra	14thyoga	"},
{sh:"खल्लासर		khallAsara	10thyoga[astrol.]	"},
{sh:"तम्बीर		tambIra	14thyoga	"},
{sh:"योगपति	m.	yogapati	yoga-lord	"},
{sh:"सम्यग्योग	m.	samyagyoga	trueyoga	"},
{sh:"योगनाथ	m.	yoganAtha	yoga-lord	"},
{sh:"योगशब्द	m.	yogazabda	wordyoga	"},
{sh:"योगनाथ	m.	yoganAtha	yoga-lord	"},
{sh:"योगनाथ	m.	yoganAtha	yoga-lord	"},
{sh:"धूम्र	m.	dhUmra	28thyoga	"},
{sh:"योगपति	m.	yogapati	yoga-lord	"},
{sh:"योगपति	m.	yogapati	yoga-lord	"},
{sh:"मकरासन	n.	makarAsana	Crocodile[Yoga Asana: Makarasana (Reclining)]	"},
{sh:"वीरभद्रासनई	n.	vIrabhadrAsanaI	WarriorI[Yoga Asana: Virabhadrasana I (Standing)]	"},
{sh:"अर्धचन्द्रासन	n.	ardhacandrAsana	Halfmoon[Yoga Asana: Ardha Chandrasana (Standing)]	"},
{sh:"गोमुखासन	n.	gomukhAsana	Cow-faced[Yoga Asana: Gomukhasana (Sitting)]	"},
{sh:"मुक्तासन	n.	muktAsana	Liberated[Yoga Asana: Muktasana (Sitting)]	"},
{sh:"अहिंसा	f.	ahiMsA	non-injury[Yoga]	"},
{sh:"भैरवासन,अण्कुशासन	n.	bhairavAsana,aNkuzAsana	Formidable[Yoga Asana: Bhairavasana, Ankushasana (Reclining)]	"},
{sh:"पार्श्वकोणासन	n.	pArzvakoNAsana	Sideangle[Yoga Asana: Parshvakonasana (Standing)]	"},
{sh:"वीरभद्रासनईई	n.	vIrabhadrAsanaII	WarriorII[Yoga Asana: Virabhadrasana II (Standing)]	"},
{sh:"उपविष्टकोणासन	n.	upaviSTakoNAsana	OpenAngle[Yoga Asana: Upavishta Konasana (Sitting)]	"},
{sh:"हठयोग	m.	haThayoga	forcedYoga	"},
{sh:"ञटरपरिवर्तनासन	n.	JaTaraparivartanAsana	Bellytwist[Yoga Asana: Jathara Parivartanasana (Reclining)]	"},
{sh:"वज्रासन	n.	vajrAsana	Thunderbolt[Yoga Asana: Vajrasana (Kneeling)]	"},
{sh:"वाहित्व	n.	vAhitva	yogavAhitva	"},
{sh:"राजकपोतासन	n.	rAjakapotAsana	KingPigeon[Yoga Asana: Rajakapotasana (Sitting)]	"},
{sh:"समकोणासन	n.	samakoNAsana	Sidesplits[Yoga Asana: Samakonasana (Sitting)]	"},
{sh:"योगायते{योगाय}	verb	yogAyate[yogAya]	becomeyoga	"},
{sh:"योग्य	adj.	yogya	fitforyoga	"},
{sh:"योगपत्नी	f.	yogapatnI	wifeofYoga	"},
{sh:"विज्ञानवादिन्	m.	vijJAnavAdin	seeyogAcAra	"},
{sh:"अमृतयोग	m.	amRtayoga	certainyoga	"},
{sh:"प्राचीनयोग	m.	prAcInayoga	ancientyoga	"},
{sh:"कर्णपीडासन	n.	karNapIDAsana	Ear-pressing[Yoga Asana: Karnapidasana (Inversion)]	"},
{sh:"गरुडासन	n.	garuDAsana	Garuda|Eagle[Yoga Asana: Garudasana (Standing, Balancing)]	"},
{sh:"जानुशीर्षासन	n.	jAnuzIrSAsana	Head-to-Knee[Yoga Asana: Janusirsasana (Sitting)]	"},
{sh:"संयतेन्द्रिय	adj.	saMyatendriya	adeptatyoga	"},
{sh:"समस्थिति	f.	samasthiti	MountainPose[Yoga Pose]	"},
{sh:"अञ्जनेयासन	n.	aJjaneyAsana	CrescentMoon[Yoga Asana: Anjaneyasana (Standing)]	"},
{sh:"योगत्व	n.	yogatva	stateofyoga	"},
{sh:"कुत्थ		kuttha	fifteenthyoga	"},
{sh:"योगशिक्षा	f.	yogazikSA	yogaeducation	"},
{sh:"योगमातृ	f.	yogamAtR	motherofyoga	"},
{sh:"सुप्तपादाङ्गुष्ठासन	n.	suptapAdAGguSThAsana	Bigtoesupine[Yoga Asana: Supta Padangusthasana (Reclining)]	"},
{sh:"विपरीतदण्डासन	n.	viparItadaNDAsana	InvertedStaff[Yoga Asana: Viparita Dandasana (Inversion)]	"},
{sh:"सुर्यनमस्कार	n.	suryanamaskAra	SunSalutation[Yoga Asana: Surya Namaskar (Standing)]	"},
{sh:"दुर्वासासन	n.	durvAsAsana	Durvasa'sPose[Yoga Asana: Durvasasana (Standing, Balancing)]	"},
{sh:"सालम्बसर्वाङ्गासन	n.	sAlambasarvAGgAsana	ShoulderStand[Yoga Asana: Sarvangasana (Inversion)]	"},
{sh:"गर्भासन	n.	garbhAsana	EmbryoinWomb[Yoga Asana: Garbha Pindasana (Sitting )]	"},
{sh:"मरीच्यासन	n.	marIcyAsana	Marichi'sPose[Yoga Asana: Marichyasana (Sitting)]	"},
{sh:"हनुमनासन	n.	hanumanAsana	Hanuman'sPose[Yoga Asana: Hanumanasana (Sitting)]	"},
{sh:"योगविद्या	f.	yogavidyA	scienceofYoga	"},
{sh:"सिद्धि	f.	siddhi	particularyoga	"},
{sh:"उत्पाटयोग	m.	utpATayoga	particularyoga	"},
{sh:"तुलासन	n.	tulAsana	Balance,Scales[Yoga Asana: Tulasana (Balancing)]	"},
{sh:"षडष्टक	n.	SaDaSTaka	particularyoga	"},
{sh:"योगस्थ	adj.	yogastha	absorbedinYoga	"},
{sh:"योगयुक्त	adj.	yogayukta	absorbedinyoga	"},
{sh:"योग	m.	yoga	Yogapersonified	"},
{sh:"विपरीतवीरभद्रासन	n.	viparItavIrabhadrAsana	ReversedWarrior[Yoga Asana: Viparita, Virabhadrasana (Standing)]	"},
{sh:"कौण्डिन्यसन	n.	kauNDinyasana	Kaundinya'spose[Yoga Asana: Kaundinyasana (Balancing)]	"},
{sh:"योगानुशासन	n.	yogAnuzAsana	Yoga-instruction	"},
{sh:"योगानुशासन	n.	yogAnuzAsana	Yoga-instruction	"},
{sh:"योगानुशासन	n.	yogAnuzAsana	Yoga-instruction	"},
{sh:"योगदान	n.	yogadAna	giftoftheYoga	"},
{sh:"संयोग	adj.	saMyoga	possessedofyoga	"},
{sh:"पुष्कर	m.	puSkara	inauspiciousyoga	"},
{sh:"योगरथ	m.	yogaratha	yogaasavehicle	"},
{sh:"पिञ्चमयूरासन	n.	piJcamayUrAsana	FeatheredPeacock[Yoga Asana: Pincha Mayurasana (Balancing)]	"},
{sh:"योगतत्त्व	n.	yogatattva	principleofyoga	"},
{sh:"ऊर्ध्वमुखश्वानासन	n.	UrdhvamukhazvAnAsana	Upward-FacingDog[Yoga Asana: Urdhva Mukha Shvanasana (Reclining)]	"},
{sh:"योगशरीरिन्	adj.	yogazarIrin	whosebodyisYoga	"},
{sh:"योगसंसिद्धि	f.	yogasaMsiddhi	perfectioninYoga	"},
{sh:"योगस्वामिन्	m.	yogasvAmin	masterintheYoga	"},
{sh:"भरद्वाजासन	n.	bharadvAjAsana	Bharadvaja'stwist[Yoga Asana: Bharadvajasana (Sitting)]	"},
{sh:"योगानन्द	m.	yogAnanda	delightoftheYoga	"},
{sh:"उत्कटासन	n.	utkaTAsana	AwkwardorPowerful[Yoga Asana: Utkatasana (Standing)]	"},
{sh:"योगैश्वर्य	n.	yogaizvarya	masteryoftheYoga	"},
{sh:"पश्चिमोत्तानासन	n.	pazcimottAnAsana	SeatedForwardBend[Yoga Asana: Paschimottanasana (Sitting)]	"},
{sh:"योगेश्वरत्व	n.	yogezvaratva	masteryoftheYoga	"},
{sh:"योगपारङ्ग	m.	yogapAraGga	conversantwithYoga	"},
{sh:"योगपथ	m.	yogapatha	roadleadingtoYoga	"},
{sh:"साङ्ख्ययोग	n.	sAGkhyayoga	sAMkhyaandtheYoga	"},
{sh:"पार्श्वोत्तनासन	n.	pArzvottanAsana	Intensesidestretch[Yoga Asana: Parshvottanasana (Standing)]	"},
{sh:"भुजपीडासन	n.	bhujapIDAsana	Arm-pressingposture[Yoga Asana: Bhujapidasana (Balancing)]	"},
{sh:"अर्धनाकुल	n.	ardhanAkula	kindofyogaposture	"},
{sh:"कुरुक्षेत्रिन्	adj.	kurukSetrin	andthreeyogasoccur	"},
{sh:"योगविद्या	f.	yogavidyA	knowledgeoftheYoga	"},
{sh:"उत्तानासन	n.	uttAnAsana	StandingForwardBend[Yoga Asana: Uttanasana (Standing)]	"},
{sh:"स्वस्तिकसन	n.	svastikasana	AuspiciousLuckymark[Yoga Asana: Svastikasana (Sitting)]	"},
{sh:"सदायोगिन्	adj.	sadAyogin	alwayspractisingyoga	"},
{sh:"योगयुक्ति	f.	yogayukti	beingabsorbedinyoga	"},
{sh:"योगचार	m.	yogacAra	observanceoftheYoga	"},
{sh:"नक्ल	n.	nakla	nameofthefifthyoga	"},
{sh:"विष्कम्भ	m.	viSkambha	particularyoga-posture	"},
{sh:"विष्कम्भ	m.	viSkambha	particularyoga-posture	"},
{sh:"विष्कम्भ	m.	viSkambha	particularyoga-posture	"},
{sh:"वीरासन,ध्यानवीरासन	n.	vIrAsana,dhyAnavIrAsana	Hero,Hero'sMeditation[Yoga Asana: Virasana (Kneeling)]	"},
{sh:"योगीयते{योगीय}	verb	yogIyate[yogIya]	regardortreatasyoga	"},
{sh:"योगधर्मिन्	adj.	yogadharmin	doinghomagetotheYoga	"},
{sh:"योगविद्	adj.	yogavid	conversantwiththeyoga	"},
{sh:"पातञ्जल	n.	pAtaJjala	YogasystemofpataJjali	"},
{sh:"प्रसारितपादोत्तानासन	n.	prasAritapAdottAnAsana	WideStanceForwardBend[Yoga Asana: Prasarita Padottanasana (Standing)]	"},
{sh:"ज्ञान	n.	jJAna	knowledgeaboutanything[Jnana: Yoga]	"},
{sh:"हठयोगिन्	m.	haThayogin	adherentofthehathayoga	"},
{sh:"शीर्षासन	n.	zIrSAsana	Headstand,YogaHeadstand[Yoga Asana: Shirshasana (Inversion)]	"},
{sh:"गोरक्षासन	n.	gorakSAsana	CowherdGorakhnath'spose[Yoga Asana: Gorakshasana ()]	"},
{sh:"मृत्युसंयमन	n.	mRtyusaMyamana	nameoftwoyogapostures	"},
{sh:"सेतुबन्धसर्वाङ्गासन	n.	setubandhasarvAGgAsana	Shouldersupportedbridge[Yoga Asana: Setu Bandha Sarvangasana (Inversion)]	"},
{sh:"ऊर्ध्वधनुरासन,चक्रासन	n.	UrdhvadhanurAsana,cakrAsana	Upwards-facingbow,wheel[Yoga Asana: Urdhva Dhanurasana (Inversion)]	"},
{sh:"शीर्षासन	n.	zIrSAsana	Headstand,YogaHeadstand[Yoga Asana: Shirshasana (Inversion)]	"},
{sh:"योगसिद्ध	adj.	yogasiddha	perfectedbymeansofYoga	"},
{sh:"योगराज	m.	yogarAja	kingormasterintheYoga	"},
{sh:"समस्थान	n.	samasthAna	particularpostureinyoga	"},
{sh:"नागदन्तक	n.	nAgadantaka	particularpostureinyoga	"},
{sh:"योगाञ्जन	n.	yogAJjana	Yogaasahealingointment	"},
{sh:"जानुनिकुञ्चन	n.	jAnunikuJcana	particularpostureinyoga	"},
{sh:"टिट्टिभासन	n.	TiTTibhAsana	particularpostureinyoga	"},
{sh:"सिद्धासन	n.	siddhAsana	Accomplished,Adept'sPose[Yoga Asana: Siddhasana (men), Siddha Yoni Asana (women) (Sitting)]	"},
{sh:"दण्डपद्मासन	n.	daNDapadmAsana	particularpostureinyoga	"},
{sh:"योगिन्	m.	yogin	followeroftheyogasystem	"},
{sh:"योग	m.	yoga	followeroftheyogasystem	"},
{sh:"योगेन्द्र	m.	yogendra	masteroradeptintheyoga	"},
{sh:"योगेश्वर	m.	yogezvara	masteroradeptintheyoga	"},
{sh:"वसिष्ठासन	n.	vasiSThAsana	Vasishta'spose,Sideplank[Yoga Asana: Vasishtasana (Balancing)]	"},
{sh:"बद्धकोणासन	n.	baddhakoNAsana	Boundangle,Cobbler'spose[Yoga Asana: Baddha Konasana (Sitting)]	"},
{sh:"भद्रयोग	m.	bhadrayoga	particularastrologicalyoga	"},
{sh:"वियोग	m.	viyoga	particularastrologicalyoga	"},
{sh:"योगमूर्तिधर	m.	yogamUrtidhara	bearingtheformoftheyoga	"},
{sh:"विष्कम्भक	m.	viSkambhaka	particularastronomicalyoga	"},
{sh:"विष्णुशृङ्खल	m.	viSNuzRGkhala	particularastrologicalyoga	"},
{sh:"शुभयोग	m.	zubhayoga	particularastronomicalyoga	"},
{sh:"शुक्र	m.	zukra	particularastrologicalyoga	"},
{sh:"चतुरङ्गदण्डासन	n.	caturaGgadaNDAsana	Four-LimbedStaff,LowPlank[Yoga Asana: Chaturanga Dandasana (Reclining)]	"},
{sh:"योगवासिष्ठीय	adj.	yogavAsiSThIya	relatingtotheyoga-vAsiSTha	"},
{sh:"योगवासिष्ठीय	adj.	yogavAsiSThIya	relatingtotheyoga-vAsiSTha	"},
{sh:"योगवासिष्ठीय	adj.	yogavAsiSThIya	relatingtotheyoga-vAsiSTha	"},
{sh:"योगेश्वरी	f.	yogezvarI	mistressoradeptintheyoga	"},
{sh:"आयुर्वेद	m.	Ayurveda	scienceofhealthormedicine[Yoga]	"},
{sh:"योगशास्त्र	n.	yogazAstra	anyworkontheYogadoctrine	"},
{sh:"चौर्यविद्या	f.	cauryavidyA	treatiseascribedtoyogAcArya	"},
{sh:"योगविद्	m.	yogavid	followeroftheYogadoctrines	"},
{sh:"सिद्ध	m.	siddha	21stoftheastronomicalyogas	"},
{sh:"महायोगेश्वर	m.	mahAyogezvara	greatmasteroftheyogasystem	"},
{sh:"शुभाशुभयोग	m.	zubhAzubhayoga	auspiciousorinauspiciousyoga	"},
{sh:"योगाङ्ग	n.	yogAGga	constituentorpartoftheYoga	"},
{sh:"अष्टावक्रासन	n.	aSTAvakrAsana	Ashtavakra'spose,Eight-angled[Yoga Asana: Astavakrasana (Balancing)]	"},
{sh:"योगदान	n.	yogadAna	communicatingtheYogadoctrine	"},
{sh:"योगाग्निमय	adj.	yogAgnimaya	filledwiththefireoftheYoga	"},
{sh:"साङ्ख्ययोगवत्	adj.	sAGkhyayogavat	acquaintedwithsAMkhyaandYoga	"},
{sh:"साङ्ख्ययोग	m.	sAGkhyayoga	adherentofthesAMkhyaandyoga	"},
{sh:"योगयुज्	adj.	yogayuj	onewhohasgivenhimselftoyoga	"},
{sh:"साङ्ख्ययोग	m.	sAGkhyayoga	so-calledtheisticalsAMkhya-yoga	"},
{sh:"साङ्ख्ययोग	m.	sAGkhyayoga	so-calledtheisticalsAMkhya-yoga	"},
{sh:"योगानुशासन	n.	yogAnuzAsana	doctrineoftheYogabypataJjali	"},
{sh:"नटराजासन	n.	naTarAjAsana	LordoftheDanceNataraja'sPose[Yoga Asana: Natarajasana (Standing)]	"},
{sh:"चतुरशीतियोगाध्याय	m.	caturazItiyogAdhyAya	containing84chaptersontheyoga	"},
{sh:"विपरीतकरणि	n.	viparItakaraNi	InvertedpracticeLegsupthewall[Yoga Asana: Viparita Karani (Inversion)]	"},
{sh:"अनन्तासन	n.	anantAsana	Ananta'spose,Vishnu'sCouchpose[Yoga Asana: Anantasana (Reclining)]	"},
{sh:"प्रातःकालेअहंप्रतिदिनंयोगासनंकरोमि।		prAtaHkAleahaMpratidinaMyogAsanaMkaromi।	Inthemorning,Idoyogaeveryday.	"},
{sh:"वैधृति	f.	vaidhRti	yogastarofthe27thlunarmansion	"},
{sh:"आकर्णधनुरासन	n.	AkarNadhanurAsana	Shootingbow,Archer,Bowandarrow[Yoga Asana: Akarna Dhanurasana (Sitting)]	"},
{sh:"अष्टाङ्गनमस्कार	n.	aSTAGganamaskAra	Eight-LimbedSalutationCaterpillar[Yoga Asana: Ashtanga Namaskara (Reclining)]	"},
{sh:"यौगिक	adj.	yaugika	relatingtoorderivedfromtheyoga	"},
{sh:"आयुष्मत्	m.	AyuSmat	yogastarinthethirdlunarmansion	"},
{sh:"योगनिद्रासन	n.	yoganidrAsana	Yoganidra,Yogicsleep,NooseMudra[Yoga Asana: Yoganidrasana (Reclining)]	"},
{sh:"अधोमुखवृक्षासन	n.	adhomukhavRkSAsana	Downward-FacingTree,YogaHandstand[Yoga Asana: Adho Mukha Vrikshasana (Balancing)]	"},
{sh:"अधोमुखवृक्षासन	n.	adhomukhavRkSAsana	Downward-FacingTree,YogaHandstand[Yoga Asana: Adho Mukha Vrikshasana (Balancing)]	"},
{sh:"योगनिद्रासन	n.	yoganidrAsana	Yoganidra,Yogicsleep,NooseMudra[Yoga Asana: Yoganidrasana (Reclining)]	"},
{sh:"मत्स्येन्द्रासन	n.	matsyendrAsana	LordoftheFishesMatsyendra'spose[Yoga Asana: Matsyendrasana (Sitting)]	"},
{sh:"योगनिद्रासन	n.	yoganidrAsana	Yoganidra,Yogicsleep,NooseMudra[Yoga Asana: Yoganidrasana (Reclining)]	"},
{sh:"मधुमती	f.	madhumatI	particularstepordegreeintheyoga	"},
{sh:"षड्योग	m.	SaDyoga	sixwaysormethodspractisedinyoga	"},
{sh:"क्रियायोग	m.	kriyAyoga	practicalformoftheyogaphilosophy	"},
{sh:"स्थितासन	n.	sthitAsana	5standingyogaposturescollectively	"},
{sh:"साङ्ख्ययोगवदिन्	m.	sAGkhyayogavadin	adherentofthetheisticalsAMkhya-yoga	"},
{sh:"साङ्ख्ययोगवदिन्	m.	sAGkhyayogavadin	adherentofthetheisticalsAMkhya-yoga	"},
{sh:"आभास	m.	AbhAsa	immanentaspectoftheultimatereality[Yoga: Abhasa]	"},
{sh:"बकासन,ककासन	n.	bakAsana,kakAsana	Crane(armsstraight),Crow(armsbent)[Yoga Asana: Bakasana, Kakasana (Balancing)]	"},
{sh:"रूढयोग	adj.	rUDhayoga	onewhoseyogaordevotionhasincreased	"},
{sh:"पातञ्जल	m.	pAtaJjala	followeroftheyogasystemofpataJjali	"},
{sh:"योगाचार्य	m.	yogAcArya	teacheroftheYogasystemofphilosophy	"},
{sh:"योगमय	adj.	yogamaya	resultingfromself-concentrationoryoga	"},
{sh:"यौग	m.	yauga	followeroftheyogasystemofphilosophy	"},
{sh:"हठयोग	m.	haThayoga	kindofforcedyogaorabstractmeditation	"},
{sh:"षट्कर्मन्	n.	SaTkarman	sixactsbelongingtothepracticeofyoga	"},
{sh:"योगर्द्धिरूपवत्	adj.	yogarddhirUpavat	havingtheembodiedformoftheperfectyoga	"},
{sh:"योगज	adj.	yogaja	producedbyorarisingfromyogaormeditation	"},
{sh:"योगवत्	adj.	yogavat	onewhoapplieshimselftocontemplationoryoga	"},
{sh:"ज्ञानयोग	m.	jJAnayoga	yogaasbasedontheacquisitionoftrueknowledge	"},
{sh:"योगपातञ्जल	m.	yogapAtaJjala	followerofpataJjaliasteacheroftheyogadoctrine	"},
{sh:"मुसल	m.n.	musala	22ndastronomicalyogaordivisionofthemoon'spath	"},
{sh:"योगात्मन्	adj.	yogAtman	whosesouloressenceisYogaorwhofixeshismindonYoga	"},
{sh:"योगात्मन्	adj.	yogAtman	whosesouloressenceisYogaorwhofixeshismindonYoga	"},
{sh:"आयुष्मत्	m.	AyuSmat	thirdofthetwenty-sevenyogasordivisionsoftheecliptic	"},
{sh:"योग	m.	yoga	anysimpleactorriteconducivetoyogaorabstractmeditation	"},
{sh:"उत्थितहस्तपादाङ्गुष्ठासन	n.	utthitahastapAdAGguSThAsana	StandingBigToeHold(I:legtotheside.I:legtothefront)[Yoga Asana: Utthita Hastapadangusthasana (Standing)]	"},
{sh:"योगसूत्र	n.	yogasUtra	aphorismsoftheYogasystemofphilosophyascribedtopataJjali	"},
{sh:"स्वाध्याय	m.	svAdhyAya	repetitionorrecitationofthevedainalowvoicetoone'sself[Yoga]	"},
{sh:"योगभ्रष्ट	adj.	yogabhraSTa	onewhohasfallenfromthepracticeofyogaorself-concentration	"},
{sh:"संविद्	f.	saMvid	particularstageofyogatobeattainedbyretentionofthebreath	"},
{sh:"साग्रन्थालयतःयोगासनचित्रमुद्रिकांस्वीकृत्यतस्याःअभ्यासंकर्तुम्आरब्धवती|		sAgranthAlayataHyogAsanacitramudrikAMsvIkRtyatasyAHabhyAsaMkartumArabdhavatI|	Fromthelibrary,sheborrowedaYogaDVDandstartedherpractice.	"},
{sh:"योगसमाधि	m.	yogasamAdhi	absorptionofthemindinprofoundmeditationpeculiartotheyogasystem	"},
{sh:"योगासन	n.	yogAsana	modeofsittingsuitedtoprofoundmeditationorsimilartothatoftheyoga	"},
{sh:"त्रिविक्रमासन	n.	trivikramAsana	Trivikrama'spose,Standingsplits,SuptaTrivikramasana(recliningvariant)[Yoga Asana: Trivikramasana (Standing, Balancing)]	"},
{sh:"विष्कम्भ	m.	viSkambha	firstofthetwenty-sevenastronomicalperiodscalledyogasortheleadingstarofthefirstlunarmansion	"},
{sh:"पिङ्ग	m.	piGga	tubularvesselofthehumanbodywhichaccordingtotheyogasystemisthechannelofrespirationandcirculationforoneside	"},
{sh:""},
]

const avidyA=[

{sh:"अविद्या	f.	avidyA	spiritualignorance[Yoga: Avidya]"},	
{sh:"अविद्या	f.	avidyA	ignorance	"},
{sh:"अविद्यमान	adj.	avidyamAna	absent[not existing]	"},
{sh:"अविद्या	f.	avidyA	ignorancetogetherwithnon-existence	"},
{sh:"अविद्य	adj.	avidya	unwise	"},
{sh:"अविद्य	adj.	avidya	unlearned	"},
{sh:"अविद्य	adj.	avidya	noteducated	"},
{sh:"अविद्य	adj.	avidya	foolish	"},
{sh:"आविध्य	ind.	Avidhya	havingpierced	"},
{sh:"अविध्य	adj.	avidhya	invulnerable	"},
{sh:"अविध्य	adj.	avidhya	nottobepiercedorwounded	"},
{sh:"आविद्यते{आविद्}	verb pass.	Avidyate[Avid]	toexist	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	agitate	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	excite	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	stirup	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	swing	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	pinon	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	breakÃ‚Â	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	pierce	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	hit	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	wound	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	shootat	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	pushawayorout	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	driveorscareaway	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	flingaway	"},
{sh:"आविध्यति{आव्यध्}	verb	Avidhyati[Avyadh]	throwin	"},
{sh:"अविद्यामय	adj.	avidyAmaya	consistingofignorance	"},
{sh:"अविद्यमान	adj.	avidyamAna	notpresentorexistent	"},
{sh:"अविद्यमानता	f.	avidyamAnatA	notbeingpresent	"},
{sh:"अविद्यमानवत्	ind.	avidyamAnavat	asifnotbeingpresent	"},
]

//dot tree null nill neel zero"},
export const Zodiacs = (props:any) => {
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)

const router=useRouter()

  return <div className="flex flex-col w-full h-full sm:h-full min-h-[100vh] mt-6  justify-start  bg-white p-4">
    <h1 className="thin-head text-center p-2">LET UNIVERSE WORK FOR YOU</h1>
    <div className="flex flex-col min-h-80   sm:flex-row ">

    <Image
    src="/img/astrology-circle-orance-dots.png"
    // src="/img/astrological_chart.png"
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
    quality={100}
    className=" w-[80%] sm:w-80   h-auto m-auto rounded-full invert  animate-spin-slow"
    />
<div className='flex flex-row gap-4  m-auto flex-wrap justify-around '>

    {zods.map((ss, index) => {
      return <motion.div key={index} 
      whileHover={{scale:1.1}}
      whileTap={{scale:.95}}
      className={`flex flex-col cursor-pointer gap-2 justify-start bg-[url(/img/zodiac/${ss.label.toLowerCase()}.png)] p-2 rounded-lg`}
      onClick={()=>{
        router.push(`/galaxy/rashi/${ss.label}`)
      }}
      >
        <div className={`text-5xl p-2 hover:${'bg-gray-300'} rounded-lg`}>
          {ss.sign}
        </div>
        <div className=' text-md text-center'>
          {ss.label}
        </div>
        <div className=' text-md text-center'>
          {raashi_naam[index]}<br/>
          {hindi_to_brahmi(raashi_naam[index])}
          {/* {Object.values(Nakshatra)[index*2]} */}
        </div>
      </motion.div>;
    })}
  </div>
  </div>
{/* <div className="mt-24">

  {'MAAS'}-{'प्राचीन और अग्रिम विज्ञान मंत्रालय'}
  awaits dob pob tob 
  {earth?.auth?.user?.dob}
  does this matter ¿?
  god particle-{}
  godisdead
  blessing dead
  i am hemant:; i am start of winter 
</div>
  <Element_/> */}
  {/* <Compass/>
  <Gyroscope/> */}
  {/* <GyroHome/> */}
    </div>

};
