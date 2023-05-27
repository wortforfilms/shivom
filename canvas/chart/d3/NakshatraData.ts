const NakshatraData = {
  name: 'Nakshatras',
  children: [
    {
      name: 'Nakshatra A',
      size: 20,
    },
    {
      name: 'Nakshatra B',
      children: [
        {
          name: 'Sub-Nakshatra B1',
          size: 10,
        },
        {
          name: 'Sub-Nakshatra B2',
          size: 30,
        },
      ],
    },
    // Add more Nakshatras as needed
  ],
};

export default NakshatraData;
