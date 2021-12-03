const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    console.log(img.src)
}

const links = document.querySelectorAll('p a');