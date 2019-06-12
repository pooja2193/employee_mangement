$(document).ready( function(){
   console.log("hello");
    //get all employees
  $("#employees").click(function(){
      $.get({url:"http://dummy.restapiexample.com/api/v1/employees", async:false}).done(function (response) {
        var str='';
        var content ='';
       $.each(JSON.parse(response),function (i,item) {
           content ='';
          if(i===0){
            for(let key in item){
                console.log(key);
                str = str + "<th>"+key+"</th>";
                content= content + "<td>" +  item[key] + "</td>";
            }
            str= "<tr>" + str + "</tr>";
              $("#recordsTable").append(str);
          }
          else{
              for(let key in item){
                  content= content + "<td>" +  item[key] + "</td>";
              }
          }
           console.log(item.id);
           content = "<tr>" + content + "</tr>";
           $("table:last-child").append(content);
       });
      });
  });

//get employee by id
  $("#search").click(function(){
      const value = $("#searchValue").val();
      const url = "http://dummy.restapiexample.com/api/v1/employee/" + value;
      let str = '';
      console.log(url);
      $.get({url:url, async: false}).done(function(response) {
          const res = JSON.parse(response);
          for(let key in res){
              str = str+key + " : " + res[key] + " ";

              console.log(key);
          }
          str= "<p>" + str + "</p>";
         console.log(str);
         $("#searchText").append(str);

      });
  });


  // create employee record
  $("#create").click(function () {
      let str ='';
      $("#createEmp").css("visibility", "visible");
  });

  $("#addEmp").click(function(){
   let data ={};
     data.name = $("#emp_name").val();
      data.age = $("#emp_age").val();
      data.salary = $("#emp_sal").val();
      console.log(data);
      const url ="http://dummy.restapiexample.com/api/v1/create";

    $.ajax({ url: url,
        dataType: 'text',
        type: 'post',
        data: JSON.stringify(data) ,
        success: function( data, textStatus, jQxhr ){
        console.log(data);
    }
    });

  });


  //update employee by id
  $("#update_emp").click(function(){
      $("#updateEmp").css("visibility","visible");
  });

  $("#updEmp").click(function(){
      const id= $("#id_upd").val();
     let url = "http://dummy.restapiexample.com/api/v1/update/" + id;
     let data = {};
     data.name= $("#upd_name").val();
     data.age= $("#upd_age").val();
     data.salary = $("#upd_salary").val();
     console.log(data);
     //let data = {"name":"jjjjwww","salary":"1123","age":"23"};
      $.ajax({url:url,
          type: "put",
          data:JSON.stringify(data),
          success: function(response){
              console.log(response);
          }
      });
  });


  //delete employee by id
    $("#delete").click(function(){
        $("#delete_id").css("visibility","visible");
    });

    $("#del_user").click(function(){
       const id = $("#del_id").val();
       let url ="http://dummy.restapiexample.com/api/v1/update/" + id;
       $.ajax({url:url, type: 'DELETE'}).done(function(response){
           console.log(response);
       });
    });


});