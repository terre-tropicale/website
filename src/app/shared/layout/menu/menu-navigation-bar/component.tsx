import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { BREAKPOINT2 } from '@/shared/constants';
import MenuIcon from '@/shared/icons/menu';
// import ShoppingCartIcon from '@/shared/icons/shopping-cart';
// import LanguageSelector from '@/shared/layout/menu/menu-navigation-bar/language-selector/component';

type MenuNavigationBarProps = {
  pages: {
    page: string;
    pathname: string;
    originalPathname: string;
  }[];
  viewportWidth: number;
  openMenuSlidable: () => void;
};

const MenuNavigationBar = ({ pages, viewportWidth, openMenuSlidable }: MenuNavigationBarProps): JSX.Element => {
  const { t } = useTranslation('menu');
  const activePathname = useRouter().asPath;

  return (
    <div className="z-10 fixed top-0 flex justify-center items-center w-full p-2.5 bg-lime-100 shadow mh:p-2.5 tv:px-8 tv:py-4 th:px-8 th:py-4">
      <div className="flex flex-row justify-start flex-none">
        <Link href={t('home-pathname-original')} as={t('home-pathname')}>
          <img src="/assets/logo/logo.svg" className="h-10 cursor-pointer" />
        </Link>
      </div>
      {viewportWidth >= BREAKPOINT2 && (
        <div className="flex flex-row justify-center flex-auto space-x-8 whitespace-nowrap">
          {pages.map(({ page, pathname, originalPathname }) => (
            <PageMenuNavigationBar
              key={pathname}
              page={page}
              pathname={pathname}
              originalPathname={originalPathname}
              activePathname={activePathname}
            />
          ))}
        </div>
      )}
      <div className="flex flex-row justify-end items-center flex-auto space-x-3 th:flex-none w-48 th:w-auto xl:w-48">
        {/* <LanguageSelector />
        <ShoppingCartIcon className="h-6" /> */}
        {viewportWidth < BREAKPOINT2 && (
          <button onClick={openMenuSlidable} className="p-2 rounded hover:bg-lime-300 focus:outline-none">
            <MenuIcon className="h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

type PageMenuNavigationBarProps = {
  page: string;
  pathname: string;
  originalPathname: string;
  activePathname: string;
};

const PageMenuNavigationBar = ({ page, pathname, originalPathname, activePathname }: PageMenuNavigationBarProps) => (
  <Link href={originalPathname} as={pathname}>
    <a
      className={classNames('page-menu-navigation-bar', activePathname === pathname ? 'active-page' : 'inactive-page')}
    >
      <span className="font-heading text-sm uppercase">{page}</span>
    </a>
  </Link>
);

export default MenuNavigationBar;