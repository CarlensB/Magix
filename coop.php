<?php
	require_once("action/coopAction.php");

	$action = new coopAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<div class="triangle-wrapper">
  <div class="triangle triangle-1"></div>
  <div class="triangle triangle-2"></div>
  <div class="triangle triangle-3"></div>
  <div class="triangle triangle-4"></div>
  <div class="triangle triangle-5"></div>
  <p class="triangle-loading"></p>
</div>

<div class="Deck-Adversaire jeu">

	<div id="Cartes-Adversaire">
	</div>

	<div class="Infos-Adversaire">
	
		<div class="div-Vie-Adversaire">
			<p class="qte-vie-adv"></p>
		</div>

		<div class="Photo-Adversaire unvalid_card">
		</div>

		<div class="Mana-Adversaire">
		<p class="qte-mana-adv"></p>
		</div>

	</div>
	<div class="Temps-restant">
		30
	</div>
	<div class="boutons">
	<a href="#" class="bouton_hero">Hero Pawah</a>
	</div>
	<div class="boutons">
	<a href="#" class="bouton_chat">Chat</a>   
</div>

<div class="Partie-En-Cours jeu">
	<div id="board-adv">
	</div>
	<div id="mon-board">
	</div>

</div>

<div class="Mon-Deck jeu">
	<div class="Stats-Joueur">
		<div class= "ma-vie">
			<p class="qte-vie"></p>
		</div>
		<div class= "mon-mana">
			<p class="qte-mana"></p>
		</div>
		<div class= "Cartes-restantes"></div>
	</div>

	<div id="container-cartes">
	</div>

	<div class="Actions">
	<a href="#" class="bouton_abandon">Give up</a>
	<a href="#" class="bouton_skip_tour">End Turn</a>
	</div>

	


</div>

<div class="chat">
		<iframe style="width: 40%;height: 25%;position: absolute;top: 25%;right: 0%;background : rgba(255, 7, 82, 0.35); fontColor:white;" 
			src="https://magix.apps-de-cours.com/server/#/chat/<?=$data["key"]?>">
		</iframe>
	</div>

<?php
	require_once("partial/footer.php");
