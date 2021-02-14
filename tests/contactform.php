<?php
        if (isset($_POST['submit'])) {
            $first__name = $_POST['first__name'];
            $last__name = $_POST['last__name'];
            $mailFrom = $_POST['mail'];
            $phone__number = $_POST['phone__number'];
            $message = $_POST['message'];

            $mailTo = "risim59339@hrandod.com";
            $headers = "From: ".$mailFrom;
            $txt = "You have received an e-mail from ".$first__name." ".$last__name.".\n\n".$message;

            mail($mailTo, $subject, $txt, $headers);
            header("Location: index.php?mailsend");
        }
    ?>