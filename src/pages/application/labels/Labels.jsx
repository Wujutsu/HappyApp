import React, { useState } from 'react';
import Label from '../../../components/label/Label';

const Labels = () => {
  const [selectedLabel, setSelectedLabel] = useState([]);
  const labelsTempo = ['Travail', 'Etude', 'Famille', 'Amis', 'Amour', 'Sexe', 'Repas', 'Sport', 'Loisirs', 'Nature', 'Musique', 'Argent', 'Météo', 'Transport', 'Santé', 'Sommeil', 'Actualité', 'Art'];

  const handleSelectLabel = (label) => {
    if (findSelectedLabel(label)) {
      setSelectedLabel(selectedLabel.filter((item) => item !== label));
    } else {
      setSelectedLabel([...selectedLabel, label]);
    }
  }

  const findSelectedLabel = (label) => {
    return selectedLabel.includes(label);
  }

  return (
    <section className='ha-labels vh-100'>
      <div className='d-flex flex-column align-items-center justify-content-start mt-8 mt-sm-0 justify-content-sm-center h-100'>
        <h3 className='text-center fw-bold'>Quelles catégories ont le plus impacté ta journée ?</h3>

        <div className='d-flex flex-wrap justify-content-center gap-3 my-5 mw-800'>
          {labelsTempo.map((item) => (
            <Label label={item} onSelectLabel={handleSelectLabel} selected={findSelectedLabel(item)}/>
          ))}
        </div>

        <button className='btn btn-outline-light mt-3 px-6'>Suivant</button>
      </div>
    </section>
  );
};

export default Labels;