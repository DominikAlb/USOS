var App = angular.module('App', ['ngRoute']); // declaration that app is angular model


App.controller('MainController', MainController); // inserting the main controller
App.controller('HomeController', HomeController);
App.controller('CalendarController', CalendarController);
App.controller('CoursesController', CoursesController);
App.controller('SearchForPersonController', SearchForPersonController);
App.controller('SearchForCourseController', SearchForCourseController);


var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'SPA/Views/Home.html',
            controller: HomeController
        });
    $routeProvider
        .when('/calendar', {
            templateUrl: 'SPA/Views/Calendar.html',
            controller: CalendarController
        });
    $routeProvider
        .when('/courses', {
            templateUrl: 'SPA/Views/Courses.html',
            controller: CoursesController
        });
    $routeProvider
        .when('/search/person', {
            templateUrl: 'SPA/Views/SearchForPerson.html',
            controller: SearchForPersonController
        });
    $routeProvider
        .when('/search/course', {
            templateUrl: 'SPA/Views/SearchForCourse.html',
            controller: SearchForCourseController
        });
}

configFunction.$inject = ['$routeProvider', '$httpProvider'];

App.config(configFunction);