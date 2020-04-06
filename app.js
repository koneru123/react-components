// Here we create a `GroceryList` component

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    }
  }

  onListItemhover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    let style = {
      'font-weight': this.state.done ? 'bold' : ''
    }
    return (
        <li style ={style} onMouseOver={this.onListItemhover.bind(this)}>{this.props.todo}</li>
    );
  }
}

let GroceryList = (props) => (
 <ul>
   {props.todos.map(todo =>
      <GroceryListItem todo={todo}/>
   )}
 </ul>
);

let todos = ['Cucumbers', 'Kale', 'Tomatos'];
ReactDOM.render(<GroceryList todos={todos}/>, document.getElementById("app"));