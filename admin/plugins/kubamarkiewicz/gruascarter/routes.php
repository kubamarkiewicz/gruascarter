<?php

Route::get('/api', 'KubaMarkiewicz\Gruascarter\Api\Index@index');

Route::get('/api/contact', 'KubaMarkiewicz\Gruascarter\Api\Contact@send');
