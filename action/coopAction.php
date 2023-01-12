<?php
	require_once("action/CommonAction.php");


	class coopAction extends CommonAction {

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


            

			return $data;
		}

		}