<?php
    session_start();
    
    $nameErr = "";
    $emailErr = "";
    $passwordErr = "";
    $confirmPasswordErr = "";
    $successMsg = "";
    
    $name = "";
    $email = "";
    $password = "";
    $confirmPassword = "";
    
    if(isset($_POST['submit'])){
        $name = $_REQUEST['name'];
        $email = $_REQUEST['email'];
        $password = $_REQUEST['password'];
        $confirmPassword = $_REQUEST['confirmPassword'];
        
        $hasError = false;
        
        // Check all fields are filled
        if($name == ""){
            $nameErr = "Name is required!";
            $hasError = true;
        }
        
        if($email == ""){
            $emailErr = "Email is required!";
            $hasError = true;
        }else{
            // Validate email format
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $emailErr = "Invalid email format!";
                $hasError = true;
            }
        }
        
        if($password == ""){
            $passwordErr = "Password is required!";
            $hasError = true;
        }
        
        if($confirmPassword == ""){
            $confirmPasswordErr = "Confirm password is required!";
            $hasError = true;
        }
        
        // Check password match
        if($password != "" && $confirmPassword != ""){
            if($password != $confirmPassword){
                $confirmPasswordErr = "Passwords do not match!";
                $hasError = true;
            }
        }
        
        // If validation passes
        if(!$hasError){
            // Sanitize input data
            $name = htmlspecialchars($name);
            $email = htmlspecialchars($email);
            
            $successMsg = "Registration Successful!";
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Registration Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        
        .container {
            max-width: 500px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        
        fieldset {
            border: 2px solid #4CAF50;
            border-radius: 5px;
            padding: 20px;
        }
        
        legend {
            color: #4CAF50;
            font-weight: bold;
            font-size: 20px;
            padding: 0 10px;
        }
        
        table {
            width: 100%;
        }
        
        td {
            padding: 8px;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        
        input[type="submit"]:hover {
            background-color: #45a049;
        }
        
        .error {
            color: red;
            font-size: 12px;
        }
        
        .success {
            background-color: #d4edda;
            color: #155724;
            padding: 15px;
            border: 1px solid #c3e6cb;
            border-radius: 4px;
            margin-bottom: 20px;
        }
        
        .user-data {
            background-color: #e7f3ff;
            padding: 15px;
            border: 1px solid #b3d9ff;
            border-radius: 4px;
            margin-top: 10px;
        }
        
        .user-data h3 {
            margin-top: 0;
            color: #0066cc;
        }
    </style>
</head>
<body>
    <div class="container">
        <?php
            if($successMsg != ""){
                echo "<div class='success'>";
                echo "<h3>".$successMsg."</h3>";
                echo "<div class='user-data'>";
                echo "<h3>User Information:</h3>";
                echo "<p><strong>Name:</strong> ".$name."</p>";
                echo "<p><strong>Email:</strong> ".$email."</p>";
                echo "<p><strong>Password:</strong> ".str_repeat('*', strlen($password))."</p>";
                echo "</div>";
                echo "</div>";
            }
        ?>
        
        <form action="" method="post">
            <fieldset>
                <legend>Registration Form</legend>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" name="name" value="<?php echo $name; ?>">
                            <span class="error"><?php echo $nameErr; ?></span>
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type="email" name="email" value="<?php echo $email; ?>">
                            <span class="error"><?php echo $emailErr; ?></span>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="password" name="password" value="">
                            <span class="error"><?php echo $passwordErr; ?></span>
                        </td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td>
                            <input type="password" name="confirmPassword" value="">
                            <span class="error"><?php echo $confirmPasswordErr; ?></span>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" name="submit" value="Register"></td>
                    </tr>
                </table>
            </fieldset>
        </form>
    </div>
</body>
</html>
