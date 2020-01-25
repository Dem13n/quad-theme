import Component from 'flarum/Component';
import humanTime from 'flarum/helpers/humanTime';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';

export default class LastPostAuthor extends Component {
    view() {

        const discussion = this.props.discussion;
        const lastPost = this.props.lastPost && discussion.replyCount();
        const user = discussion[lastPost ? 'lastPostedUser' : 'user']();
        const time = discussion[lastPost ? 'lastPostedAt' : 'createdAt']();
        
        return (
            <div class="LastPostAuthor">
                {app.pane.active || innerWidth <= 767 ? '' : avatar(user, { className: 'Avatar--mini' })} {username(user)}
                <span className="lpa">
                    {app.translator.trans('dem13n.forum.discussionlist.ago', { ago: humanTime(time) })}
                </span>
            </div>
        );
    }
}