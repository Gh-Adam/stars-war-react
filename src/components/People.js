import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Person from './Person';
import classNames from 'classnames';
const getPeopleList = async (key, page) => {
  const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

const People = () => {
  const [page, setPage] = useState(1);
  // Use Paginated Query
  const { resolvedData: data, latestData, status} = usePaginatedQuery(['getPeople', page], getPeopleList)

  

  const generateButtonList = (pages) => { 
    const arr = Array.from(Array(pages).keys()).map(i => i+1);
    const x = arr.map(i => (<button key={i} className={classNames(['page-num', { active : page === i}])} onClick={() => setPage(i)} > {i} </button> ))
    return x;
  }

  const getPagesLength = (data) => {
    const pages = (data && data.count && data.results.length > 0 ) ? Math.ceil(data.count/data.results.length) : 0;
    return pages;
  } 
  return (
    <div>
      <h3>People</h3>
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
            onClick={() => setPage(current =>  (!latestData || !latestData.next) ? current : current + 1 )}
            disabled={!latestData || !latestData.next}
            >Next</button>
          </div>
          <div className="data-list">
            {data.results.map((person) => (
              <Person key={person.name} person={person} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default People;
