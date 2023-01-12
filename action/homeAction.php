<?php
	require_once("action/CommonAction.php");


	class HomeAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			$data = [];
            $data["username"] = $_SESSION["username"];
            $data["key"] = $_SESSION["key"];
            $data["className"] = $_SESSION["className"];
            $data["userType"] = $_SESSION["userType"];
            $data["winCount"] = $_SESSION["winCount"];
            $data["lossCount"] = $_SESSION["lossCount"];
            $data["trophies"] = $_SESSION["trophies"];
            $data["bestTrophyScore"] = $_SESSION["bestTrophyScore"];
            $data["lastLogin"] = $_SESSION["lastLogin"];
            $data["welcomeText"] = $_SESSION["welcomeText"];


            if (!empty($_GET["partie"])) {

                $infos = [];
                $infos["key"] = $data["key"];
                $infos["type"] = ($_GET["partie"]);
                
                $result = parent::callAPI("games/auto-match", $infos);

                if ($result == "JOINED_TRAINING") {
                    header("location:coop.php");
				    exit;
                }
                else if ($result == "JOINED_PVP") {
                    header("location:coop.php");
				    exit;
                }
                else{
                    header("location:home.php");
				    exit;
                }

                
            }

			return $data;
		}

		}
	
