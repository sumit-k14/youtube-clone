import React from 'react';
import './Category.css';

function HomeCategory() {
    return(
     <div class="categories">
       <section class="category-section">
         <button class="category active">All</button>
         <button class="category">Cricket</button>
         <button class="category">JavaScript</button>
         <button class="category">Clever Programmer</button>
         <button class="category">Music</button>
         <button class="category">Comedy</button>
         <button class="category">Trailers</button>
         <button class="category">Thapa Technical</button>
         <button class="category">Bollywood Music</button>
         <button class="category">Science</button>
         <button class="category">Reactjs</button>
       </section>
     </div>
    )
}

export default HomeCategory;