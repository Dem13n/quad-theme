import { extend } from 'flarum/extend';
import app from 'flarum/app';
import Pane from 'flarum/utils/Pane';
import Page from 'flarum/components/Page';
import Composer from 'flarum/components/Composer';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import LastPostAuthor from './components/LastPostAuthor';
import FreshnessOfDiscussion from './tweaks/FreshnessOfDiscussion';

app.initializers.add('dem13n-quad-theme', app => {
    extend(Page.prototype, 'oninit', function() {
        $('#app').addClass("is-outer wrapper affix");
    });

    FreshnessOfDiscussion();

    extend(DiscussionListItem.prototype, 'infoItems', function(items) {
        const showFirstPost = ['newest', 'oldest'].indexOf(this.attrs.params.sort) !== -1;
        items.replace('terminalPost',
            LastPostAuthor.component({
                discussion: this.attrs.discussion,
                lastPost: !showFirstPost
            })
        );
    });

    extend(Composer.prototype, 'show', function() {
        $(".Post.ReplyPlaceholder").hide();
    });

    extend(Composer.prototype, 'hide', function() {
        $(".Post.ReplyPlaceholder").show();
    });

    let pinned = localStorage.getItem('panePinned') === 'true';

    extend(Pane.prototype, 'enable', function() {
        $('#app').toggleClass('wrapper', !pinned);
    });

    extend(Pane.prototype, 'disable', function() {
        $('#app').addClass("wrapper");
    });

    extend(Pane.prototype, 'togglePinned', function() {
        pinned = !pinned;
        $('#app').toggleClass('wrapper', !pinned);
    });
});