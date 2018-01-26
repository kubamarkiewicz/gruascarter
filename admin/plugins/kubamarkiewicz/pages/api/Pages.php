<?php namespace KubaMarkiewicz\Pages\Api;

use Illuminate\Routing\Controller;
use KubaMarkiewicz\Pages\Models\Page;
use RainLab\Translate\Classes\Translator;
use Input;

class Pages extends Controller
{

    public function index()
    {
        Translator::instance()->setLocale(Input::get('lang'));

        $query = Page::where('published', '1')
                ->orderBy('sort_order', 'asc');

        $result = $query->get(); 

        $return = [];

        if ($result) foreach ($result as $item) {
            $return[$item->slug] = $item;
        }

        return response()->json($return, 200, array(), JSON_PRETTY_PRINT);
    }


}