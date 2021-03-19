const img = document.querySelector('.meme-image');

async function fetchMemeImage(){
    /* const page = Math.ceil(Math.random() * 11);
    let index = Math.floor(Math.random() * 24);
    if(page === 11){
        index = Math.floor(Math.random() * 16);
    } */

    const goodLinkIds = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,
    22,23,24,25,26,27,28,29,30,31,32,34,35,36,38,39,40,41,42,43,44,45,
    46,47,52,53,54,55,56,57,58,59,60,61,62,63,64,67,68,69,71,74,
    75,77,78,79,81,82,85,86,87,88,89,94,96,98,101,102,104,106,107,
    110,111,112,113,117,118,120,122,124,129,130,131,132,133,135,156,
    157,159,160,161,164,166,168,169,171,174,175,176,178,179,
    182,183,186,188,190,192,206,207,208,212,213,214,215,216,217,
    222,224,226,229,230,232,233,234,235,240,241,244,
    245,246,247,248,250,251,254,255
    ]
    console.log("Good links: " + goodLinkIds.length);
    const index = Math.floor(Math.random() * goodLinkIds.length);
    
    const API_URL = 'http://localhost:3000/' + goodLinkIds[index];
 
    await axios.get(API_URL)
    .then(response =>{
        insertImage(response.data.image, response.data.ID);
    })
    .catch(error => {
        console.log(error)
    });
    
}

function insertImage(image, id){
    console.log("ID: " + id + " " + image);
    img.src = image;
}
