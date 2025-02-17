function animal(){

    const animal1 = "Dog";
    const animal2 = "Cat";
    const animal3 = "Owl";

const animal = JSON.parse('{"type": "Dog"}');
console.log(animal);

    return(
        <ul>
            <li>{animal1}</li>
            <li>{animal2}</li>
            <li>{animal3.toUpperCase()}</li>
        </ul>
    );
}

export default animal