<?php namespace KubaMarkiewicz\Pages\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Pages extends Controller
{
    public $implement = ['Backend\Behaviors\ListController','Backend\Behaviors\FormController','Backend\Behaviors\ReorderController'];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';
    public $reorderConfig = 'config_reorder.yaml';

    public $requiredPermissions = [
        'manage_pages' 
    ];

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('KubaMarkiewicz.Pages', 'main-menu-item');
    }
}