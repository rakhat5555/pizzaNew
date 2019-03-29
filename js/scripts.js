// backend
function Menu(size, price) {

  this.size = 0;
  this.price = 0;
  this.toppings = [];
}
Menu.prototype.getPrice = function() {
  var sum = (this.toppings.length * 5 + (this.size * 2) + 3);
return $(".price").text(sum)
  console.log(sum);
}
function Menu2(size, price) {

  this.size = 0;
  this.price = 0;
  this.toppings = [];
}
Menu2.prototype.getPrice2 = function() {
  var sum2 = (this.toppings.length * 5 + (this.size * 2) + 3);
return $(".price2").text(sum2)
  console.log(sum2);
}







// interface logic
$(document).ready(function() {

var menuList = new Menu()

  $("form#menu").submit(function(event) {
  // debugger;
    event.preventDefault();
    var nameInput = $("input#name").val();
      menuList.size = parseInt($("#size").val());
     // console.log(menuList.size);
    $("input:checkbox[name=topping]:checked").each(function() {
      menuList.toppings.push($(this).val());

    });
      $(".result").append( "<li>" + " with " +  menuList.toppings + " and " + "</li>")
    menuList.getPrice();



    $(".name").text(nameInput.toUpperCase())
    $("#result").show();
    $("#menu").hide();
    $("#secondOrder").hide();
    $("#addPizza").show();
    $("#result2").hide();
    $("#order2").hide();
  });
  $("#resetMenu").click(function() {
     // $("#name").show();
    $("#resetMenu").hide();
    $("#order2").show();

   });

   });
   $(document).ready(function() {

     var menuList2 = new Menu2();
     $("form#menu2").submit(function(event) {
       event.preventDefault();
       $("input:checkbox[name=topping1]:checked").each(function() {
         menuList2.toppings.push($(this).val());

       });
         $(".result2").append( "<li>" + " with " +  menuList2.toppings + " and " + "</li>")
       menuList2.getPrice2();
     });
     // $("#result").show();
     // $("#menu2").hide();

     $("#result2").show();
   });
