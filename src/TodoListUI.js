import React from "react";
import { Input, Button, List, Typography, Divider } from "antd";

const TodoListUI = (props) => {
  return (
    <div className="divTodoList">
      <Input
        value={props.inputValue}
        placeholder="todo info"
        className="tbTodo"
        style={{ marginRight: "5px" }}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>
        提交
      </Button>

      <List
        style={{ margin: "20px" }}
        header={<div>待辦事項</div>}
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item>
            {item}
            <label
              onClick={(index) => {
                props.handleItemDelete(index);
              }}
              className="btnDelete"
            >
              x
            </label>
          </List.Item>
        )}
      />
    </div>
  );
};

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div className="divTodoList">
//         <Input
//           value={props.inputValue}
//           placeholder="todo info"
//           className="tbTodo"
//           style={{ marginRight: "5px" }}
//           onChange={props.handleInputChange}
//         />
//         <Button type="primary" onClick={props.handleBtnClick}>
//           提交
//         </Button>

//         <List
//           style={{ margin: "20px" }}
//           header={<div>待辦事項</div>}
//           dataSource={props.list}
//           renderItem={(item, index) => (
//             <List.Item>
//               {item}
//               <label
//                 onClick={(index) => {
//                   props.handleItemDelete(index);
//                 }}
//                 className="btnDelete"
//               >
//                 x
//               </label>
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default TodoListUI;
