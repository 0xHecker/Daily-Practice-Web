const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    removePictures()
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const data = res.data;
    getPictures(data);
    form.elements.query.value = '';
})

function removePictures() {
    let imgs = document.querySelectorAll('IMG');
    for (let img of imgs) {
        img.remove()
    }
}

const getPictures = (data) => {
    for (let movie of data) {
        if (movie.show.image) {
            const newImage = document.createElement('IMG');
            newImage.src = movie.show.image.medium;
            document.body.append(newImage)
        }
    }
}