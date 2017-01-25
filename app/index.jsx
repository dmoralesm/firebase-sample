import React from 'react'
import ReactDOM from 'react-dom'
import Rebase from 're-base'
const disciplines = 'disciplines';
const base = Rebase.createClass({
  apiKey: '',
  authDomain: '',
  databaseURL: 'DATABASE_URL',
  storageBucket: ''
});

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      disciplines: []
    }
  }
  handleSubmit(e) {
    var newDiscipline = this.discipline.value;
    this.discipline.value = '';
    base.post(disciplines, {
      data: this.state.disciplines.concat([newDiscipline])
    })
  }
  setRef(ref) {
    this.discipline = ref
  }
  componentDidMount() {
    this.ref = base.bindToState(disciplines, {
      context: this,
      asArray: true,
      state: 'disciplines'
    })
  }
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }
  render() {
    return (
      <div className='col-sm-12'>
        <h1>Hello Firebase</h1>
        <form className='form-inline'>
          <div className='form-group'>
             <input type='text' className='form-control'
               placeholder='Discipline'
               ref={(ref) => this.setRef(ref)} />
          </div>
          <button type='button'
              className='btn btn-default'
              onClick={(e) => this.handleSubmit(e)}>Add new</button>
        </form>

        <ul className='row'>
          {this.state.disciplines.map((discipline, i) => (
            <li key={i}>{discipline}</li>
          ))}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))
