<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">

    <title>Networks</title>
    <meta name="description" content="Computer Networks">
    <meta name="author" content="runnily">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Sets a view port for the web page-->
    <link rel="stylesheet" href="../css/Networks/home.css" media="(min-width: 545px)">
    <link rel="stylesheet" href="../css/Networks/secondary_theme.css" media="(max-width: 546px)">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <script src="../../js/main.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script> <!-- imports angular -->
    
    

</head>

<body>
    <div id="content">
        <div id="header">
                    <div id="header-img-2"></div>
                    <div id="header-img"></div>
                    <div id="header-img-1"></div>
                    <div id="header-img-3"></div>
                    <div><img src="../imgs/Picture4.png" alt="header_img" id="mobile_header"></div>
                    <h1>Computer Networks</h1>
                    <form action="javascript:;" method="GET">
                        <input type="text" placeholder="Search..." name="search">
                        <button type="submit" class="fa fa-search"></button>
                    </form>
        </div>
        <div id="back_container"><a style="margin: 5%; text-decoration: none; border: 2px solid grey; background-color:  rgb(54, 194, 54); width: 50px;" id="back" href="../html/networks/quiz.html">&#8592;</a></div> 
        <?php
        /*
                Arthur:
                    Adanna Obibuaku
                Date:
                    04/08/20
                Purpose:
                    This is the script to mark the quiz
            */

            /*
                creates a dictionary for each part corresponding with the correct answer
            */

            $score = 0;
            $NUM_QUESTION = 10; 

            /*
                Each given if statement elements check if the corresponding form has submitted,
                if so it creates an array containing the corresponding correct answer for each 
                question
            */
            if ($_GET['part_1'] == "Submit") {
                $questions = array("ques_1" => "answer_one", "ques_2" =>"answer_three", "ques_3" => "answer_one",
                "ques_4" =>"answer_three", "ques_5" => "answer_one",  "ques_6" =>"answer_one", 
                "ques_7" => "answer_three", "ques_8" => "answer_two", "ques_9" => "answer_one",
                "ques_10" => "answer_one");
                $score = mark($questions);
            }

            if ($_GET['part_2'] == "Submit") {
                $questions = array("ques_1" => "answer_two", "ques_2" =>"answer_one", "ques_3" => "answer_three",
                "ques_4" =>"answer_three", "ques_5" => "answer_two",  "ques_6" =>"answer_one", 
                "ques_7" => "answer_one", "ques_8" => "answer_three", "ques_9" => "answer_two",
                "ques_10" => "answer_one");
                $score = mark($questions);
            }

            if ($_GET['part_3'] == "Submit") {
                $questions = array("ques_1" => "answer_three", "ques_2" =>"answer_one", "ques_3" => "answer_three",
                "ques_4" =>"answer_three", "ques_5" => "answer_two",  "ques_6" =>"answer_one", 
                "ques_7" => "answer_one", "ques_8" => "asnwer_three", "ques_9" => "answer_two",
                "ques_10" => "answer_one");
                $score = mark($questions);
            }

            if ($_GET['part_4'] == "Submit") {
                $questions = array("ques_1" => "answer_one", "ques_2" =>"answer_three", "ques_3" => "answer_one",
                "ques_4" =>"answer_three", "ques_5" => "answer_one",  "ques_6" =>"answer_one", 
                "ques_7" => "answer_three", "ques_8" => "answer_two", "ques_9" => "answer_one",
                "ques_10" => "answer_one");
                $score = mark($questions);
            }

            if ($_GET['part_6'] == "Submit") {
                $questions = array("ques_1" => "answer_one", "ques_2" =>"answer_three", "ques_3" => "answer_one",
                "ques_4" =>"answer_three", "ques_5" => "answer_one",  "ques_6" =>"answer_one", 
                "ques_7" => "answer_three", "ques_8" => "answer_two", "ques_9" => "answer_one",
                "ques_10" => "answer_one");
                $score = mark($questions);
            }

            if ($_GET['part_7'] == "Submit") {
                $questions = array("ques_1" => "answer_one", "ques_2" =>"answer_three", "ques_3" => "answer_one",
                "ques_4" =>"answer_three", "ques_5" => "answer_one",  "ques_6" =>"answer_one", 
                "ques_7" => "answer_three", "ques_8" => "answer_two", "ques_9" => "answer_one",
                "ques_10" => "answer_one");
                $score = mark($questions);
            }


            function mark($questions) {
                /*
                    Purpose:
                        To count the number of answer the user get correct
                    Inputs: 
                        $questions (array): Contains an array of question values corresponding to answers
                    Returns:
                        (int) returns the numbers the user got correct
                */
                $i = 0;
                foreach($questions as $key => $value) {
                    $ques = $_GET[$key];
                    if ($ques == $value) {
                        $i++;
                    }
                }
                return $i;
            }
            
            echo "<p style='text-align: centre; font-size: 50px; margin: 5%;'> Your score is: $score  </p>"; //display score

            //Descides which statement based on the score
            if ($score <= 5) {
                echo "<p style='text-align: centre; font-size: 50px; margin: 5%; '> Better luck next time </p>";
            } else if ($score = 6) {
                echo "<p style='text-align: centre; font-size: 50px; margin: 5%; '> Practice makes perfect! </p>";
            } else {
                echo "<p style='text-align: centre; font-size: 50px; margin: 5%; '> Well done! </p>";
            }
        ?>
    </div>
</body>
</html>