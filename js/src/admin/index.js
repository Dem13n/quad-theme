import {extend} from "flarum/extend";
import app from "flarum/app";
import Page from 'flarum/components/Page';
import FoDSettings from './components/FoDSettings';

    app.initializers.add('dem13n-quad-theme', app => {
    app.extensionSettings['dem13n-quad-theme'] = () => app.modal.show(FoDSettings);
    extend(Page.prototype, 'oninit', function() {
        if (app.forum.attribute('darkMode') == 1) {
            $('body').addClass('night-mode');
        }
    });
  });

