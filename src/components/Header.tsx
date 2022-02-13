import { SvgImg } from './SvgImg';

export const Header = () => {
  return (
    <div className='min-h-[40vh] lg:min-h-[60vh] bg-white py-20 flex items-center justify-center'>
      <div className='flex items-center max-w-[1120px] w-[90vw]'>
        <div className='w-[90vw]'>
          <h1 className='text-[#0d0d0d] text-5xl capitalize font-[Inconsolata] '>
            React Projects
          </h1>
          <p className='my-8 text-[#0f172a] text-xl leading-8 max-w-[40em]'>
            Projects are the most practical way to learn any language, and
            <span className='font-black italic tracking-widest border-b-2 border-[#60dbfb]'>
              {' '}
              React{' '}
            </span>{' '}
            is no exception. Solidify your knowledge of React by creating these
            cool projects.
          </p>
          <a
            href='https://github.com/evtimlyonov'
            target='_blank'
            rel='noreferrer'
            className='inline-block transition duration-500 bg-[#60dbfb] border-2 border-[#60dbfb] rounded py-3 px-5 text-[#0d0d0d] font-bold hover:bg-white hover:text-[#60dbfb] animate-pulsing'>
            GitHub
          </a>
        </div>
        <SvgImg />
      </div>
    </div>
  );
};
