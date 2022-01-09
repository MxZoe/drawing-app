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
      $("#picDisplay").html(`<img src=${body.urls.small} alt=${body.alt_description}>`);
      $("#photographer").html(`<a href=${body.user.links.html}>${body.user.name}</a>`);
      $("#attribution").show();
    }, function(error){
      $('#showErrors').text(`There was an error processing your request: ${error}`)
    });
  });
  $("#searchButton").click(function(){
    let searchTerm = $("#search").val();
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.unsplash.com/search/photos/?query=cat&client_id=${process.env.API_KEY}`
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
      $("#picDisplay").html(`<img src=${body.results[0].urls.small} alt=${body.results[0].alt_description}>`);
      $("#photographer").html(`<a href=${body.results[0].user.links.html}>${body.results[0].user.name}</a>`);
      $("#attribution").show();
    }, function(error){
      $('#showErrors').text(`There was an error processing your request: ${error}`)
    });
  });

  $("#peopleButton").click(function(){
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.unsplash.com/photos/random/?query=person,people&client_id=${process.env.API_KEY}`
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
    $("#picDisplay").html(`<img src=${body.urls.small} alt=${body.alt_description}>`);
    $("#photographer").html(`<a href=${body.user.links.html}>${body.user.name}</a>`);
    $("#attribution").show();
    }, function(error){
      $('#showErrors').text(`There was an error processing your request: ${error}`)
    });
  });

  $("#animalButton").click(function(){
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.unsplash.com/photos/random/?query=animal&client_id=${process.env.API_KEY}`
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
    $("#picDisplay").html(`<img src=${body.urls.small} alt=${body.alt_description}>`);
    $("#photographer").html(`<a href=${body.user.links.html}>${body.user.name}</a>`);
    $("#attribution").show();
    }, function(error){
      $('#showErrors').text(`There was an error processing your request: ${error}`)
    });
  });
  $("#thingsButton").click(function(){
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.unsplash.com/photos/random/?query=thing,object,still&client_id=${process.env.API_KEY}`
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
    $("#picDisplay").html(`<img src=${body.urls.small} alt=${body.alt_description}>`);
    $("#photographer").html(`<a href=${body.user.links.html}>${body.user.name}</a>`);
    $("#attribution").show();
    }, function(error){
      $('#showErrors').text(`There was an error processing your request: ${error}`)
    });
  });
  $("#cityButton").click(function(){
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.unsplash.com/photos/random/?query=city,cityscape,urban&client_id=${process.env.API_KEY}`
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
    $("#picDisplay").html(`<img src=${body.urls.small} alt=${body.alt_description}>`);
    $("#photographer").html(`<a href=${body.user.links.html}>${body.user.name}</a>`);
    $("#attribution").show();
    }, function(error){
      $('#showErrors').text(`There was an error processing your request: ${error}`)
    });
  });
  $("#landscapeButton").click(function(){
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.unsplash.com/photos/random/?query=landscape,wilderness,nature&client_id=${process.env.API_KEY}`
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
    $("#picDisplay").html(`<img src=${body.urls.small} alt=${body.alt_description}>`);
    $("#photographer").html(`<a href=${body.user.links.html}>${body.user.name}</a>`);
    $("#attribution").show();
    }, function(error){
      $('#showErrors').text(`There was an error processing your request: ${error}`)
    });
  });

});