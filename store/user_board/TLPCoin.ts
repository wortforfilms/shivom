

export interface TLPCoin {
    name: string;
    symbol: string;
    totalSupply: number;
    circulatingSupply: number;
    marketCap: number;
    price: number;
    volume24h: number;
    circulatingSupplyPercentage: number;
    maxSupply: number;
    algorithm: string;
    proofType: string;
    blockReward: number;
    blockTime: number;
    blockSize: number;
    blockRewardHalving: number;
    difficultyAdjustment: string;
    consensusMechanism: string;
    website: string;
    explorer: string;
    social: {
        twitter: string;
        facebook: string;
        reddit: string;
        telegram: string;
    };
    exchanges: string[];
    whitepaper: string;
    lastUpdated: number;
}



interface DigitalCoin {
    id: number;
    name: string;
    symbol: string;
    totalSupply: number;
    maxSupply: number;
    circulatingSupply: number;
    price: number;
    marketCap: number;
    volume24h: number;
    change24h: number;
    rank: number;
    timestamp: number;
  }
  
const coin: DigitalCoin = {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    totalSupply: 21000000,
    maxSupply: 21000000,
    circulatingSupply: 18000000,
    price: 8500,
    marketCap: 15300000,
    volume24h: 20000,
    change24h: 0.3,
    rank: 1,
    timestamp: 1595998800
  }

type PaymentSystem = {
    paymentMethod: string; // e.g. credit card, debit card, cash
    cardNumber?: string; // only required if paymentMethod is credit card or debit card
    expiryDate?: string; // only required if paymentMethod is credit card or debit card
    cvv?: string; // only required if paymentMethod is credit card or debit card
    amount: number; // amount to be paid
    currency: string; // e.g. USD, GBP, EUR
};

const samplePayment: PaymentSystem = {
    paymentMethod: 'credit card',
    cardNumber: '1234567890123456',
    expiryDate: '12/20',
    cvv: '123',
    amount: 500,
    currency: 'USD'
};



// Type
type EquipmentRental = {
    itemId: string;
    itemName: string;
    itemType: string;
    itemDescription: string;
    itemPrice: number;
    itemQuantity: number;
    itemAvailability: boolean;
    rentalDuration: number;
    rentalStartDate: Date;
    rentalEndDate: Date;
    paymentMethod: string;
    paymentStatus: string;
  };
  
  // Sample
  const equipmentRental: EquipmentRental = {
    itemId: '12345',
    itemName: 'Drill',
    itemType: 'Power Tool',
    itemDescription: 'Cordless drill with two batteries',
    itemPrice: 150,
    itemQuantity: 1,
    itemAvailability: true,
    rentalDuration: 7,
    rentalStartDate: new Date('2020-10-01'),
    rentalEndDate: new Date('2020-10-08'),
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid'
  };



  