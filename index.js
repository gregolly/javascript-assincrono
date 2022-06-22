// fetch("http://api.github.com/users/maykbrito")
// .then((res) => res.json())
// .then(data => fetch(data.repos_url))
// .then(res => res.json())
// .then(d => console.log(d))
// .catch(erro => console.log(erro))

import axios from "axios";

axios.get("/http://api.github.com/users/maykbrito")
.then(res => {
    console.log(res.data)
})
