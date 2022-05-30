import React, { useState, useEffect } from 'react';

import Spinner from './Spinner';
import { feedQuery, searchQuery } from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';

const Search = ({ searchTerm }) => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (searchTerm) {
      const query = searchQuery(searchTerm.toLowerCase());
      setLoading(true);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      })
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      })
    }
  }, [searchTerm]);

  return (
    <div>
      {loading && <Spinner message="Searching for pins..." />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins?.length === 0 && searchTerm !== '' && !loading && (
        <div className='mt-10 text-center text-xl'>No pins found mate</div>
      )}
    </div>
  )
}

export default Search