const mongoose = require('mongoose');
// const playerList = require('./models/players');


var db = require("./models");


var playerList = [
  {
                teamName: 'Phoenix Suns',
                name: 'Steve Nash',
                positionPlayed: 'Guard',
                value: 100
              },
  {
                teamName: 'San Antonio Spurs',
                name: 'Kawhi Leonard',
                positionPlayed: 'Forward',
                value: 120
              },
  {
                teamName: 'Orlando Magic',
                name: 'Dwight Howard',
                positionPlayed: 'Center',
                value: 50
              },
  {
                teamName: '',
                name: 'Dominique Wilkins',
                positionPlayed: '',
                value: 150
              },

 {
                teamName: 'Indiana Pacers',
                name: 'Reggie Miller',
                positionPlayed: '',
                value: 120
              },

  {
                teamName: '',
                name: 'Ray Allen',
                positionPlayed: '',
                value: 120
              },

 {

                teamName: 'Chicago Bulls',
                name: 'Michael Jordan',
                positionPlayed: 'Guard',
                value: 150
              },

{
              teamName: 'Cleveland Caveliers',
              name: 'Lebron James',
              positionPlayed: '',
              value: 150
            },

{
              teamName: 'Los Angeles Lakers',
              name: 'Kobe Bryant',
              positionPlayed: '',
              value: 150
            },

{
              teamName: 'Los Angeles Lakers',
              name: 'Kareem Abdul-Jabbar',
              positionPlayed: '',
              value: 150
            },

{

              teamName: 'San Antonio Spurs',
              name: 'Tony Parker',
              positionPlayed: 'Guard',
              value: 100
            },

{
              teamName: 'San Antonio Spurs',
              name: 'Tim Duncan',
              positionPlayed: 'Forward',
              value: 150
          },

{
              teamName: 'San Antonio Spurs',
              name: 'Manu Ginobili',
              positionPlayed: 'Guard',
              value: 75
        },

{
              teamName: 'Boston Celtics',
              name: 'Paul Pierce',
              positionPlayed: 'Guard',
              value: 80
        },

{
              teamName: 'Philadelphia 76ers',
              name: 'Allen Iverson',
              positionPlayed: 'Guard',
              value: 100
        },

{

              teamName: '',
              name: 'Patrick Ewing',
              positionPlayed: '',
              value: 120
        },


{
              teamName: 'Miami Heat',
              name: 'Dwyane Wade',
              positionPlayed: 'Guard',
              value: 100
        },

{
              teamName: 'Golden State Warriors',
              name: 'Stephen Curry',
              positionPlayed: 'Guard',
              value: 150
        },

{

              teamName: 'Golden State Warriors',
              name: 'Kevin Durant',
              positionPlayed: 'Forward',
              value: 130
        },


{
              teamName: 'Golden State Warriors',
              name: 'Clay Thompson',
              positionPlayed: 'Guard',
              value: 75
        },

{
              teamName: 'Houston Rockets',
              name: 'James Harden',
              positionPlayed: 'Guard',
              value: 130
        },

{

              teamName: 'Houston Rockets',
              name: 'Yao Ming',
              positionPlayed: 'Center',
              value: 120
        },

{

              teamName: 'Los Angeles Lakers',
              name: 'Shaqueel Oniel',
              positionPlayed: 'Center',
              value: 130
        },


{
              teamName: 'Dallas Mavericks',
              name: 'Dirk Nowitzki',
              positionPlayed: 'Forward',
              value: 140
        },

{
              teamName: 'Boston Celtics',
              name: 'Kevin Garnett',
              positionPlayed: 'Center',
              value: 140
        },

{

              teamName: 'Oklahoma City Thunder',
              name: 'Russel Westbrook',
              positionPlayed: 'Guard',
              value: 120
        },

{

              teamName: 'Milwaukee Bucks',
              name: 'Giannis Antetokounmpo',
              positionPlayed: 'Forward',
              value: 110
        },

{

             teamName: 'New Orleans Pelicans',
             name: 'Anthony Davis',
             positionPlayed: 'Forward',
             value: 110
        },



{

             teamName: 'Minnesota Timberwolves',
             name: 'Jimmy Butler',
             positionPlayed: 'Forward',
             value: 90
        },



{

            teamName: 'Minnesota Timberwolves',
            name: 'Karl-Anthony Towns',
            positionPlayed: 'Center',
            value: 100
        },





{

               teamName: 'Golden State Warriors',
               name: 'Draymond Green',
               positionPlayed: 'Forward',
               value: 80
          },



{

              teamName: 'Houston Rockets',
              name: 'Chris Paul',
              positionPlayed: 'Guard',
              value: 120
          },


{

               teamName: 'Oklahoma City Thunder',
               name: 'Paul George',
               positionPlayed: 'Forward',
               value: 100
            },



{

               teamName: 'Boston Celtics',
               name: 'Kyrie Irving',
               positionPlayed: 'Guard',
               value: 120
            },




{

                   teamName: 'Boston Celtics',
                   name: 'Gordon Hayward',
                   positionPlayed: 'Forward',
                   value: 100
              },



{

                  teamName: 'Portland Trail Blazers',
                  name: 'Damian Lillard',
                  positionPlayed: 'Guard',
                  value: 75
              },




{

                     teamName: 'Cleveland Caveliers',
                     name: 'Isiah Thomas',
                     positionPlayed: 'Guard',
                     value: 100
                },



{

                    teamName: 'Houston Rockets',
                    name: 'Tracy McGrady',
                    positionPlayed: 'Guard',
                    value: 130
                },

{

                       teamName: 'Washington Wizards',
                       name: 'John Wall',
                       positionPlayed: 'Guard',
                       value: 100
                  },

{

                      teamName: 'Los Angeles Clippers',
                      name: 'Blake Griffin',
                      positionPlayed: 'Center',
                      value: 50
                  },





            {

                         teamName: 'Los Angeles Lakers',
                         name: 'Lonzo Ball',
                         positionPlayed: 'Guard',
                         value: 30
                    },



            {

                        teamName: 'Oklahoma City Thunder',
                        name: 'Carmelo Anthony',
                        positionPlayed: 'Forward',
                        value: 100
                    },



                    {

                        teamName: 'Houston Rockets',
                        name: 'Hakeem Olajuwon',
                        positionPlayed: 'Forward',
                        value: 150
                      },



                    {

                      teamName: 'Chicago Bulls',
                      name: 'Steve Kerr',
                      positionPlayed: 'Guard',
                      value: 110
                    },


                      // {
                      //
                      //              teamName: '',
                      //              name: '',
                      //              positionPlayed: '',
                      //              value:
                      //         },
                      //
                      // {
                      //
                      //             teamName: '',
                      //             name: '',
                      //             positionPlayed: '',
                      //             value:
                      //         },
                      //
                      //
                      //
                      //
                      //
                      //   {
                      //
                      //                teamName: '',
                      //                name: '',
                      //                positionPlayed: '',
                      //                value:
                      //           },
                      //
                      //
                      //
                      //   {
                      //
                      //               teamName: '',
                      //               name: '',
                      //               positionPlayed: '',
                      //               value:
                      //           },
                      //
                      //
                      //
                      //
                      //     {
                      //
                      //                  teamName: '',
                      //                  name: '',
                      //                  positionPlayed: '',
                      //                  value:
                      //             },
                      //
                      //
                      //
                      //     {
                      //
                      //                 teamName: '',
                      //                 name: '',
                      //                 positionPlayed: '',
                      //                 value:
                      //             },
                      //
                      //
                      //
                      //
                      //       {
                      //
                      //                    teamName: '',
                      //                    name: '',
                      //                    positionPlayed: '',
                      //                    value:
                      //               },
                      //
                      //
                      //
                      //       {
                      //
                      //                   teamName: '',
                      //                   name: '',
                      //                   positionPlayed: '',
                      //                   value:
                      //               },
                      //
                      //
                      //
                      //
                      //
                      //         {
                      //
                      //                      teamName: '',
                      //                      name: '',
                      //                      positionPlayed: '',
                      //                      value:
                      //                 },
                      //
                      //
                      //
                      //         {
                      //
                      //                     teamName: '',
                      //                     name: '',
                      //                     positionPlayed: '',
                      //                     value:
                      //                 },
                      //
                      //
                      //
                      //
                      //
                      //           {
                      //
                      //                        teamName: '',
                      //                        name: '',
                      //                        positionPlayed: '',
                      //                        value:
                      //                   },
                      //
                      //
                      //
                      //           {
                      //
                      //                       teamName: '',
                      //                       name: '',
                      //                       positionPlayed: '',
                      //                       value:
                      //                   }
                      //



];




  db.Players.create(PlayersList, function(err, players){
    if (err) { return console.log('ERROR', err); }
    console.log("all Players:", players);
    console.log("created", players.length, "players");
    process.exit();
  });

});
