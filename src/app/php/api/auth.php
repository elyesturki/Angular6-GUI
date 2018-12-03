<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$username = $request->username;
$password = $request->password;
//if($_POST['username'] or $_POST['password']){

if ($username=='admin' && $password=='admin') {
  ?>
      {
        "success":true,
        "message": "Success access for admin user"
      }

<?php
} else {
  ?>

      {
        "success":false,
        "message": "Invalid username or password"
      }
<?php
}

?>