const AllTeams = [

    {
        id : 0,
        name : 'Qatar',
        slugURL : '',
    },

    {
        id : 1,
        name : 'Ecuador',
        slugURL : '',
    },

    {
        id : 2,
        name : 'Senegal',
        slugURL : '',
    },

    {
        id : 3,
        name : 'The Netherlands',
        slugURL : '',
    },

    {
        id : 4,
        name : 'England',
        slugURL : '',
    },

    {
        id : 5,
        name : 'Iran',
        slugURL : '',
    },

    {
        id : 6,
        name : 'USA',
        slugURL : '',
    },

    {
        id : 7,
        name : 'Wales',
        slugURL : '',
    },

    {
        id : 8,
        name : 'Argentina',
        slugURL : '',
    },

    {
        id : 9,
        name : 'Saudi Arabia',
        slugURL : '',
    },

    {
        id : 10,
        name : 'Mexico',
        slugURL : '',
    },

    
    {
        id : 11,
        name : 'Poland',
        slugURL : '',
    },

    
    {
        id : 12,
        name : 'France',
        slugURL : '',
    },

    
    {
        id : 13,
        name : 'Australia',
        slugURL : '',
    },

    
    {
        id : 14,
        name : 'Denmark',
        slugURL : '',
    },


    {
        id : 15,
        name : 'Tunisia',
        slugURL : '',
    },


    {
        id : 16,
        name : 'Spain',
        slugURL : '',
    },


    {
        id : 17,
        name : 'Costa Rica',
        slugURL : '',
    },

    
    {
        id : 18,
        name : 'Germany',
        slugURL : '',
    },

    {
        id : 19,
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

        // var randomIndex = Math.floor( Math.random() * AllTeams.length ); 

        var randomIndex = [];
        var teamsGroup = [];
        var groups = [];

        for( let i = 0 ; i <= inputNum-1 ; i++ ) {

            var random = Math.floor( Math.random() * AllTeams.length );
            randomIndex.push( random ); 
            
            // AllTeams.splice( random , 1 );

        }

        for( let j = 0 ; j <= randomIndex.length-1 ; j++ ) {

            for( let z = 0 ; z <= AllTeams.length-1 ; z++) {
                
                if( randomIndex[j] == AllTeams[z].id ) {

                    var obj = {};
                    obj["name"] = AllTeams[z].name;
                    obj["id"] = AllTeams[z].id;

                    teamsGroup.push(obj);

                }// end if

            }// end for(2)


        }// end for(1)
        
        const chunkSize = 4;
        for ( let i = 0; i < teamsGroup.length; i += chunkSize ) {

            groups.push( teamsGroup.slice(i, i + chunkSize) );
            
        }
        console.log(groups);

    }// end main if

    else {
        alert("The number must be divisible by 4");
    }
})





