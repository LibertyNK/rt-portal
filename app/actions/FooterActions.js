import alt from '../alt';

class FooterActions {
  constructor() {
    this.generateActions(
      'getTopTeamsSuccess',
      'getTopTeamsFail'
    );
  }

  getTopTeams() {
    $.ajax({ url: '/api/teams/top' })
      .done((data) => {
        this.actions.getTopTeamsSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getTopTeamsFail(jqXhr)
      });
  }
}

export default alt.createActions(FooterActions);