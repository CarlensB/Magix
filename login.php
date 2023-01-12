<?php
	require_once("action/loginaction.php");

	$action = new LoginAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>
<video autoplay muted loop id="myVideo">
  <source src="img/login.mp4" type="video/mp4">
</video>

	<div class="login-form-frame">
		<form action="login.php" method="post">
        	

			<div class="page">
			<div class="container">
				<div class="left">
				<div class="login">Magix</div>
				<?php
				if ($data["hasConnectionError"]) {
					?>
					<div class="eula"><strong>Erreur : </strong>Connexion erronée</div>
					<?php
				}
				else ?>
				<div class="eula"><strong>Veuillez vous connecter...</strong></div>
				<?php
			?>
				</div>
				<div class="right">
				<svg viewBox="0 0 320 300">
					<defs>
					<linearGradient
									inkscape:collect="always"
									id="linearGradient"
									x1="13"
									y1="193.49992"
									x2="307"
									y2="193.49992"
									gradientUnits="userSpaceOnUse">
						<stop
							style="stop-color:#ff00ff;"
							offset="0"
							id="stop876" />
						<stop
							style="stop-color:#ff0000;"
							offset="1"
							id="stop878" />
					</linearGradient>
					</defs>
					<path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
				</svg>
				<div class="form" action="login.php" method="post">
					<label for="username">Username</label>
					<input type="text" name="username" id="username">
					<label for="password">Mot de Passe</label>
					<input type="password" id="password" name="pwd" >
					<input type="submit" id="submit" value="Submit">
				</div>
				</div>
			</div>
			</div>

		</form>
	</div>
<?php
	require_once("partial/footer.php");
