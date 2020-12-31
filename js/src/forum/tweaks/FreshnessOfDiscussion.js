import { extend } from 'flarum/extend';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import classList from 'flarum/utils/classList';


export default function FreshnessOfDiscussion() {

  extend(DiscussionListItem.prototype, 'view', function (vnode) {

    if (!app.forum.attribute('Fod') || app.forum.attribute('Fod') == 0) {
      return;
    }

    const discussion = this.attrs.discussion;
    const showFirstPost = ['newest', 'oldest'].indexOf(this.attrs.params.sort) !== -1;
    const lastPost = this.attrs.lastPost && discussion.replyCount();
    const lastPostedTime = discussion[(lastPost != showFirstPost) ? 'lastPostedAt' : 'createdAt']().getTime();

    const attrs = classList([
      'DiscussionListItem',
      this.active() ? 'active' : '',
      discussion.isHidden() ? 'DiscussionListItem--hidden' : ''
    ]);

    const currentTime = new Date().getTime();
    const minutesPassed = Math.floor((currentTime - lastPostedTime) / 60000);

    const newClass =
    (minutesPassed < 0) ? attrs + ' border-blue' :
      (minutesPassed <= 20) ? attrs + ' border-red' :
        (minutesPassed > 20 && minutesPassed <= 180) ? attrs + ' border-orange' :
          (minutesPassed > 180 && minutesPassed <= 1440) ? attrs + ' border-green' : attrs + ' border-trans';

    if (!vnode.attrs) {
      return;
    }

    vnode.attrs.className = newClass;
  });
}
