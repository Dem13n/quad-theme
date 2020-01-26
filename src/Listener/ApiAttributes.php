<?php

namespace Dem13n\Quad\Listener;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;


class ApiAttributes
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function handle(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['darkMode'] = $this->settings->get('theme_dark_mode');
            $event->attributes['Fod'] = $this->settings->get('dem13n_fod');
        }
    }
}
