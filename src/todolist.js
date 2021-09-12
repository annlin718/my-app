import React, { Component } from "react";
import "antd/dist/antd.css";
import "./index.css";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList,
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
    // 獲取DB.JSON的資料。
    // axios.get(API_GET_DATA).then((res) => {
    //   const data = res.data;
    //   console.log(data);
    //   const acton = initListAction(data);
    //   store.dispatch(acton);
    // });
  }

  handleInputChange(e) {
    //當輸入框值被改變。
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    //新增代辦事項(點擊提交按鈕時)
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    // 刪除代辦事項(點擊刪除按鈕時)
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
