import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
   this.search = this.search.bind(this)
  }

  getRepos() {
    axios.get('http://localhost:1128/repos')
    .then((res) => {
      this.setState({
        repos: res.data
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  search (term) {

    //console.log(`${term} was searched`);

    axios.post('http://localhost:1128/repos',{
      name: term
    })
    .then(this.getRepos)
    .catch((error) => {console.error(error)})

  }

  componentDidMount() {
    axios.get('http://localhost:1128/repos')
    .then((res) => {
      console.log(res.data, 'Data from start')
      this.setState({
        repos: res.data
      })
    })

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));