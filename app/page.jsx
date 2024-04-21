import AnimatedCircle from '@/components/AnimatedCircle';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between'>
          <div className=''>
            <div>Software Developer</div>
            <h1 className='h1 mb-8'>
              Hello I’m
              <br />
              <span className='text-accent'>Luke Coleman</span>
            </h1>
            <p className='max-w-[512px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque consequat, faucibus et, et. Non semper blandit vitae
              semper blandit.
            </p>
          </div>
          <div>
            {/* <Image src='/photo.png' width={500} height={500} alt='' /> */}
            <AnimatedCircle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
