let myData = [ 
    {ID:'1', ASSIGNMENT: 'Greeting Assignment', VIEW:'<a href="Greeting.html"><img style="width: 30px" src="img/icons8-eye-24.png"></a>'},

    {ID:2, ASSIGNMENT: 'Grading System Assignment', VIEW:'<a href="Grading_System.html"> <img style="width: 30px" src="img/icons8-eye-24.png"> </a>'},

    {ID:3, ASSIGNMENT: 'Even Or Not Even Assignment', VIEW:'<a href="Integer_T_F.html"> <img style="width: 30px" src="img/icons8-eye-24.png"> </a>'},

    {ID:4, ASSIGNMENT: 'Two Sum', VIEW:'<a href="Two_Sum.html"> <img style="width: 30px" src="img/icons8-eye-24.png"> </a>'}
]


populate(myData);


function populate(data){
    let table = document.getElementById('table')
    
    for(let i = 0; i < data.length; i++){
        let row = `<tr>
                        <td>${myData[i].ID}</td>
                        <td>${myData[i].ASSIGNMENT}</td>
                        <td>${myData[i].VIEW}</td>                    
                  </tr>`
            table.innerHTML += row

    }
};


