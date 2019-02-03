// write a function to retrieve a blob of json
// Use the 'fetch' function - 'fetch' returns a promise
// http://rallycoding.herokuapp.com/api/music_albums

// promises
const fetchAlbumsPromise = () => {
  fetch('http://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json))
}

fetchAlbumsPromise()


// async await

const fetchAlbums = async () => {
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()

  console.log(json)
}

fetchAlbums()