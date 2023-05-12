

export const S3Uri=`https://thelineproducer.s3.ap-south-1.amazonaws.com`
const isBrowser = typeof window !== "undefined";

export const baseURL = isBrowser
? "http://localhost:3000"
: "https://thelineproducer.info";

export const perURL='https://www.thelineproducer.info'