$(document).ready(function(){$("a.loginLink").click(function(e){"Profile"!==this.text&&(e.preventDefault(),$(".overlay").fadeToggle("fast"))}),$(".close").click(function(){event.preventDefault(),$(".overlay").fadeToggle("fast")}),$("#loginBTN").click(function(){$(".loginLink").text="Profile"})}),$(document).ready(function(){$(document).keyup(function(e){27===e.keyCode&&"none"!==$(".overlay").css("display")&&(event.preventDefault(),$(".overlay").fadeToggle("fast"))})});