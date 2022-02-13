const data = [
  {
    id: 1,
    name: 'Birthday Reminder',
    image:
      'https://react-projects.netlify.app/static/08bf90aceb26f1f62e1ad3c5bd7aab91/25b0a/ScreenShot2020-09-27at12.02.45PM.webp',
    link: 'https://demo-birthday-reminder.netlify.app/',
  },
  {
    id: 2,
    name: 'Tours',
    image:
      'https://react-projects.netlify.app/static/82554961915472c5c771f752d5735dd1/7c38f/ScreenShot2020-09-27at11.59.44AM.webp',
    link: 'https://demo-tours-project.netlify.app/',
  },
  {
    id: 3,
    name: 'Reviews',
    image:
      'https://react-projects.netlify.app/static/2d19b67087032a782e1a04102a4816d6/fe5f4/ScreenShot2020-10-01at12.20.56PM.webp',
    link: 'https://demo-reviews.netlify.app/',
  },
  {
    id: 4,
    name: 'Accordion',
    image:
      'https://react-projects.netlify.app/static/3767b9edb50b80c48df8510f5d43c469/d0165/ScreenShot2020-09-29at9.40.52PM.webp',
    link: 'https://demo-accordion.netlify.app/',
  },
  {
    id: 5,
    name: 'Menu',
    image:
      'https://react-projects.netlify.app/static/df1b6184c0b85392bdd1a4a5a6f6e810/6846f/ScreenShot2020-10-01at12.36.21PM.webp',
    link: 'https://demo-menu-project.netlify.app/',
  },
  {
    id: 6,
    name: 'Tabs',
    image:
      'https://react-projects.netlify.app/static/9b55b784c3df82c1b4588ef29ffccd95/ea544/ScreenShot2020-10-01at12.31.32PM.webp',
    link: 'https://demo-tabs-project.netlify.app/',
  },
  {
    id: 7,
    name: 'Slider',
    image:
      'https://react-projects.netlify.app/static/89b64e736050bfb366ef12d950cda163/2e842/ScreenShot2020-10-01at1.50.36PM.webp',
    link: 'https://demo-slider-project.netlify.app/',
  },
  {
    id: 8,
    name: 'Lorem Ipsum',
    image:
      'https://react-projects.netlify.app/static/b2704d91f0bad86237dd22c2f5be66ec/3e799/ScreenShot2020-10-02at2.26.29PM.webp',
    link: 'https://demo-lorem-project.netlify.app/',
  },
];

export const BasicProjects = () => {
  return (
    <section className='py-20'>
      <h1 className='text-[#0d0d0d] text-4xl capitalize font-[Inconsolata] font-light text-center'>
        Basic Projects
      </h1>
      <div className='mx-auto mt-4 mb-12 w-28 h-1 bg-[#60dbfb] rounded'></div>
      <div className='flex justify-around flex-wrap w-[90vw] max-w-6xl mx-auto mb-8'>
        {data.map((el) => {
          return (
            <>
              <article className='bg-white transition duration-500 hover:scale-110 shadow-xl rounded overflow-hidden mb-8'>
                <a href={el.link} target='_blank' rel='noreferrer'>
                  <div
                    className={`h-60 w-80 bg-cover bg-[url('https://react-projects.netlify.app/static/08bf90aceb26f1f62e1ad3c5bd7aab91/25b0a/ScreenShot2020-09-27at12.02.45PM.webp')]`}></div>
                  <div className='text-center py-4 px-5 bg-white'>
                    <h5>{el.name}</h5>
                  </div>
                </a>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};
