export class ApiClient {
  getTeams() {
    return fetch("http://localhost:3000/teams")
      .then(data => data.json())
      .then(data => data.teams)
  }
}