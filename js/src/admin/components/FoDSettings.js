import Modal from 'flarum/components/Modal';
import Switch from 'flarum/components/Switch';
import Button from 'flarum/components/Button';
import saveSettings from 'flarum/utils/saveSettings';
import Stream from 'flarum/utils/Stream';

export default class FoDSettings extends Modal {

  oninit(vnode) {
    super.oninit(vnode);
    this.Fod = Stream(app.data.settings.dem13n_fod === '1');
  }

  className() {
    return 'FoDSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('dem13n.admin.quad_theme.title');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form">
          <div className="Form-group">
            <Switch
              state={this.Fod()}
              onchange={this.Fod}>
              {app.translator.trans('dem13n.admin.quad_theme.fod')}
            </Switch>
          </div>
          <div className="Form-group">
            <Button
              className='Button Button--primary'
              type='submit'
              loading={this.loading}>
              {app.translator.trans('dem13n.admin.quad_theme.submit_button')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    saveSettings({
      dem13n_fod: this.Fod()
    }).then(() => window.location.reload());
  }
}