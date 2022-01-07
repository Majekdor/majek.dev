import Layout from '../components/layout';
import React, {useEffect, useState} from 'react';

export default function Movies() {
    const [categories, setCategories] = useState();
    const [selection, setSelection] = useState();

    useEffect(() => {
        getCategoriesString().then(categories => {
            setCategories(categories);
        })
    }, [setCategories])

    function handleSubmit(e) {
        e.preventDefault();
        getSelection(textInput.current.value.toLowerCase()).then(selection => {
            setSelection(selection);
        })
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    let textInput = React.createRef();

    return (
        <Layout title="movies">
            <article>
                <h1>Movie Selector</h1>
                <p>This is a simple movie selector. Please pick a category or just type "random".</p>
                <hr/>
                <h3>Available Categories: </h3>
                <p>{categories}</p>
                <h2>Pick a category: </h2>
                <textarea ref={textInput} id="select" name="text" placeholder="Type category here" onKeyDown={handleKeyDown}/>
                <br/>
                <button type="submit" onClick={handleSubmit}>Find A Movie</button>
                <br/>
                <br/>
                <p>{selection}</p>
            </article>
        </Layout>
    )
}

async function fetchJson() {
    const response = await fetch("/assets/movies.json");
    return await response.json();
}

async function getCategoriesString() {
    let json = await fetchJson();
    const movies = json["movies"];
    let catString = "";
    for (let key in movies) {
        catString += (key + ", ");
    }
    return catString.substring(0, catString.length - 2);
}

async function getSelection(category) {
    let json = await fetchJson();
    let movieArray = [];
    let movies = json["movies"];
    for (let key in movies) {
        movieArray.push(key);
    }

    if (category === undefined || category === "") {
        return "Selection: Unknown Category.";
    }

    if (category === "random") {
        category = movieArray[getRandom(0, movieArray.length - 1)];
    }

    let catJson = movies[category];
    if (catJson === undefined) {
        return "Selection: Unknown Category.";
    }
    return "Selection: " + catJson[getRandom(0, catJson.length - 1)];
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
