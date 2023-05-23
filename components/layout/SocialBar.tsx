import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'next-share';

export const SocialBar = () => {
  return <div className='flex flex-row justify-around gap-4 w-80  mt-24 mb-12'>
    <FacebookShareButton
      url={'https://github.com/next-share'}
      quote={'next-share is a social share buttons for your next React apps.'}
      hashtag={'#nextshare'}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <LineShareButton
      url={'https://github.com/next-share'}
      title={'next-share is a social share buttons for your next React apps.'}
      className='w-12 h-12'
    >
      <LineIcon round size={32} />
    </LineShareButton>
    <TelegramShareButton
      url={'https://github.com/next-share'}
      title={'next-share is a social share buttons for your next React apps.'}
    >
      <TelegramIcon size={32} round />
    </TelegramShareButton>
    <TwitterShareButton
      url={'https://github.com/next-share'}
      title={'next-share is a social share buttons for your next React apps.'}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <WhatsappShareButton
      url={'https://github.com/next-share'}
      title={'next-share is a social share buttons for your next React apps.'}
      separator=":: "
    >
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>

    <LinkedinShareButton url={'https://github.com/next-share'}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>




  </div>;
};
