import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Fragment } from 'react';

import CloseIcon from '@/shared/icons/close';
import CocktailIcon from '@/shared/icons/cocktail';
import ContactIcon from '@/shared/icons/contact';
import HomeIcon from '@/shared/icons/home';
import InfoIcon from '@/shared/icons/info';
import SmoothieIcon from '@/shared/icons/smoothie';

const MenuSlidable = ({ isOpenMenuSlidable, closeMenuSlidable }: MenuSlidableProps): JSX.Element => {
  const { t } = useTranslation('menu');
  const { aboutLink, contactLink, homeLink, ourCocktailsLink, ourSmoothiesLink } = t('pageLinksSection');

  const router = useRouter();
  const activeLanguage = router.locale ? router.locale : '';
  const activeLocalePathname = router.asPath;

  const handleClick = (localePathname: string) => {
    if (localePathname === activeLocalePathname) {
      closeMenuSlidable();
    }
  };

  return (
    <Transition.Root show={isOpenMenuSlidable} as={Fragment}>
      <Dialog as="div" static open={isOpenMenuSlidable} onClose={closeMenuSlidable}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 h-screen transition-opacity bg-gray-700 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-y-0 right-0 z-20 flex flex-col h-screen gap-y-5 bg-white w-72 mh:w-1/2 tv:w-72">
            <button
              onClick={closeMenuSlidable}
              className="ml-auto mr-2.5 mt-2.5 p-2 rounded hover:bg-lime-300 focus:outline-none tv:mr-8 tv:mt-4"
            >
              <CloseIcon className="w-6" />
            </button>
            {[homeLink, ourSmoothiesLink, ourCocktailsLink, aboutLink, contactLink].map(
              ({ localesPathnames, name, originalPathname }) => {
                const localePathname = localesPathnames[activeLanguage];
                const iconClassName = classNames(
                  'w-6 mr-3',
                  localePathname === activeLocalePathname ? 'fill-current text-lime-600' : ''
                );
                return (
                  <Link key={originalPathname} href={originalPathname} as={localePathname}>
                    <a
                      onClick={() => handleClick(localePathname)}
                      className={classNames(
                        'page-menu-slidable',
                        localePathname === activeLocalePathname ? 'active-page' : 'inactive-page'
                      )}
                    >
                      {
                        {
                          '/': <HomeIcon className={iconClassName} />,
                          '/nos-smoothies': <SmoothieIcon className={iconClassName} />,
                          '/nos-cocktails': <CocktailIcon className={iconClassName} />,
                          '/a-propos': <InfoIcon className={iconClassName} />,
                          '/contact': <ContactIcon className={iconClassName} />
                        }[originalPathname as string]
                      }
                      <span className="font-heading text-sm uppercase">{name}</span>
                    </a>
                  </Link>
                );
              }
            )}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

type MenuSlidableProps = {
  isOpenMenuSlidable: boolean;
  closeMenuSlidable: () => void;
};

export default MenuSlidable;
