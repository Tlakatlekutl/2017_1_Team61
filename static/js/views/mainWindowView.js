/**
 * Created by tlakatlekutl on 27.03.17.
 */
/* global BaseView:true */
/* global Router:true */
/* global UserModel:true */


(function mainWindowFunc() {
  const router = new Router();
  const userModel = new UserModel();
  class MainView extends BaseView {
    constructor() {
      super(['main-vindow-container'], window.mainWindowTemplate);
    }
    render() {
      this.data = {
        authorised: userModel.isAuthorised(),
        nickname: userModel.getData().nickname,
      };
      super.render({ user: this.data });
      this.addListeners();
    }
    show() {
      if (this.data.authorised !== userModel.isAuthorised()) {
        this.data = {
          authorised: userModel.isAuthorised(),
          nickname: userModel.getData().nickname,
        };
        this.setContent({ user: this.data });
        this.addListeners();
      }
      super.show();
    }
    addListeners() {
      document.querySelector('.btn-left').addEventListener('click', () => { router.go('/game'); });
      document.querySelector('.btn-right').addEventListener('click', () => { router.go('/game'); });
      document.querySelector('.leaderboard-button').addEventListener('click', () => { router.go('/leaderboard'); });
      document.querySelector('.footer-help-link').addEventListener('click', () => { router.go('/about'); });

      if (this.data.authorised) {
        document.querySelector('.profile-link').addEventListener('click', () => {
          router.go('/profile');
        });
        document.querySelector('.logout-link').addEventListener('click', () => {
          userModel.logout()
            .then(() => {
              // debugger;
              this.show();
            });
        });
      } else {
        document.querySelector('.login-link').addEventListener('click', () => {
          router.go('/login');
        });
        document.querySelector('.signup-link').addEventListener('click', () => {
          router.go('/signup');
        });
      }
    }
  }
  this.MainView = MainView;
}());
