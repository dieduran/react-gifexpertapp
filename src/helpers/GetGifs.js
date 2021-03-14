export const getGifs = async(category) =>{
    const cantidadImagenes = 2;
    const url=`https://api.giphy.com/v1/gifs/search?limit=${cantidadImagenes}&q=${encodeURI(category)}&api_key=fLAR9jE8d8fSgB6niL5PNnZOO5oMUUHA`;
    const resp= await fetch(url);
    const {data}= await resp.json();

    const gifs= data.map( img => {
        return{
            id:img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    // console.log(gifs);
    // setImages(gifs);
    return gifs;
}
