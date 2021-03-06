/**
 * Created by tlakatlekutl on 04.04.17.
 */

/* global ModalView:true, leaderboardTemplate */
/* global API:true */


(function leaderboardModalWindowFunc() {
  const api = new API();

  class LeaderBoardModal extends ModalView {
    constructor() {
      super('Leaderboard', leaderboardTemplate);
    }
    render() {
      api.getLeaderBoard()
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error('error getting leaderboard');
        })
        .then((json) => {
          console.log(json);
          super.render({ data: json.users });
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }
  this.LeaderBoardModal = LeaderBoardModal;
}());

