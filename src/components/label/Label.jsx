import React from 'react';

const Label = ({ label, onSelectLabel, selected }) => {
  const handleClick = () => {
    onSelectLabel(label);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onSelectLabel(label);
    }
  }
  
  return (
    <div className={`${selected ? 'bg-secondary' : 'bg-primary'} text-dark px-4 py-2 rounded-4 fw-semibold pointer`}
      tabIndex={0} aria-label={label} onClick={handleClick} onKeyDown={handleKeyDown}>
      <div className='mt-1'>{label}</div>
    </div>
  );
};

export default Label;