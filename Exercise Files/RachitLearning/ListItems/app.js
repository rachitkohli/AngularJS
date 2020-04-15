var myApp = angular.module("myApp", []);
myApp.controller("HeaderCtrl", function ($scope) {
    $scope.appDetails = {
        title: "BooKart",
        tagline: "We have 1 million books for you"
    }
});

myApp.controller("BookCtrl", function ($scope) {
    $scope.books = [
        {
            id: 1,
            imgUrl: "adultery.jpeg",
            Name: "Ramayan",
            Price: 23.99,
            Rating: 5,
            Publisher: "Indian company",
            Details: "This is a book on indian mythology"

        },
        {
            id: 2,
            imgUrl: "life-or-death.jpeg",
            Name: "Life or Death",
            Price: 43.19,
            Rating: 3,
            Publisher: "Western Publisher",
            Details: "This is a book on Life or Death"

        },
        {
            id: 3,
            imgUrl: "playing.jpeg",
            Name: "Playing",
            Price: 12.99,
            Rating: 4.5,
            Publisher: "American Publisher",
            Details: "How can playing help in life!"

        }
    ];

    $scope.addToKart = function (book) {
        console.log("add to kart : ", book);
    }
})

