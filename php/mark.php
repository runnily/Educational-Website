<html>
    <body>
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
        $questions = array("Question 1" => "answer_one", "Question 2" =>"answer_three", "Question 3" => "answer_one",
                            "Question 4" =>"answer_three", "Question 5" => "answer_one",  "Question 6" =>"answer_one", 
                            "Question 7" => "answer_three", "Question 8" => "asnwer_two", "Question 9" => "answer_one",
                            "Question 10" => "answer_one");


        foreach ($questions as $key => $value) {
            $ques = $_POST[$key];
            if ($ques = $value) {
                $score++;
            }
        }

        if ($score <= 5) {
            echo "Your score is: $score ";
            echo "Better luck next time ";
        } else if ($score = 6) {
            echo "Your score is: $score ";
            echo "Practice makes perfect! ";
        } else {
            echo "Your score is: $score ";
            echo "Well done!";
        }

        ?>
    </body>
</html>