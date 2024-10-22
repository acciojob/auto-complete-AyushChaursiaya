import React, { useEffect, useState } from 'react';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const SearchItem = () => {
    const [inputText, setInputText] = useState('');
    const [itemList, setItemList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchSuggestions = () => {
        setIsLoading(true);
        setTimeout(() => {
            const filteredFruits = fruits.filter((fruit) =>
                fruit.toLowerCase().includes(inputText.toLowerCase())
            );
            setItemList(filteredFruits);
            setIsLoading(false);
        }, 300);
    }

    useEffect(() => {
        if(inputText === '') {
            setItemList([]);
        } else {
            fetchSuggestions();
        }
    }, [inputText]);

    const handleInput = (e) => {
        setInputText(e.target.value);
    }

    return (
        <>
            <h1>Search Item</h1>
            <div>
                <input type='text' value={inputText} placeholder='search the Items...' onChange={handleInput} />
                {isLoading && <p>loading...</p>}
                <ul>
                    {!isLoading && itemList.map((fruit) => (
                        <li key={fruit}>{fruit}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default SearchItem;