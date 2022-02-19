// Toggle the link bar for responsivness 
// To Do that active the link-bar 
const btn=document.getElementById("toggleButton");
const link=document.getElementsByClassName("navbar")[0];

btn.addEventListener('click',()=>{
    link.classList.toggle('active');
})





// <div class="gallery-item">
// <div class="image">
//     <img src="http://source.unsplash.com//600x400/?orphanage" alt="food">
// </div>
// <div class="item">
//     <div class="text">
//         <h2>Title</h2>
//         <div class="paragraph">Description goes here </div>
//     </div>
//     <progress class="progress" max="140000" value="70000"></progress>
//     <div class="button">
//         <button class="D-S donate">Donate</button>
//         <button class="D-S share">Share</button>
//     </div>
// </div>
// </div>

