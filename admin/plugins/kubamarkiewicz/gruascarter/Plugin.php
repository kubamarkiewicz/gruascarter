<?php namespace KubaMarkiewicz\Gruascarter;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
    }



    public function registerSettings()
    {
        return [
            'settings' => [
                'label'       => 'Settings',
                'description' => 'Manage custom settings.',
                'category'    => 'Grúas Carter Settings',
                'icon'        => 'icon-cog',
                'class'       => 'KubaMarkiewicz\Gruascarter\Models\Settings',
                'order'       => 0,
                'keywords'    => 'security location'
            ]
        ];
    }
}
