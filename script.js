alert("hello")
const api={
    key:"2d428749461382aec70725c4da65e00c",
    base: "https://api.openweathermap.org/data/2.5/"

}
const searchbox=document.querySelector(".search-box");
searchbox.addEventListener("keypress",setQuery)