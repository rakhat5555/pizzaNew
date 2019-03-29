// backend
function Menu(size, price) {

  this.size = 0;
  this.price = 0;
  this.toppings = [];
}
Menu.prototype.getPrice = function() {
  var sum = (this.toppings.length * 5 + (this.size * 2) + 3);
// return $(".price").text(sum)
return(sum)
  console.log(sum);
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
      // shows what the user choice
        $(".result").append( "<li>" + " with " +  menuList.toppings + " and " + "</li>")
      // menuList.getPrice();
      $(".price").append(menuList.getPrice())

      $(".name").text(nameInput.toUpperCase())
      $("#result").show();
      $("#menu").hide();

      $("#addPizza").show();
      $("#result2").hide();

    });
    $("#resetMenu").click(function() {
       $("#inputName").hide();
      $("#resetMenu").hide();
      $("#order2").show();
    });
// second pizza order form
    var menuListSecond = new Menu()

      $("form#menuSecond").submit(function(event) {
      // debugger;
        event.preventDefault();

          menuListSecond.size = parseInt($("#size2").val());
         // console.log(menuList.size);
        $("input:checkbox[name=topping2]:checked").each(function() {
          menuListSecond.toppings.push($(this).val());

          });

            $(".result2").append( "<li>" + " with " +  menuListSecond.toppings + " and " + "</li>")
            $(".price2").append(menuListSecond.getPrice())
            $(".totalSum").append(menuListSecond.getPrice() + menuList.getPrice())
          $("#result2").show();
          $("#order2").hide();


        });
      });
