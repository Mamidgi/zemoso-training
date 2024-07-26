import React from 'react';
import persons from '../constants/persons';

const ActivePerson: React.FC = () => {
  const activePersons = persons.filter(person => person.isActive);

  return (
    <div>
          <h1>Active Persons</h1>
          {activePersons.map(person => (
            <div key={person.id}>
              <p>Name: {person.name}</p>
              <p>Age: {person.age}</p>
            </div>
          ))}
        </div>
      ) 
    }
export default ActivePerson;
