// rfce 

import React from 'react'

function Card(props) {
    console.log("props",props);
    console.log(props.channel);
  return (
    <div>
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-4">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/27015904/pexels-photo-27015904/free-photo-of-a-goat-with-long-ears-and-a-long-face.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        {props.channel}
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card
