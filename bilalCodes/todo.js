import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = { text: '', items: [] }
  }
  change(e) {
    this.setState({
      text: e.target.value
    })
  }
  submit(e) {
    e.preventDefault()
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    // const inp = document.getElementById('input')
    this.setState((e) => ({
      items: e.items.concat(newItem),
      text: ''
      
    }))
    // inp.focus()
  }
  render() {
    return (
      <div>
        <h2>React Todo App</h2>
        <form action="" onSubmit={this.submit.bind(this)}>
          <input type="text" onChange={this.change.bind(this)} id="input" value={this.state.text}/>
          <button type="submit"> Add Item</button>
        </form>
        <ol>
          {
            this.state.items.map((i) => (
              <App list={i} key={i.id} />
            ))
          }
        </ol>
      </div>
    )
  }
}
ReactDOM.render(
  <div>
  <Todo />
  <Todo />
  </div>,
  document.getElementById('root')
);
