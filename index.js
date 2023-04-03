import $ from "jquery";
import './css/styles.css';
import UnsplashService from './src/services/unsplash-service.js';


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
function rotate(response, degree){
  $("#picDisplay").html(`<img src=${response.urls.small}&rot=${degree}>`);
}
function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

$(document).ready(function(){
  let response;
  let degree = 0;
  $("#colorDiv").change(function(){
    let color = $('input[name="colorValue"]:checked').val();
    displayPic(response, color);
  });
  $("#rotateButton").click(function(){
    degree += 90;

    $("#degree").text(`${degree}`)
    rotate(response, degree);
  });
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
    let color = $('input[name="colorValue"]:checked').val();
    UnsplashService.getService(`${searchTerm}`)
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

  $("#peopleButton").click(function(){
    let color = $('input[name="colorValue"]:checked').val();
    UnsplashService.getService('person,people')
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

  $("#animalButton").click(function(){
    let color = $('input[name="colorValue"]:checked').val();
    UnsplashService.getService('animal,fauna')
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
  $("#plantButton").click(function(){
    let color = $('input[name="colorValue"]:checked').val();
    UnsplashService.getService('plant,flower,flora')
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
  $("#thingsButton").click(function(){
    let color = $('input[name="colorValue"]:checked').val();
    UnsplashService.getService('thing,object,stuff')
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
  $("#cityButton").click(function(){
    let color = $('input[name="colorValue"]:checked').val();
    UnsplashService.getService('city,urban')
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
  $("#landscapeButton").click(function(){
    let color = $('input[name="colorValue"]:checked').val();
    UnsplashService.getService('landscape,wilderness,nature')
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
    $("#randomButton").click();
});