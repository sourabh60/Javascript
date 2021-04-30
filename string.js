const movie = {
    title: 'a',
    releaseYear: 2021,
    director: 'pqr',
    rating: 10
};

showProperties(movie);

function showProperties(obj)
{
    for(let key in obj)
        if(typeof obj[key]=='string')
            console.log(key,obj[key]);

}