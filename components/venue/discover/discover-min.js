$(document).ready(function(){$("#dropDownMenu a").on("click",function(n){n.preventDefault(),$(this).toggleClass("action").next().slideToggle()})});