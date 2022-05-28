let searchParams = new URLSearchParams(window.location.search);
let accessToken = JSON.parse(localStorage.getItem("userAccessToken"))

accessToken == null ? (accessToken = searchParams.get("access_token")) : (0)
window.history.replaceState({}, document.title, window.location.pathname+window.location.hash);

fetch(
  `https://api.spotify.com/v1/search?type=show&q=pretty&limit=5&access_token=${accessToken}`
)
.then((res)=>res.json())
.then(data=> (//console.log(data),
  data.error == null ? (/*console.log("accepted"),*/localStorage.setItem("userAccessToken",JSON.stringify(accessToken))):
(/*console.log("denided"),*/localStorage.removeItem("userAccessToken"))
))


//console.log(accessToken);

export let SAT = accessToken;

