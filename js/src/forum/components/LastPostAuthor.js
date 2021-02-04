import Component from 'flarum/Component';
import humanTime from 'flarum/helpers/humanTime';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';

export default class LastPostAuthor extends Component {
    view() {

        const discussion = this.attrs.discussion;
        const lastPost = this.attrs.lastPost && discussion.replyCount();
        const user = discussion[lastPost ? 'lastPostedUser' : 'user']();
        const time = discussion[lastPost ? 'lastPostedAt' : 'createdAt']();

        let currentTime = new Date().getTime();
        let minutesPassed = Math.floor((currentTime - time.getTime()) / 60000);

        const formatTime = (minutesPassed<0) ? <span style="color:deepskyblue" config={el => $(el).tooltip()} title={dayjs(time).endOf('day').fromNow()}>{dayjs(time).format('lll')}</span> : humanTime(time);

        return (
            <div class="LastPostAuthor">
                {app.pane.active || innerWidth <= 767 ? '' : avatar(user, { className: 'Avatar--small' })} {username(user)}
                <span className="lpa">
                     { formatTime }
                </span>
            </div>
        );
    }
}