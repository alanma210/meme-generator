const form = document.querySelector('#add-meme');
const url = document.querySelector('#url'); // set or get, use url.value
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const memes = document.querySelector('#memes');

form.addEventListener('submit', generateMeme);

function generateMeme(e) {
    e.preventDefault();
    // console.log('you just clicked:' + e.target.tagName);
    let imageLink = url.value; 
    let topTextValue = topText.value;
    let bottomTextValue = bottomText.value;
    const br = document.createElement('br');

    if (url.value === '') {
        // console.log('Enter url...');
        const h1 = document.querySelector('h1');
        h1.textContent = "Invalid image URL.."
    }

    const imgDiv = document.createElement('div');
    imgDiv.className = 'img-div';
    const newImg = document.createElement('img');
    newImg.setAttribute('src', url.value);
    newImg.setAttribute('class', 'meme');

    const topTextDiv = document.createElement('div');
    topTextDiv.className = 'top-text';
    topTextDiv.textContent = topText.value;

    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.className = 'bottom-text';
    bottomTextDiv.textContent = bottomText.value;

    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('id', 'remove');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function(e) {
        // console.log(e.target.tagName);
        e.target.parentElement.remove();
        const h1 = document.querySelector('h1');
        h1.textContent = "Meme Generator!";
    });

    imgDiv.appendChild(topTextDiv);
    imgDiv.appendChild(newImg);
    imgDiv.appendChild(bottomTextDiv);
    imgDiv.appendChild(br);
    imgDiv.appendChild(removeBtn);
    memes.appendChild(imgDiv);
    form.reset();
}
