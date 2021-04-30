import { Dialog, Transition } from '@headlessui/react';
import Head from 'next/head';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';

import Layout from '@/app/layout/component';
import smoothies from '@/data/smoothies.json';

const NosSmoothiesPage = (): JSX.Element => (
  <>
    <Head>
      <title>Nos smoothies | Terre Tropicale</title>
    </Head>
    <Layout>
      <Header />
      <SmoothiesSection />
    </Layout>
  </>
);

const Header = () => (
  <header className="relative flex mb-8">
    <img src="/assets/images/headers/header-2.jpg" />
    <div className="absolute flex flex-col items-start justify-center w-full h-full px-4 py-3 text-white bg-black bg-opacity-40">
      <h1 className="mb-2">NOS SMOOTHIES</h1>
      <p className="mb-1 text-white">Les saveurs du paradis</p>
      <p className="text-white">Fruits rigoureusement sélectionnés</p>
    </div>
  </header>
);

type Smoothie = typeof smoothies[number];

const SmoothiesSection = () => {
  const [smoothie, setSmoothie] = useState<Smoothie | null>(null);
  const [open, setOpen] = useState(true);

  return (
    <section className="grid grid-cols-2 gap-4 px-4 mb-8 sm:grid-cols-3">
      {smoothies.map((smoothie, index) => {
        const { name, slug, smoothieDescription } = smoothie;
        return (
          <figure
            key={index}
            onClick={() => setSmoothie(smoothie)}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <div className="flex-shrink-0">
              <img className="object-cover w-full h-48" src={`/assets/images/smoothies/${slug}.jpg`} title={name} />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <div className="block mt-2">
                  <p className="text-base font-semibold text-gray-900">{name}</p>
                  <p className="mt-3 text-xs text-gray-500">{smoothieDescription}</p>
                </div>
              </div>
            </div>
          </figure>
        );
      })}
      {smoothie && <DialogFruit smoothie={smoothie} open={open} onCloseModal={setOpen} />}
    </section>
  );
};

type DialogFruitProps = {
  smoothie: Smoothie;
  open: boolean;
  onCloseModal: Dispatch<SetStateAction<boolean>>;
};

const DialogFruit = ({ smoothie: { name, slug, fruitDescription }, open, onCloseModal }: DialogFruitProps) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" static className="fixed inset-0 z-10 overflow-y-auto" open={open} onClose={onCloseModal}>
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>
        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <img src={`/assets/images/fruits/${slug}.jpg`} className="mb-3" />
              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  <p className="font-bold">{name}: le fruit</p>
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{fruitDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
  // <Dialog open={true} onClose={onClose}>
  //   <DialogTitle disableTypography classes={{ root: dialogTitleRoot }}>
  //     <p className="font-bold">{name}: le fruit</p>
  //     <IconButton onClick={onClose}>
  //       <CloseIcon />
  //     </IconButton>
  //   </DialogTitle>
  //   <DialogContent dividers>
  // <img src={`/assets/images/fruits/${slug}.jpg`} className="mb-3" />
  // <p className="text-sm">{fruitDescription}</p>
  //   </DialogContent>
  // </Dialog>
);

export default NosSmoothiesPage;
