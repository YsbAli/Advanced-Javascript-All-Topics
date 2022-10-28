// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer[YOUR_ACCESS_TOKEN];
// Accept: application / json;

// Api Key :-    AIzaSyBgff3AzSPif4UNTKD0BjhgGKfDHHU-JsU
// My project 48141 :- AIzaSyAX2uED6gFhZ4BGAyYaG2MYinPZR-KyB5s
// Real Api key SHOW KEY :- AIzaSyAX2uED6gFhZ4BGAyYaG2MYinPZR-KyB5s

// ---------------------------------------------------------------------------------------

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY]

//  Finall API KEY : - AIzaSyAX2uED6gFhZ4BGAyYaG2MYinPZR-KyB5s



const API = "AIzaSyAX2uED6gFhZ4BGAyYaG2MYinPZR-KyB5s";

const searchVideos = async () => {
  try {
    const q = document.getElementById("query").value;

    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`
    );

    const data = await res.json();
    console.log("data:", data.items);
    append(data.items);

    // console.log("res: ", res);
  } catch (error) {
    console.log(error);
  }
};

const append = (videos) => {
  let show_videos = document.getElementById("show_videos");
     
  show_videos.innerHTML = null;  // for delete previous search


  videos.forEach(({ id: { videoId }, snippet: { title } }) => {
    let div = document.createElement("div");

    let iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube.com/embed/${videoId}`;

    iframe.width = "100%";
    iframe.height = "100%";
    iframe.allow = "fullscreen";

    let Title = document.createElement("h4");

    Title.innerText = title;

    div.append(iframe, Title);
   
    let data ={
        title,
        videoId
    }





    //div.onclick = ShowVideos(data)       // it will redirect to another page ,So to fixed it we have to pass this to a function

    div.onclick = () =>{
        ShowVideos(data);
    }


    show_videos.append(div);
  });
};



const ShowVideos = (x)=>{
    window.location.href = "showvideo.html";

    localStorage.setItem("Video: ", JSON.stringify(x))
}