<?php
	require_once("action/CommonAction.php");


	class AjaxPlayAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
            $type = ($_POST["type"]);
            $card_id = ($_POST["carte_id"]);
            $target_id = ($_POST["target_id"]);
            $data = [];
            $data["key"] = $_SESSION["key"];


            if ($type == "END_TURN"){
                $data["type"] = $type;
            }
            else if ($type == "SURRENDER"){
                $data["type"] = $type;
            }
            else if ($type == "HERO_POWER"){
                $data["type"] = $type;
            }
            else if ($type == "PLAY"){
                $data["type"] = $type;
                $data["uid"] = $card_id;
            }
            else if ($type == "ATTACK"){
                $data["type"] = $type;
                $data["uid"] = $card_id;
                $data["targetuid"] = $target_id;
            }
            
            $result = parent::callAPI("games/action", $data);          

			return compact("result");
		}

		}