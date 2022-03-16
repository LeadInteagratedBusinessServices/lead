<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['username'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $gender = $_POST['gender'];
    $dob = $_POST['dob'];
    $address = $_POST['address'];
    $position = $_POST['position'];
    $experience = $_POST['experience'];
    $designation = $_POST['designation'];
    $expSalary = $_POST['exp_salary'];
    $newsFrom = $_POST['getfrom'];

    $filename = $_FILES['profile']['name'];
    $temp = explode('.', $filename);
    $extension = end($temp);
    $location = "career/resumes/" . $mobile . '.' . $extension;
    $uploadOk = 1;

    if ($uploadOk == 0) {
        echo 0;
    } else {
        if (move_uploaded_file($_FILES['profile']['tmp_name'], $location)) {
            echo $location;
        } else {
            echo 0;
        }
    }

    $to = "gprajutr@gmail.com";
    $subject = "Applied to : " . $position;
    $message = '
    <html>
        <body style="background:#0002">
            <div style="width: 50%; margin-left: auto; margin-right: auto; padding:20px 0; background:#edf4ff;">
                <h2 style="text-align:center; color: #2970fa; margin:0; text-transform:uppercase;">Applied For Web developer</h2>
            <div style="display: flex; width: 100%; justify-content: center; font-size:20px;">
                <div style="width: 50%; text-align: right; font-weight:bold;">
                    <p>Name &nbsp;&nbsp;&nbsp;</p>
                    <p>Mobile &nbsp;&nbsp;&nbsp;</p>
                    <p>DOB &nbsp;&nbsp;&nbsp;</p>
                    <p>Gender &nbsp;&nbsp;&nbsp;</p>
                    <p>Address &nbsp;&nbsp;&nbsp;</p>
                    <p>Experience &nbsp;&nbsp;&nbsp;</p>
                    <p>Designation &nbsp;&nbsp;&nbsp;</p>
                    <p>Exp.Salary &nbsp;&nbsp;&nbsp;</p>
                    <p>News-get-from &nbsp;&nbsp;&nbsp;</p>
                    <p>Resume &nbsp;&nbsp;&nbsp;</p>
                </div>
            <div>
            <p>:</p><p>:</p><p>:</p><p>:</p><p>:</p><p>:</p><p>:</p><p>:</p><p>:</p><p>:</p>
            </div>
            <div style="width: 50%; text-align: left; margin-left: 25px; text-transform: capitalize;">
                <p>' . $name . '</p>   
                <p>' . $mobile . '</p>
              <p>' . $dob . '</p>
              <p>' . $gender . '</p>
              <p>' . $address . '</p>
              <p>' . $experience . '</p>
              <p>' . $designation . '</p>
              <p>' . $expSalary . '</p>
              <p>' . $newsFrom . '</p>
              <a href="#">Hello</a>
            </div>
        </div>
    </div>
    </body>
</html>';

    // More headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    $headers .= 'From: <' . $name . '>' . "\r\n";
    mail($to,$subject,$message,$headers);
}