<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Part 1</title>
  <meta name="quiz" content="The HTML5 Herald">
  <meta name="author" content="runnily">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/Networks/secondary_theme.css">
</head>
<body>
<?php
/**
 * Author:
 *  Adanna
 * Purpose:
 *  The purpose of this is to use the database and desplay the question correpsonding
 *  to the quiz which the user selected.
 * Date:
 *  8/10/20
 */

 $host = "localhost";
 $username = "root";
 $password = "password";
 $dbname = "quiz";

 $conn = mysqli_connect($host, $username, $password, $dbname);
 if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
 } else {
     /*
    I would need name, identity, answer_one, and correct answer
    name is in the question table, identity is in the question table
    */
    $quizParts = array("part_1", "part_2", "part_3", "part_4", "part_5", "part_6", "part_7");
    $part = $_GET['Submit'];
    $part = str_replace("_", " ", $part);
    $title = $part;
    $part = "'$part'";

    $sql = "SELECT * FROM Questions where name=". $part;

    $result = mysqli_query($conn, $sql);

    echo "<div id='content'>";
    echo "<div id='back_container'><a id='back' href='../html/Networks/quiz.html'>&#8592;</a></div> ";
    echo "<h1> $title </h1>";
    echo "<form action='mark.php' method='get'>";
    $question_part = 1;
    while ($row = mysqli_fetch_assoc($result)) {
        $num = $row['question_num']; // This would get the particular question number
        $num = "'$num'"; //This allows it the variable to have quatation marks
        $sql1 = "SELECT * FROM Answers where ques_part=" .$part . "AND question_num=" .$num; // This would select the answer based on number
        echo "<div class='question_container repeat_container'>";
        echo "<h2> $question_part. ",  $row['question'], "</h2>";

        $result1 = mysqli_query($conn, $sql1); // This would get the results of answers corresponding to the question
        while ($row1 = mysqli_fetch_assoc($result1)) {
            /*
                This while loop would go through each answer
                assoicated with the question
            */
            echo "<div class='answer_container repeat_inner_container'> ";
            $ans_part = $row1['ans_part']; //This would get the answer part
            $ans_part = "'$ans_part'"; // This would put quotations marks around our variable we got from database
            echo "<input type='radio' name=$num value=$ans_part> "; // Creates a radio button
            echo "<label>". $row1['answer']. "</label> "; // Creates a radio button
            echo "</div> ";
        }
        $question_part++;
        echo "</div>";
    }
    $part = str_replace(" ", "_", $part);
    $part = strtolower($part);
    echo "<input id= 'button_submit' type='submit' name=$part value='Submit'>";
    echo "</form>";
    echo "</div>";
 }
?>
</body>
</html>
