var cont = document.querySelector(".video-container");

async function searchBtn(){
    try{
        const API = "AIzaSyCuaKX4NZW-lYWnshY8t5F32UzAKyvP0iw";
        var inp = document.querySelector(".search-bar").value;
        let resposne =await fetch( 
                `https://youtube.googleapis.com/youtube/v3/search?q=${inp}&key=${API}&type=video&maxResults=10&part=snippet`
                );
        let data = await resposne.json();
            console.log("Data",data)
        let videos = data.items;
        console.log("Videos",videos);
        appendVideos(videos);

    }catch(err){
        console.log("err",err);
    }

        
    }
   
    const appendVideos = (arr) => {
        cont.innerHTML=null;
    var filter = document.querySelector(".filters");
    filter.style.display = "none";
  
  arr.forEach(({snippet,id:{videoId}})=>{
    console.log("snippet",snippet)

    let video = document.createElement("div");
        video.setAttribute("class","video");
          
        //channel Icon
        let img = document.createElement("img");
        img.setAttribute("class","thumbnail");
        img.src=snippet.thumbnails.medium.url;

        let content = document.createElement("div");
        content.setAttribute("Class","content");

        let channelIcon = document.createElement("img");
        channelIcon.setAttribute("class","channel-icon");
        channelIcon.src="https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s68-c-k-c0x00ffffff-no-rj";

        var info = document.createElement("div");
       info.setAttribute("class","info");

       var name = document.createElement("h4");
       name.innerText = snippet.title;

    //    var desc = document.createElement("p");
    //    desc.innerText = snippet.description;
       

       name.setAttribute("class","title");
        // title.text-content=title;
        // name.innerText=title;


       var channelName = document.createElement("p");
       channelName.setAttribute("class","channel-name");
       channelName.innerText=snippet.channelTitle;

       info.append(name,channelName);
       content.append(channelIcon,info);
       video.append(img,content);
       cont.append(video);
    
    
       
       let data_to_send = {
           snippet,
           videoId
       }
       video.onclick=()=>{
           playVideo(data_to_send);
       }
       

  });
};

function playVideo(data){
  localStorage.setItem("Clicked_video",JSON.stringify(data));
  window.location.href="playvideo.html";
}

 