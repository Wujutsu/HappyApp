import React from 'react';
import PouchSong from '../../../components/pouchSong/PouchSong';

const Song = () => {
  return (
    <section className='ha-song vh-100 mb-8 mb-sm-0'>

      <form className='d-flex flex-column justify-content-center align-items-center mt-8 mt-sm-0 h-100'>
        <div className='mb-4 w-100 mw-300'>
          <label className='form-label text-center w-100' htmlFor="searchSong">Rechercher un morceau</label>
          <input type='text' id="searchSong" className='form-control text-center' />
        </div>

        <div className='d-flex flex-wrap justify-content-center gap-4'>
          <PouchSong />
          <PouchSong />
          <PouchSong />
        </div>

        <button type='submit' className='btn btn-outline-light mt-4 px-6'>Suivant</button>
      </form>
    </section>
  );
};

export default Song;