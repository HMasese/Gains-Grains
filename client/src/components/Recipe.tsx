import { useEffect, useState } from 'react'
import React from 'react';
import ReactDom from 'react-dom';
import Recipe from './components/Recipe';

// ReacrDom.render(
//     <React.StrictMode>
//         <Recipe />
//     </React.StrictMode>
//     document.getElementById('recipe-root')
// )

const Recipe = () => {
    const [recipes, setRecipes] = useState([] as any);
    const [query, setQuery] = useState('Salmon')
    
    useEffect(() => {
        searchFood()
    }, [])
   
    useEffect(() => {
        console.log(recipes)
    }, [recipes])

    async function searchFood() {
        const response = await fetch(`/api/nutrition/search/${query}`);
        // const query = 'Chicken';
        // const response = await fetch(`/api/nutrition/search/${query}`);
        // const response = await fetch(`/api/nutrition/search/${query}`);
        const data = await response.json();
        console.log(data);
        setRecipes(data);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        searchFood();
    };
    
    return (
        <div>
            <section>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for food..."
                    />
                    <button type="submit">Search</button>
                </form>
                {
                    // condition ? do this : do this instead 
                    recipes.menuItems ? <>
                        {recipes.menuItems.map((element: any) => (<div key={element.id}>
                            {element.title}
                            <img src={element.image} alt={element.title} />
                        </div>))}
                    </> : <div>no recipes found</div>
                }
            </section>
        </div>
    )
}

export default Recipe