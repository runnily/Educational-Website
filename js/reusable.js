/*
Arthur:
    Adanna Obibuaku
Date:
    03/08/20
Purpose:
    Each part of a html quiz has the same html template. This
    code is to allow this html template be reusable.
*/

/*
    The following if statement checks the document title and chooses the corresponding variables for the page
    within each if statement we defined:
     * el_title: specifys the title of the page
     * el_identify: specifys the identify of the questions being asked
     * el_questions: specifys the questions for each part
     
*/
if (document.title == 'Part 1') {
    
    el_title = 'Part 1'
    el_identity = 'part_1'
    el_questions =  [
        {name: 'Question 1', identity: "1", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 2', identity: "2", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 3', identity: "3", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 4', identity: "4", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 5', identity: "5", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 6', identity: "6", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 7', identity: "7", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 8', identity: "8", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 9', identity: "9",answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 10', identity: "10", answer_one:'todo', answer_two:'todo', answer_three:'todo'}]
    enableApp(el_title, el_questions, el_identity);
}
if (document.title == 'Part 2') {
    el_title = 'Part 2'
    el_identity = 'part_2'
    el_questions =  [
        {name: 'Question 1', identity: "1", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 2', identity: "2", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 3', identity: "3", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 4', identity: "4", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 5', identity: "5", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 6', identity: "6", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 7', identity: "7", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 8', identity: "8", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 9', identity: "9",answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 10', identity: "10", answer_one:'todo', answer_two:'todo', answer_three:'todo'}]
    enableApp(el_title, el_questions, el_identity);
}
if (document.title == 'Part 3') {
    el_title = 'Part 3'
    el_identity = 'part_3'
    el_questions =  [
        {name: 'Question 1', identity: "1", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 2', identity: "2", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 3', identity: "3", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 4', identity: "4", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 5', identity: "5", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 6', identity: "6", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 7', identity: "7", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 8', identity: "8", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 9', identity: "9",answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 10', identity: "10", answer_one:'todo', answer_two:'todo', answer_three:'todo'}]
    enableApp(el_title, el_questions, el_identity);
}
if (document.title == 'Part 4') {
    el_title = 'Part 4'
    el_identity = 'part_4'
    el_questions =  [
        {name: 'Question 1', identity: "1", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 2', identity: "2", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 3', identity: "3", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 4', identity: "4", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 5', identity: "5", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 6', identity: "6", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 7', identity: "7", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 8', identity: "8", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 9', identity: "9",answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 10', identity: "10", answer_one:'todo', answer_two:'todo', answer_three:'todo'}]
    enableApp(el_title, el_questions, el_identity);
}
if (document.title == 'Part 5') {
    el_title = 'Part 5'
    el_identity = 'part_5'
    el_questions =  [
        {name: 'Question 1', identity: "1", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 2', identity: "2", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 3', identity: "3", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 4', identity: "4", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 5', identity: "5", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 6', identity: "6", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 7', identity: "7", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 8', identity: "8", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 9', identity: "9",answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 10', identity: "10", answer_one:'todo', answer_two:'todo', answer_three:'todo'}]
    enableApp(el_title, el_questions, el_identity);
}
if (document.title == 'Part 6') {
    el_title = 'Part 6'
    el_identity = 'part_6'
    el_questions =  [
        {name: 'Question 1', identity: "1", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 2', identity: "2", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 3', identity: "3", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 4', identity: "4", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 5', identity: "5", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 6', identity: "6", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 7', identity: "7", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 8', identity: "8", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 9', identity: "9",answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 10', identity: "10", answer_one:'todo', answer_two:'todo', answer_three:'todo'}]
    enableApp(el_title, el_questions, el_identity);
}
if (document.title == 'Part 7') {
    el_title = 'Part 7'
    el_identity = 'part_7'
    el_questions =  [
        {name: 'Question 1', identity: "1", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 2', identity: "2", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 3', identity: "3", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 4', identity: "4", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 5', identity: "5", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 6', identity: "6", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 7', identity: "7", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 8', identity: "8", answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 9', identity: "9",answer_one:'todo', answer_two:'todo', answer_three:'todo'},
        {name:'Question 10', identity: "10", answer_one:'todo', answer_two:'todo', answer_three:'todo'}]
    enableApp(el_title, el_questions, el_identity);
}

function enableApp(el_title, el_questions, el_identity) {
    /*
        Description:
            This function is to make a reusuable html template for our quiz pages.
        Inputs:
            el_title (string): Denotes the document element title
            el_questions (list of objects): Denotes the questions associated with each title
            el_identity (string): Denotes the element identity for the questions
    */
    var app = angular.module('quizApp', []);  // we define a module

    var control = app.controller('quizController', ['$scope', function($scope) { // to define a controller
        $scope.quiz = {
        identity: el_identity,
        title: el_title,
        questions: el_questions
        };
    }]);

    control.directive('myQuiz', function() {
        return {
            /**
             * Below is the given temeplate to return
             * Uses another angular app with a correspong repeat directive to repeat some certain elements
             */
        template: `<div id="back_container"><a id="back" href="quiz.html">&#8592;</a></div> 
                        <h1>{{quiz.title}}</h1> 
                        <form action="../../php/mark.php" method="get">
                            <div data-ng-app="" {{quiz.questions}}>
                                <div data-ng-repeat="q in quiz.questions" class="question_container repeat_container">
                                <h2 >{{ q.name }}</h2>
                                <div class="answer_container repeat_inner_container">
                                    <input type="radio" name="{{q.identity}}" id="{{q.answer_one}}" value="answer_one">
                                    <label for="{{q.answer_one}}">{{q.answer_one}}</label>
                                </div>
                                <div class="answer_container repeat_inner_container">
                                    <input type="radio" name="{{q.identity}}" id="{{q.answer_two}" value="answer_two">
                                    <label for="{{q.answer_two}}">{{q.answer_two}}</label>
                                </div>
                                <div class="answer_container repeat_inner_container">
                                    <input type="radio" name="{{q.identity}}" id="{{q.answer_three}}" value="answer_three">
                                    <label for="{{q.answer_three}}">{{q.answer_three}}</label>
                            </div>
                    </div>
                    <input id= "button_submit" type="submit" name="{{quiz.identity}}" value="Submit">
                    </form>`
        };
    });
}

/*
websites that help:
    - https://www.w3schools.com/angular/angular_controllers.asp
    - https://docs.angularjs.org/guide/directive
    - https://www.tutorialspoint.com/angular2/angular2_components.htm
*/