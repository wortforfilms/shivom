
export function nFormatter(num: number) {
  if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(1).replace(/\.0$/, '') + 'Tr';
  }
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
}

// dreameleven 11 7-4 7+4 3 tele scope :: inner view
// blue tours
// events full dark 
// light && sound show 
// 

// const type eleven_14;1
// 47141
// spiral 