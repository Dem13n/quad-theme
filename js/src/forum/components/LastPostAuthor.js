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

        let currentTime = new Date().getTime();
        let minutesPassed = Math.floor((currentTime - time.getTime()) / 60000);

        const formatTime = (minutesPassed<0) ? <span style="color:deepskyblue" config={el => $(el).tooltip()} title={moment(time).endOf('day').fromNow()}>{moment(time).format('lll')}</span> : humanTime(time);

        return (
            <div class="LastPostAuthor">
                {app.pane.active || innerWidth <= 767 ? '' : avatar(user, { className: 'Avatar--mini' })} {username(user)}
                <span className="lpa">
                     { formatTime }
                </span>
            </div>
        );
    }
}