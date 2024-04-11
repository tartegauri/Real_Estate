import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          About Our Real Estate Project
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Real Estate is the best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <p className="about-text">
          Our real estate project is dedicated to providing top-quality services to our clients. We have a team of experienced professionals passionate about helping you find the perfect property or sell your current one. Whether you're looking for a cozy apartment, a spacious house, or a commercial property, we have a wide range of listings to suit your needs.
        </p>
        <p className="about-text">
          At our real estate project, we prioritize customer satisfaction and strive to make the buying or selling process as smooth and seamless as possible.
        </p>
      </div>
    </div>
  );
}

export default About;
