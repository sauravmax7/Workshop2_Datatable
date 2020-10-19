//Check if Dom is ready
$(document).ready(function () {

//Requesting Json data through ajax
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
        success: (data) => {

            var x=" ";

            //Iterating using for loop 
            $.each(data, function (key, value) {

                
                //CONSTRUCTION OF ROWS HAVING 
                // DATA FROM JSON OBJECT 
                x += '<tr>';
                x += '<td>' +
                    value.id + '</td>';

                x += '<td>' +
                    value.name + '</td>';

                x += '<td>' +
                    value.username + '</td>';

                x += '<td>' +
                    value.email + '</td>';

                x += '<td>' +
                    value.phone + '</td>';


                x += '<td>' +
                    value.website + '</td>';

                x += '</tr>';
            });

            //INSERTING ROWS INTO TABLE 
            $('#table').append(x);
        }



    })




});
