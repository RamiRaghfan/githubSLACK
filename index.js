const express = require('express');
const bp = require('body-parser');
const app = express();
const fetch = require('node-fetch');

app.use(bp.json());

app.get('/', (req, res) => { return res.send("Hello world");});

app.post('/webhook', (req, res) => {
    
    let body = req.body;

  



    let branch = body.ref.replace('refs/heads/', '');

    console.log(req.body + " BODYYY");
    let added = body.head_commit.added.join(', ');
    let modified = body.head_commit.modified.join(', ');
    let removed = body.head_commit.removed.join(', ');
    let commit_link = body.head_commit.url;

    let message = `New Push \n\nBranch : ${branch}\nAdded : ${added}\n Modified : ${modified}\nRemoved : ${removed}\nLink : ${commit_link}`;

    let options = {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({text : message})
    }

    fetch('https://xxxxxxxx', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      text: message
    })
  })
  .then(response => {
    console.log(response.body);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
    
    return "Working";
    
})




app.listen(8080, ()=> {console.log("Server is running on port 8080")});




