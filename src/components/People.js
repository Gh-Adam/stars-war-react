import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const getPeopleList = async () => {
  const res = await fetch(`http://swapi.dev/api/people/`);
  return res.json();
};

const People = () => {
  const { data, status } = useQuery('getPeople', getPeopleList);
  console.log('people', data);
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
        <div className="data-list">
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};
export default People;
