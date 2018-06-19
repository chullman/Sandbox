// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

import React, { Component } from 'react';

const RepoItem = (props) => {
  return (
    <div className="repo-item">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <a href={props.html_url} target="_blank">
        <small>{props.html_url}</small>
      </a>
    </div>
  )
}

export class RepoList extends Component {

  constructor(props) {
    super(props)
    console.log('RepoList: constructor');
    this.state = {
      repos: []
    }

  }



  fetchRepos = () => {

    const myHeaders = new Headers();

    const url = `https://api.github.com/users/${this.props.user}/repos`

 
    fetch(url, {method: 'GET', 
        headers: new Headers({
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
          'authorization' : 'eb62e89d558359d13667def91468a708b6ef5c06',
    })}).then(
      response => response.json()
    ).then((repos) => {
      this.setState({ repos: repos })
    })
  }

  componentWillMount() {
    // DEPRECATED - Will occur before component mounted to the DOM
    console.log('RepoList: willMount')
  }

  // called only once - i.e. when component is first mounted
  componentDidMount() {
    // We have access to state and component DOM in here
    console.log('RepoList: didMount');

    // AJAX
    this.fetchRepos()
  }

  componentWillReceiveProps(nextProps) {
    // DEPRECATED
    // called whenever the props on a component changed
    console.log('RepoList: willReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Checked just before updates and re-renders the component
    // Tell react whether or not to re-render component - default to true
    console.log('RepoList: shouldUpdate');
    return true;
  }

  componentWillUpdate() {
    //UNSAFE
    console.log('RepoList: willUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('RepoList: didUpdate');
    if (this.props.user !== prevProps.user)
    {
      this.fetchRepos()
    }
    
  }

  // Cleanup - remove event handlers, close db/network connections
  componentWillUnmount() {
    console.log('RepoList: willUnmount');
  }

  render() {
    console.log('RepoList: render')
    console.log(this.state.repos)
    return (
      <div>
        <h1>Repo list for user {this.props.user}</h1>
        {
          this.state.repos.map((repo) => {
            return <RepoItem key={repo.id} name={repo.name} description={repo.description} html_url={repo.html_url}/>
          })
        }
      </div>
    )
  }
}
