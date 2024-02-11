import React from 'react';
import './Smiley.scss';

const Smiley = () => {
  return (
    <div className='d-flex justify-content-around'>
      <div className='smiley'>
        <div className='happy'>
          <div className='eyes'>
            <div className='eye'></div>
            <div className='eye'></div>
          </div>
          <div className='mouth'></div>
        </div>
      </div>

      <div className='smiley'>
        <div className='normal'>
          <div className='eyes'>
            <div className='eye'></div>
            <div className='eye'></div>
          </div>
          <div className='mouth'></div>
        </div>
      </div>

      <div className='smiley'>
        <div className='sad'>
          <div className='eyes'>
            <div className='eye'></div>
            <div className='eye'></div>
          </div>
          <div className='mouth'></div>
        </div>
      </div>
    </div>
  );
};

export default Smiley;