<?php namespace KubaMarkiewicz\Gruascarter\Models;

use Model;

class Settings extends Model
{
    public $implement = ['System.Behaviors.SettingsModel'];

    // A unique code
    public $settingsCode = 'gruascarter_settings';

    // Reference to field configuration
    public $settingsFields = 'fields.yaml';

}