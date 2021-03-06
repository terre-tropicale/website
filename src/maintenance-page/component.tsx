import Head from 'next/head';

const MaintenancePage = (): JSX.Element => (
  <>
    <Head>
      <title>Terre Tropicale</title>
    </Head>
    <div className="flex flex-col min-h-screen bg-lime-50">
      <main className="flex flex-col flex-1 items-center justify-center p-4 mq1:w-5/6 mq1:mx-auto mq1:p-8 mq2:w-2/3 mq2:mx-auto mq3:w-160 mq3:mx-auto">
        <img src="/assets/logo/logo.svg" className="w-2/3 mb-6" />
        <h1 className="mb-4 text-center">Nous reviendrons bientôt!</h1>
        <div className="flex flex-col mb-6 gap-y-2 text-left">
          <p>
            Désolé pour le désagrément, mais nous effectuons actuellement des travaux de maintenance. Si vous en avez
            besoin, vous pouvez toujours <a href="mailto:contact@terretropicale.com">nous contacter</a>, sinon nous
            serons de retour en ligne sous peu!
          </p>
          <span>&mdash; L&rsquo;équipe Terre Tropicale</span>
        </div>
        <img src="/assets/images/misc/maintenance.svg" className="w-full mq1:w-3/4" />
      </main>
    </div>
  </>
);

export default MaintenancePage;
