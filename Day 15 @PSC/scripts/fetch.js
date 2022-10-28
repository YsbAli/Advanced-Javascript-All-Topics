// now we have to fatch our data

const searchIMage = async (API, value) => {
  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`
    );

    let data = await res.json();
    //   console.log("data:", data);
    return data;
  } catch (error) {
    console.log("error:", error);
  }
};

let append = (data, container) => {
  data.forEach(({ alt_description, urls: { small } }) => {
    //destructing data from api result

    let div = document.createElement("div");
    div.setAttribute('class',"result_images")

    let image = document.createElement("img");
    image.src = small;

    let h3 = document.createElement("h3");
    h3.innerHTML = alt_description;

    div.append(image, h3);
    container.append(div);
  });
};

export { searchIMage,append };
