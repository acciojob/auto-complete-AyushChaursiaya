import React, { useState, useEffect } from 'react';

// Fruit array for suggestions
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const SearchItem = () => {
  // State to hold the user's input and the list of filtered suggestions
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Effect to update the suggestions asynchronously when the input value changes
  useEffect(() => {
    if (inputValue === '') {
      setSuggestions([]);
      return;
    }

    // Simulate an async fetch call to get suggestions based on user input
    const fetchSuggestions = () => {
      setIsLoading(true);
      setTimeout(() => {
        const filteredFruits = fruits.filter((fruit) =>
          fruit.toLowerCase().includes(inputValue.toLowerCase())
        );
        setSuggestions(filteredFruits);
        setIsLoading(false);
      }, 300); // Simulate network latency with a timeout
    };

    fetchSuggestions();
  }, [inputValue]);

  // Handler for input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Fruit Autocomplete</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search fruits..."
        style={{ padding: '10px', width: '200px' }}
      />
      {/* Show loading message while fetching suggestions */}
      {isLoading && <p>Loading...</p>}
      {/* Display suggestions */}
      {!isLoading && suggestions.length > 0 && (
        <ul style={{ listStyle: 'none', padding: '10px', marginTop: '10px' }}>
          {suggestions.map((fruit, index) => (
            <li key={index} style={{ padding: '5px 0' }}>
              {fruit}
            </li>
          ))}
        </ul>
      )}
      {/* Show no results message when there are no suggestions */}
      {!isLoading && inputValue && suggestions.length === 0 && (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchItem;