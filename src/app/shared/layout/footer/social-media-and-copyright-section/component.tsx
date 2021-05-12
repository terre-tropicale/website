import { useTranslation } from 'next-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import FacebookIcon from '@/shared/icons/facebook';
import InstagramIcon from '@/shared/icons/instagram';
import TwitterIcon from '@/shared/icons/twitter';

const SocialMediaAndCopyrightSection = (): JSX.Element => {
  const { t } = useTranslation('footer');

  return (
    <div className="flex flex-col items-center px-4 py-3 bg-lime-100">
      <LazyLoadImage src="/assets/logo/symbol.svg" effect="blur" className="h-12 mb-2" />
      <div className="flex flex-row items-center mb-2">
        <a
          href="https://twitter.com/TerreTropicale"
          rel="noreferrer"
          target="_blank"
          className="mr-5 text-current hover:text-lime-600"
        >
          <TwitterIcon className="h-6" />
        </a>
        <a
          href="https://www.facebook.com/terretropicale"
          rel="noreferrer"
          target="_blank"
          className="mr-5 text-current hover:text-lime-600"
        >
          <FacebookIcon className="h-6" />
        </a>
        <a
          href="https://www.instagram.com/terretropicale"
          rel="noreferrer"
          target="_blank"
          className="text-current hover:text-lime-600"
        >
          <InstagramIcon className="h-6" />
        </a>
      </div>
      <span>{t('copyright', { 'current-year': new Date().getFullYear() })}</span>
    </div>
  );
};

export default SocialMediaAndCopyrightSection;
