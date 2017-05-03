var app = angular.module("demo-app", []);

app.directive("myDirective", function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div style='border: 1px solid #345; background: #bcd; padding: 20px;'>If you can see this, the angularJS directive is working correctly.</div>"
    }
});
