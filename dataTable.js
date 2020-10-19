//Check if document is Ready
$('document').ready(()=>{
    //Fetching json data
$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    dataType: 'json',
    success: (data) => {
        var content = $("#table1")
            .DataTable({
                data: data,
                'columns': [

                    {
                        'data': 'id'
                    },

                    {
                        'data': 'name'
                    },


                    {
                        'data': 'username'
                    },


                    {
                        'data': 'email'
                    },


                    {
                        'data': 'phone'
                    },

                    {
                        'data':'website'
                    }

                ]


            });
    }
});
});