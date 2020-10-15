import React, { useState } from 'react';
// import { useQuery } from 'react-query';
import { usePaginatedQuery } from 'react-query';
import Planet from './Planet';
import classNames from 'classnames';

const getPlanetsList = async (key, page) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};


const Planets = () => {
  const [page, setPage] = useState(1);
  // Use Paginated Query
  const { resolvedData: data, latestData, status} = usePaginatedQuery(['getPlants', page], getPlanetsList)

  const generateButtonList = (pages) => {  
    return Array.from(Array(pages).keys()).map(i => (<button key={i+1} className={classNames(['page-num', { active : page === i+1}])} onClick={() => setPage(i+1)} > {i+1} </button> ));
  }

  const getPagesLength = (data) => {
    const pages = (data && data.count && data.results.length > 0 ) ? Math.ceil(data.count/data.results.length) : 0;
    return pages;
  } 


 // Query with params variables with Manual Pagination
  // const { data, status } = useQuery(['getPlanets', page], getPlanetsList);

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
  return (
    <div>
      <h3>Planets</h3>
      {/* <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button> */}
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
        <>
          <div className="btn-actions">
            <button
            onClick={() => setPage(current => Math.max(current-1, 1))}
            disabled={page === 1}
            >Prev</button>

            {
                generateButtonList(getPagesLength(data))
            }

            <button
            onClick={() => setPage(current =>  (!latestData || !latestData.next) ? current : current +1 )}
            disabled={!latestData || !latestData.next}
            >Next</button>
          </div>
          <div className="data-list">
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
        </>
        
      )}
    </div>
  );
};
export default Planets;
