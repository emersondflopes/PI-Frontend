import React from 'react';


function Company() {
  const name = localStorage.getItem('name');
  const type = localStorage.getItem('type');

  return (
    <div>
      <h1>Bem Vindo {name}</h1>
      <h1>{type}</h1>

    </div>
  );
}
export default Company;