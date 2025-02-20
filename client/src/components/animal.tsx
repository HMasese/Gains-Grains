function motivation(){

    const animal1 = "For those with goals";
    const animal2 = "For those with big plans";
    const animal3 = "For those trying to make a change";
    const animal4 = "for those trying to do better"

const animal = JSON.parse('{"type": "Dog"}');
console.log(animal);

    return(
        <ul>
            <li>{animal1}</li>
            <li>{animal2}</li>
            <li>{animal3}</li>
            <li>{animal4.toUpperCase()}</li>
        </ul>
    );
}

export default motivation