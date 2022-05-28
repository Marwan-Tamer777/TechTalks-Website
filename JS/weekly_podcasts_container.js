import { SAT } from "./API_operations.js";

let types = []; //stores the types of each podcast, the data are in the html tag for each podcast.
let podcastsLists = document.querySelectorAll(
  "#podcast_categories .podcast_categories_item"
);
let podcastsData =[] //stores the actural data returned from the API as a 2D array

podcastsLists.forEach((x)=>(types.push(x.getAttribute("type"))))


podcastsLists.forEach((x,index) => (
    x.addEventListener("click", function y(){getSearch(index),this.removeEventListener('click',y)})
)
);

//gets the TOP 5 search results from spotify about that podcast category.
function getSearch(index){
         fetch(
      `https://api.spotify.com/v1/search?type=show&q=${types[index]}&limit=5&access_token=${SAT}`
    )
      .then((res) => (res = res.json()))
      .then((data) => (/*console.log("Data: ",data),*/podcastsData[index] = data.shows.items, updatePodcast(data.shows.items,index)));
}


//updates the podcast catergory element to a list of podcasts from spotify.
function updatePodcast(pods,index){
    let test = `<ul class="podcasts_info"> `
    pods.forEach(
      (item) =>
        (test += `<li id=${item.id} class="podcast_info_item">
            <img src=${
              item.images === undefined ? "none" : item.images[2].url
            } alt="null" class="podcast_info_img">
    <p class="podcast_info_name">${item.name}</p>
    </li>`)
    );

    test= test + "</ul>"
    //console.log("items: ",podcastsData)
    podcastsLists[index].innerHTML=test;

    podcastsListsOEmbded(index);
}


//adds the event listeners to use the embed system on the newly added podacasts
function podcastsListsOEmbded(index){
    let pods = [];
    podcastsData[index].forEach((pod)=>(
        pods.push(document.getElementById(pod.id))
    ));

    pods.forEach((pod, i) =>
      pod.addEventListener("click", () =>
        fetch(
          `https://open.spotify.com/oembed?url=${podcastsData[index][i].external_urls.spotify}`
        )
          .then((res) => (res = res.json()))
          .then((res) => (pod.innerHTML = res.html))
      )
    );

    
    //podcastsLists[index].removeEventListener("click",x)
    //podcastsLists[index].replaceWith(podcastsLists[index].cloneNode(true));
    //console.log("pods: ", pods)
}