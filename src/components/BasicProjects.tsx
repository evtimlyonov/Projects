const data = [
  {
    id: 1,
    name: 'Birthday Reminder',
    img: './images/1.jpg',
    link: 'https://demo-birthday-reminder.netlify.app/',
  },
  {
    id: 2,
    name: 'Tours',
    img: './images/2.jpg',
    link: 'https://demo-tours-project.netlify.app/',
  },
  {
    id: 3,
    name: 'Reviews',
    img: './images/3.jpg',
    link: 'https://demo-reviews.netlify.app/',
  },
  {
    id: 4,
    name: 'Accordion',
    img: './images/4.jpg',
    link: 'https://demo-accordion.netlify.app/',
  },
  {
    id: 5,
    name: 'Menu',
    img: './images/5.jpg',
    link: 'https://demo-menu-project.netlify.app/',
  },
  {
    id: 6,
    name: 'Tabs',
    img: './images/6.jpg',
    link: 'https://demo-tabs-project.netlify.app/',
  },
  {
    id: 7,
    name: 'Slider',
    img: './images/7.jpg',
    link: 'https://demo-slider-project.netlify.app/',
  },
  {
    id: 8,
    name: 'Lorem Ipsum',
    img: './images/8.jpg',
    link: 'https://demo-lorem-project.netlify.app/',
  },
  {
    id: 9,
    name: 'Color generator',
    img: './images/9.jpg',
    link: 'https://demo-color-generator.netlify.app/',
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
              className='mb-8 overflow-hidden transition duration-500 bg-white rounded shadow-xl hover:scale-110'>
              {console.log(el.img)}
              <a href={el.link} target='_blank' rel='noreferrer'>
                <div className={`h-60 w-80 bg-cover`}>
                  <img src={el.img} alt={el.name} />
                </div>
                <div className='px-5 py-4 text-center bg-white'>
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
