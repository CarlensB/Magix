<!DOCTYPE html>
<html lang="fr">
    <head>
		
        <?php
            if ($_SERVER['REQUEST_URI'] == "/web-h2022/Magix/login.php")
                {
        ?>
        <title>Magix : Login</title>
        <link href="css/global.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="javascript/login.js"></script>
		<?php
                }
                elseif ($_SERVER['REQUEST_URI'] == "/web-h2022/Magix/home.php"){
        ?>
                <title>Accueil</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script src="javascript/home.js"></script>
                <link href="css/home.css" rel="stylesheet" />
                <?php
                }
                elseif ($_SERVER['REQUEST_URI'] == "/web-h2022/Magix/coop.php"){
        ?>
                <title>Coop</title>
                <script src="javascript/jeu.js" defer></script>
                <link href="css/jeu.css" rel="stylesheet" />
        <?php
                }
        ?>
		<meta charset="utf-8" />
		
    </head>
    <body>
		

		
