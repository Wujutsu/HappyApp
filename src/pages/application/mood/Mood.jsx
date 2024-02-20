import React, { useState } from 'react';
import Smiley from '../../../components/smiley/Smiley';

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState([]);

  const handleSelectMood = (mood) => {
    if (findSelectedMood(mood)) {
      setSelectedMood(selectedMood.filter((item) => item !== mood));
    } else {
      setSelectedMood([...selectedMood, mood]);
    }
  }

  const findSelectedMood = (mood) => {
    return selectedMood.includes(mood);
  }

  return (
    <section className='ha-mood vh-100 mb-8 mb-sm-0'>
      <div className='d-flex flex-column align-items-center justify-content-start mt-8 mt-sm-0 justify-content-sm-center h-100'>
        <h3 className='text-center fw-bold'>Quels moods représentent le mieux ta journée ?</h3>

        <div className='d-flex flex-wrap justify-content-center gap-8 gap-xl-6 mt-5 mb-10'>
          <Smiley typeMood='anxious' onSelectMood={handleSelectMood} selected={findSelectedMood('anxious')} />
          <Smiley typeMood='tired' onSelectMood={handleSelectMood} selected={findSelectedMood('tired')} />
          <Smiley typeMood='anger' onSelectMood={handleSelectMood} selected={findSelectedMood('anger')} />
          <Smiley typeMood='sad' onSelectMood={handleSelectMood} selected={findSelectedMood('sad')} />
          <Smiley typeMood='normal' onSelectMood={handleSelectMood} selected={findSelectedMood('normal')} />
          <Smiley typeMood='happy' onSelectMood={handleSelectMood} selected={findSelectedMood('happy')} />
        </div>

        <div className='mb-3'>{selectedMood.length} {selectedMood.length > 1 ? 'moods sélectionnés' : 'mood sélectionné'}</div>
        <button className='btn btn-outline-light mt-1 px-6' disabled={selectedMood.length <= 0}>Suivant</button>
      </div>
    </section>
  );
};

export default Mood;