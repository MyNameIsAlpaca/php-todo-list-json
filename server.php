<?php

if(isset($_POST['newTodo'])) {

  $newElement = [
    "name" => $_POST['newTodo'],
    "done" => false
  ];

  $listJson = file_get_contents('list.json');

  $list = json_decode($listJson);

  $list[] = $newElement;

  $newListJson = json_encode($list);

  file_put_contents('list.json', $newListJson);

} else{

  $listaJsonOriginal = file_get_contents('list.json');
  
  $listaOriginal = json_decode($listaJsonOriginal);
  
  header('Content-type: application/json');
  
  echo json_encode($listaOriginal);
  
}
