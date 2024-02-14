import React from 'react';
import './Smiley.scss';

const Smiley = ({ typeMood = 'normal', onSelectMood, selected }) => {

  const handleClick = () => {
    onSelectMood(selected ? null : typeMood);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onSelectMood(typeMood);
    }
  }

  let labelSmiley = '';
  switch (typeMood) {
    case 'happy':
      labelSmiley = 'Heureux';
      break;
    case 'normal':
      labelSmiley = 'Normal';
      break;
    case 'sad':
      labelSmiley = 'Triste';
      break;
    default:
      labelSmiley = '';
  }

  return (
    <div className={`smiley ${selected ? 'selected' : ''}`} onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={0} aria-label={labelSmiley}>
      <div className={typeMood}>
        <div className='eyes'>
          <div className='eye'></div>
          <div className='eye'></div>
        </div>
        <div className='mouth'></div>
      </div>
      <div className='description d-none d-sm-block'>
        {labelSmiley}
      </div>
    </div>
  );
};

export default Smiley;