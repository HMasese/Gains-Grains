import { useEffect } from 'react'

const Recipe = () => {
    // const apiKey = 'NUTRITION_DB_API_KEY';
    // const apiUrl = 'https://api.spoonacular.com';
    // useEffect(() => {
    //     fetch(apiUrl, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${apiKey}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         })
    // }, [])
    useEffect(() => {
        searchFood()
    }, [])
    
    async function searchFood() {
        const query = 'chicken';
        const response = await fetch(`/api/nutrition/search/${query}`);
        // const response = await fetch(`/api/nutrition/search/${query}`);
        const data = await response.json();
        console.log(data);
    };
    return (
        <div>Recipe</div>
    )
}

export default Recipe