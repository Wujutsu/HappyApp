import React, { useState } from 'react';
import Smiley from '../../../components/smiley/Smiley';

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSelectMood = (mood) => {
    setSelectedMood(mood);
  }

  return (
    <section className='ha-mood vh-100'>
      <div className='d-flex flex-column align-items-center justify-content-start mt-8 mt-sm-0 justify-content-sm-center h-100'>
        <h3 className='text-center fw-bold'>Comment vas-tu aujourd'hui ?</h3>

        <div className='d-flex flex-column flex-sm-row gap-5 gap-md-8 mt-5 mb-10'>
          <Smiley typeMood='sad' onSelectMood={handleSelectMood} selected={selectedMood === 'sad'} />
          <Smiley typeMood='normal' onSelectMood={handleSelectMood} selected={selectedMood === 'normal'} />
          <Smiley typeMood='happy' onSelectMood={handleSelectMood} selected={selectedMood === 'happy'} />
        </div>

        <button className='btn btn-outline-light mt-1 px-6'>Suivant</button>
      </div>
    </section>
  );
};

export default Mood;