<?php
	require_once("action/CommonAction.php");


	class LoginAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$hasConnectionError = false;

			if (isset($_POST["username"])) {
                $data = [];
                $data["username"] = $_POST["username"];
                $data["password"] = $_POST["pwd"];

                $result = parent::callAPI("signin", $data);

                if ($result == "INVALID_USERNAME_PASSWORD") {
                    $hasConnectionError = true;
                }
                else {
                    // Pour voir les informations retournées : var_dump($result);exit;
                    $_SESSION["Infos"] = $result;
                    $_SESSION["username"] = $data["username"];
					$_SESSION["visibility"] = 1;
					$_SESSION["key"] = $_SESSION["Infos"]->key;
					$_SESSION["className"] = $_SESSION["Infos"]->className;
					$_SESSION["userType"] = $_SESSION["Infos"]->userType;
					$_SESSION["winCount"] = $_SESSION["Infos"]->winCount;
					$_SESSION["lossCount"] = $_SESSION["Infos"]->lossCount;
					$_SESSION["trophies"] = $_SESSION["Infos"]->trophies;
					$_SESSION["bestTrophyScore"] = $_SESSION["Infos"]->bestTrophyScore;
					$_SESSION["lastLogin"] = $_SESSION["Infos"]->lastLogin;
					$_SESSION["welcomeText"] = $_SESSION["Infos"]->welcomeText;

					header("location:home.php");
					// var_dump($_SESSION["Infos"]->key);
                    exit;
                }

			}

			return compact("hasConnectionError");
		}
	}
