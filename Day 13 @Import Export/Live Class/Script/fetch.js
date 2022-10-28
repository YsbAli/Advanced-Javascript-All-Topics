
const getData = async(url) =>{
    let res  = await fetch(url);
    let data = await res.json();
    console.log('data:', data)
    
    return data                                     // after getting the data we will return
}



const append = (data, container) =>{
     data.forEach(({title,description,image,price}) =>{                                // if more than one then give comma like {title,description,price}
        let h1 = document.createElement('h4')
        // h1.innerText = "Title :" + title;
        h1.innerText = title;

        let desc = document.createElement('p')
        desc.innerText = description

        let pic = document.createElement('img')
        pic.src = image;

       let Prize = document.createElement('h1')
       Prize.innerText = "$" + price;

    //    let Rating = document.createElement('h2')
    //    Rating.innerText = rating.

       
        
       container.append(pic,Prize,h1,desc)
     })
}


export {getData, append}                              // we are packing all the data in container 

