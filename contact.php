<?php


$message_sent = false;

if(isset($_POST['email']) && $_POST['email'] != '') {

    if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $userName = $_POST['name'];
        $userEmail = $_POST['email'];
        $messageSubject = $_POST['subject'];
        $message = $_POST['message'];
    
        $to = "usselmanjosh@gmail.com";
        $body = "";
    
        $body .= "From: ".$userName. "\r\n";
        $body .= "Email: ".$userEmail. "\r\n";
        $body .= "Message: ".$message. "\r\n";
    
        mail($to, $messageSubject, $body);

        $message_sent = true;
    } else {
        $message_sent = false;
    }
}
?>

<!-- <form action="contact.php" method="POST" class="form">
                    <div class="form-group">
                        <input type="text" class="form-control" id="name" placeholder="NAME" tabindex="1" name="name"
                            required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="email" placeholder="EMAIL" tabindex="2"
                            name="email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="subject" placeholder="SUBJECT" tabindex="3"
                            name="subject" required>
                    </div>
                    <div class="form-group">
                        <textarea rows="5" type="text" id="message" placeholder="YOUR HATE MAIL" name="message"
                            required></textarea>
                    </div>
                    <div class="contact-btn-ctn">
                        <button type="submit" class="contact-btn">SEND HATE</button>
                    </div>
            </div>
            </form> -->