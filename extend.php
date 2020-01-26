<?php

namespace Dem13n\Quad;

use Flarum\Api\Event\Serializing;
use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/font.less')
        ->css(__DIR__ . '/resources/less/night-mode.less')
        ->css(__DIR__ . '/resources/less/custom.less')
        ->css(__DIR__ . '/resources/less/fix.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/resources/less/font.less')
        ->css(__DIR__ . '/resources/less/night-mode.less')
        ->css(__DIR__ . '/resources/less/custom.less')
        ->css(__DIR__ . '/resources/less/fix.less'),

    function (Dispatcher $events) {
        $events->listen(Serializing::class, Listener\ApiAttributes::class);
    },

];
