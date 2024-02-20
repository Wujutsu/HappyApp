import React from 'react';
import './Smiley.scss';

const Smiley = ({ typeMood = 'normal', onSelectMood, selected }) => {

  const handleClick = () => {
    onSelectMood(typeMood);
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
      labelSmiley = 'Neutre';
      break;
    case 'sad':
      labelSmiley = 'Triste';
      break;
    case 'anger':
      labelSmiley = 'Fâché';
      break;
    case 'tired':
      labelSmiley = 'Fatigué';
      break;
    case 'anxious':
      labelSmiley = 'Anxieux';
      break;
    default:
      labelSmiley = '';
  }

  return (
    <div className={`smiley smiley-${typeMood} ${selected ? 'selected' : ''}`} onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={0} aria-label={labelSmiley}>
      <div className={typeMood}>
        <div className='eyes'>
          <div className='eye'></div>
          <div className='eye'></div>
        </div>
        <div className='mouth'></div>
      </div>
      <div className='description'> {labelSmiley} </div>
    </div>
  );
};

export default Smiley;