
const numb = (getData) =>{

    const digt= [];

    for (let i = 1; i < 10; i++){
        digt.push(
            <button onClick={() => getData(i.toString())} key={i}>{i}</button>
        )
    }
    return digt;
}

export default numb;