// OUR OWN CUSTUM function to write dom shortly.This type of function is used to create programming Language
// this type of function is called - helper functions
//thus we can create our own function for our life better or let's coding work for us


let id;
function read(id) {
  return document.getElementById(id).value;
}




async function Translate() {
  try {
    //1. text to translate

    const input = read("input_text");

    const input_language= read('input_language')

    const output_language= read('output_language')

    const res = await fetch(`https://libretranslate.de/translate`, {                       //fetch() is a function, we can pass many arguments there, we passing object there

     //POST REQUEST :-                                                                                                    //chenging the url to ".com" to ".de"

      method: "POST",

      body: JSON.stringify({                                                             // We don't write GET requeste because GET is  default of fetch
        q: input,
        source: input_language,
        target: output_language,
        format : 'text',
      }),                          
       
                           
    headers :{                                                                          // header is : additional information about our request that server might need to know
    'Content-type' :'application/json'                                                 // just telling to the server  that we are sending you the data in json format. We are writing in the " " because it's a standard format.there are multiple header request need to know .
  },
      


    });

     const data = await res.json();
    console.log('data:', data)
     
    document.getElementById('output-data').innerText = data.translatedText;



    // using Destructuring :- 


    // const {translatedText} = await res.json();
    // console.log('translatedText:', translatedText)

    // document.getElementById('output-data').innerText =translatedText;

     
  } catch (error) {
    console.log("error:", error);
  }
}




async function main(){
  let Data = await Translate()
  console.log('Data:', Data)   // undefined

  if (Data === undefined) {
    return false;
  }
}

function Debounce(func,deley){
if(id){
  clearTimeout(id)
}

id = setTimeout(()=>{
  func()
},deley)
}

