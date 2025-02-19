import { useEffect, useState } from 'react'

const Recipe = () => {
    const [recipes, setRecipes] = useState([] as any)
    useEffect(() => {
        searchFood()
    }, [])
    useEffect(() => {
        console.log(recipes)
    }, [recipes])
    
    async function searchFood() {
        const query = 'chicken';
        const response = await fetch(`/api/nutrition/search/${query}`);
        // const response = await fetch(`/api/nutrition/search/${query}`);
        const data = await response.json();
        console.log(data);
        setRecipes(data);
    };
    return (
        <div>
            <section>
                {
                    // condition ? do this : do this instead 
                    recipes.results ? <>
                    {recipes.results.map((element:any)=>(<div key={element.id}>
                        {element.title}
                        <img src={element.image} alt={element.title} />
                    </div>))}
                    </>: <div>no recipes to display</div>
                }
            </section>
        </div>
    )
}

export default Recipe