app.factory('varFactory', function(){
    let bologna;
    return {

        getThatVar: () => {
            return bologna
        },
        setThatVar: (newVal) => {
            bologna = newVal
        }
    }

})


/*
 #     # ####### ######  #######    ###       #    #     #
 #     # #       #     # #           #       # #   ##   ##
 #     # #       #     # #           #      #   #  # # # #
 ####### #####   ######  #####       #     #     # #  #  #
 #     # #       #   #   #           #     ####### #     #
 #     # #       #    #  #           #     #     # #     #
 #     # ####### #     # #######    ###    #     # #     #
*/
