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
        const query = 'Chicken';
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
                    recipes.menuItems ? <>
                    {recipes.menuItems.map((element:any)=>(<div key={element.id}>
                        {element.title}
                        <img src={element.image} alt={element.title} />
                    </div>))}
                    </>: <div>no recipes found</div>
                }
            </section>
        </div>
    )
}

export default Recipe