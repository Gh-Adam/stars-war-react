import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const getPlanetsList = async (key, page) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['getPlanets', page], getPlanetsList);

  // Simple Query without params
  // const { data, status } = useQuery('getPlanets', getPlanetsList);

  // IF you want make custom Config
  // const { data, status } = useQuery('getPlanets', getPlanetsList, {
  //   // staleTime: 5000,
  //   // cacheTime: 10,
  //   onSuccess: () => console.log('fetching works successfully'),
  //   onError: () => console.log('fetching Failed'),
  //   onSettled: () => console.log('Settling works successfully'),
  // });
  console.log('planets', data);
  return (
    <div>
      <h3>Planets</h3>
      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>
      {status}
      {/* loading */}
      {status === 'loading' && (
        <div className="loading"> Loading Data .....</div>
      )}
      {/* Error */}
      {status === 'error' && (
        <div className="error"> Error Fetching Data .....</div>
      )}
      {/* No Data Return */}
      {status === 'success' && data?.results?.length === 0 && (
        <div className="error"> No Data Found .....</div>
      )}
      {/* Show Data List */}
      {status === 'success' && data?.results?.length > 0 && (
        <div className="data-list">
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Planets;
