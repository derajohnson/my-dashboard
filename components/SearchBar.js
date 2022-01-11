import React, { useRef } from 'react';

const SearchBar = ({ username, setUsername }) => {
  const name = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(name.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={name} placeholder='Enter Username' />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
