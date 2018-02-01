<?php

// echo '<pre>'; print_r($_SERVER);
$url = 'http://'.$_SERVER['HTTP_HOST'].'/cms/api/metadata'.$_SERVER[REDIRECT_URL];
// echo $url;
echo file_get_contents($url);