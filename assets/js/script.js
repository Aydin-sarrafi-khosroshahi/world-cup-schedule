const AllTeams = [

    {
        
        name : 'Qatar',
        slugURL : '',
    },

    {
        name : 'Ecuador',
        slugURL : '',
    },

    {
        name : 'Senegal',
        slugURL : '',
    },

    {
        name : 'The Netherlands',
        slugURL : '',
    },

    {
        name : 'England',
        slugURL : '',
    },

    {
        name : 'Iran',
        slugURL : '',
    },

    {
        name : 'USA',
        slugURL : '',
    },

    {
        name : 'Wales',
        slugURL : '',
    },

    {
        name : 'Argentina',
        slugURL : '',
    },

    {
        name : 'Saudi Arabia',
        slugURL : '',
    },

    {
        name : 'Mexico',
        slugURL : '',
    },

    
    {
        name : 'Poland',
        slugURL : '',
    },

    
    {
        name : 'France',
        slugURL : '',
    },

    
    {
        name : 'Australia',
        slugURL : '',
    },

    
    {
        name : 'Denmark',
        slugURL : '',
    },


    {
        name : 'Tunisia',
        slugURL : '',
    },


    {
        name : 'Spain',
        slugURL : '',
    },


    {
        name : 'Costa Rica',
        slugURL : '',
    },

    
    {
        name : 'Germany',
        slugURL : '',
    },

    {
        name : 'Japan',
        slugURL : '',
    },

];


$('#submit-btn').click(function () {
    var inputNum = $('#countries-number').val();
    if( inputNum < 0 ) {
        alert("this cant be negative");
    }
    else if( inputNum == 0 ) {
        alert("this cant be 0");
    }
    else if ( inputNum > 20 ) {
        alert("there are 20 teams");
    }
    else if( inputNum % 4 == 0 ) {

        var randomIndex = Math.floor( Math.random() * AllTeams.length ); 

        var randomIndex = [];

        for( let i = 0 ; i <= inputNum-1 ; i++ ) {
            randomIndex.push( Math.floor( Math.random() * AllTeams.length )) ; 

        }

        for( let j = 0 ; j <= randomIndex.length-1 ; j++ ) {
            console.log(randomIndex[j]);

            for( let z = 0 ; z <= AllTeams.length-1 ; z++) {
                console.log(AllTeams[z]);
            }

        }


    }else {
        alert("The number must be divisible by 4");
    }
})





