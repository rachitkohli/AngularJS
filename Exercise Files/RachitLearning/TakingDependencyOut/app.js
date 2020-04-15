var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/books", {
            templateUrl: "partials/book-list.html",
            controller: "BookCtrl"
        })
        .when("/kart", {
            templateUrl: "partials/kart-list.html",
            controller: "KartListCtrl"
        })
        .otherwise({
            redirectTo: "/books"
        })
})

myApp.factory("kartService", function () {
    var kart = [];

    return {
        getKart: function () {
            return kart;
        },
        addToKart: function (book) {
            kart.push(book);
        },
        buy: function (book) {
            alert('Thanks for buying: ' + book.Name);
        }
    }
})

myApp.factory("bookService", function () {
    var books = [
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

    return {
        getBooks: function () {
            return books;
        }
    }
})

myApp.controller("HeaderCtrl", function ($scope) {
    $scope.appDetails = {
        title: "BooKart",
        tagline: "We have 1 million books for you"
    }
});

myApp.controller("BookCtrl", function ($scope, bookService, kartService) {
    $scope.books = bookService.getBooks();

    $scope.addToKart = function (book) {
        kartService.addToKart(book);
        console.log("add to kart : ", book);
    }
})

myApp.controller("KartListCtrl", function ($scope, kartService) {
    $scope.kart = kartService.getKart();

    $scope.buy = function (book) {
        kartService.buy(book);
        console.log("Buy : ", book);
    }
})

