const data = [
  {
    id: 1,
    name: 'Birthday Reminder',
    img: 'https://raw.githubusercontent.com/evtimlyonov/Projects/master/public/images/birthday.jpg',
    link: 'https://demo-birthday-reminder.netlify.app/',
  },
  {
    id: 2,
    name: 'Tours',
    img: 'https://raw.githubusercontent.com/evtimlyonov/Projects/master/public/images/tours.jpg',
    link: 'https://demo-tours-project.netlify.app/',
  },
  {
    id: 3,
    name: 'Reviews',
    img: 'https://raw.githubusercontent.com/evtimlyonov/Projects/master/public/images/reviews.jpg',
    link: 'https://demo-reviews.netlify.app/',
  },
  {
    id: 4,
    name: 'Accordion',
    img: 'https://raw.githubusercontent.com/evtimlyonov/Projects/master/public/images/acco.jpg',
    link: 'https://demo-accordion.netlify.app/',
  },
  {
    id: 5,
    name: 'Menu',
    img: 'https://raw.githubusercontent.com/evtimlyonov/Projects/master/public/images/menu.jpg',
    link: 'https://demo-menu-project.netlify.app/',
  },
  {
    id: 6,
    name: 'Tabs',
    img: 'https://raw.githubusercontent.com/evtimlyonov/Projects/master/public/images/exp.jpg',
    link: 'https://demo-tabs-project.netlify.app/',
  },
  {
    id: 7,
    name: 'Slider',
    img: 'https://raw.githubusercontent.com/evtimlyonov/Projects/master/public/images/reviews.jpg',
    link: 'https://demo-slider-project.netlify.app/',
  },
  {
    id: 8,
    name: 'Lorem Ipsum',
    img: 'https://raw.githubusercontent.com/evtimlyonov/Projects/master/public/images/lorem.jpg',
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
            <article
              key={el.id}
              className='bg-white transition duration-500 hover:scale-110 shadow-xl rounded overflow-hidden mb-8'>
              {console.log(el.img)}
              <a href={el.link} target='_blank' rel='noreferrer'>
                <div
                  className={`h-60 w-80 bg-cover bg-[url("https://raw.githubusercontent.com/evtimlyonov/Projects/master/public/images/birthday.jpg")]`}></div>
                <div className='text-center py-4 px-5 bg-white'>
                  <h5>{el.name}</h5>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};
