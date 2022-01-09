import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function(){
  $("#randomButton").click(function(){
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.unsplash.com/photos/random/?client_id=${process.env.API_KEY}`
      request.onload = function(){
        if(this.status === 200){
          resolve(request.response);
        } else{
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(response){
      const body = JSON.parse(response);
      $("#picDisplay").html(`<img src=${body.urls.regular} alt=${body.alt_description}>`);
      $("#attribution").html(`<a href=${body.user.links.html}>${body.user.name}</a>`);
    }, function(error){
      $('#showErrors').text(`There was an error processing your request: ${error}`)
    });
  });
});