<?php

$name = "John Doe";//variable declear by $ and not have any variable type
$id = 123;
$cgpa = 3.75;

$std = ['John Doe', 123, 3.75];//array declear by []
$std + array($name, $id, $cgpa);//array declear by array()

$stds= [
    ['John Doe', 123, 3.75],
    ['Jane Smith', 124, 3.85],
    ['Alice Johnson', 125, 3.95]
]; //multidimensional array declear by []

$std [3] [2];//accessing multidimensional array

$std = [
    'name' => 'John Doe',
    'id' => 1,
    'cgpa' => 3.5
];//associative array

$std['cgpa'];//accessing associative array

$stds = [
    's1' => [
        'name' => 'John Doe',
        'id' => 123,
        'cgpa' => 3.75
    ],
    's2' => [
        'name' => 'Jane Smith',
        'id' => 124,
        'cgpa' => 3.85
    ],
    's3' => [
        'name' => 'Alice Johnson',
        'id' => 125,
        'cgpa' => 3.95
    ]
    ];//multidimensional associative array

    $stds['s2']['cgpa'];//accessing multidimensional associative array




















?>
