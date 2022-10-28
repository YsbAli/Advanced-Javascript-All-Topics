async function getData(url){
  
  let res = await fetch(url)
    
    let data = await res.json()

    return data

}



function append(data,parent,who){
    data.forEach((el)=>{
        let p = document.createElement('p')

        if(who == 'users'){
            p.innerText = el.name;
        }

       else{
        p.innerText = el.title
       }


       parent.appendChild(data,parent,p)

    })
}


export { getData,append }