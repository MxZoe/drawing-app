import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UnsplashService from './services/unsplash-service.js';


function displayPic(response, color){
  if(color === "bw"){
    $("#picDisplay").html(`<img src=${response.urls.small}&fit=crop&sat=-100 alt=${response.alt_description}>`);
  } else if(color ==="invert"){
    $("#picDisplay").html(`<img src=${response.urls.small}&fit=crop&invert=true alt=${response.alt_description}>`);
  } else{
    $("#picDisplay").html(`<img src=${response.urls.small}&fit=crop alt=${response.alt_description}>`);
  }
  $("#photographer").html(`<a href=${response.user.links.html}>${response.user.name}</a>`);
  $("#attribution").show();
}

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

$(document).ready(function(){
  let response;
  $("#colorDiv").change(function(){
    let color = $('input[name="colorValue"]:checked').val();
    displayPic(response, color);
  })
  $("#randomButton").click(function(){
    let color = $('input[name="colorValue"]:checked').val();
    UnsplashService.getService("")
      .then(function(unsplashResponse){
        if (unsplashResponse instanceof Error) {
          throw Error(`Unsplash API error: ${unsplashResponse.message}`);
        }
        displayPic(unsplashResponse, color);
        response = unsplashResponse;
      })
      .catch(function(error) {
        displayErrors(error.message)
      });
    });
  
  $("#searchForm").submit(function(event){
    event.preventDefault();
    let searchTerm = $("#search").val();
    $("#search").val("");
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.unsplash.com/photos/random/?query=${searchTerm}&client_id=${process.env.API_KEY}`
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
    $("#picDisplay").html(`<img src=${body.urls.small}&ar=1.77:1&fit=crop&fill=blur alt=${body.alt_description}>`);
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
    $("#picDisplay").html(`<img src=${body.urls.small}&ar=1.77:1&fit=crop&fill=blur alt=${body.alt_description}>`);
    $("#photographer").html(`<a href=${body.user.links.html}>${body.user.name}</a>`);
    $("#attribution").show();
    }, function(error){
      $('#showErrors').text(`There was an error processing your request: ${error}`)
    });
  });
  $("#plantButton").click(function(){
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.unsplash.com/photos/random/?query=plant,flower,floral&client_id=${process.env.API_KEY}`
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
    $("#picDisplay").html(`<img src=${body.urls.small}&ar=1.77:1&fit=crop&fill=blur alt=${body.alt_description}>`);
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
    $("#picDisplay").html(`<img src=${body.urls.small}&ar=1.77:1&fit=crop&fill=blur alt=${body.alt_description}>`);
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