<?php namespace KubaMarkiewicz\Pages\Models;

use Model;

/**
 * Model
 */
class Page extends Model
{
    use \October\Rain\Database\Traits\Validation;
    use \October\Rain\Database\Traits\Sortable;
    use \October\Rain\Database\Traits\SimpleTree;
    
    /*
     * Validation
     */
    public $rules = [
    ];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'kubamarkiewicz_pages_pages';

    public $implement = ['RainLab.Translate.Behaviors.TranslatableModel']; 

    public $translatable = ['name','meta_title', 'meta_description'];
}