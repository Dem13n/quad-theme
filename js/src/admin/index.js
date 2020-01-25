import {extend} from "flarum/extend";
import app from "flarum/app";
import Page from 'flarum/components/Page';

app.initializers.add('dem13n-quad-theme', app => {
    extend(Page.prototype, 'init', function() {
        if (app.forum.attribute('darkMode') == 1) {
            $('body').addClass('night-mode');
        }
    });
});