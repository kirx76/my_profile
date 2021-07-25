import React, { Component, useState } from "react";
import styles from "./Todo.module.scss";
import RootStore from "stores/RootStore";
import { inject, observer } from "mobx-react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { toJS } from "mobx";

type TTask = {
  name: string;
  order: number;
  content: string;
  extraData?: string;
};

type TDay = {
  id?: number;
  name: string;
  description: string;
  tasks: TTask[];
};

@inject("todoStore")
@observer
class Todo extends Component<RootStore, any> {
  componentDidMount() {
    this.props.todoStore.getDays().then(() => {
      const firstDayId = this.props.todoStore.days[0].id;
      this.props.todoStore.setSelectedDay(firstDayId);
    });
  }

  sortByOrder = (first, second) => {
    const keyA = first.order,
      keyB = second.order;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  };

  submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newTask = {
      name: formData.get("task") as string,
      order: formData.get("order") as unknown as number,
      content: formData.get("content") as string,
    };

    this.props.todoStore.addTaskToCurrentDay(newTask);
  };

  handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(this.props.todoStore.currentDay.tasks);

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(toJS(items));
    this.props.todoStore.updateCurrentDayTasks(items);
    this.props.todoStore.updateDay();
  };

  render() {
    const { days } = this.props.todoStore;
    console.log(this.props.todoStore.currentDay);
    return (
      <div className={styles.Todo}>
        <div className={styles.Todo_Tabs}>
          {this.props.todoStore.days?.map((day) => (
            <Tab
              key={day.id}
              day={day}
              selectDay={this.props.todoStore.setSelectedDay}
            />
          ))}
          <div className={styles.Todo_Tabs_Plus}>+</div>
        </div>
        <div className={styles.Todo_Container}>
          <form
            onSubmit={this.submitForm}
            className={styles.Todo_Container_Form}
          >
            <div className={styles.Todo_Container_Form_Input}>
              <label htmlFor="task">Введите задачу на этот день</label>
              <input type="text" id={"task"} name={"task"} />
            </div>
            <div className={styles.Todo_Container_Form_Input}>
              <label htmlFor="content">Введите описание задачи</label>
              <input type="text" id={"content"} name={"content"} />
            </div>
            <button type={"submit"}>Добавить</button>
          </form>
          <div className={styles.Todo_Container_Task}>
            <DragDropContext onDragEnd={this.handleOnDragEnd}>
              <Droppable droppableId={"tasks"}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {this.props.todoStore.currentDay?.tasks.map(
                      (task, index) => (
                        <Day
                          key={task.name}
                          task={task}
                          index={index}
                          removeTask={this.props.todoStore.removeTaskFromDay}
                        />
                      )
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    );
  }
}

const Tab = ({ day, selectDay }) => {
  return (
    <div className={styles.Todo_Tabs_Tab} onClick={() => selectDay(day.id)}>
      {day.name}
    </div>
  );
};

const Day = ({ task, index, removeTask }) => {
  const [hidden, setHidden] = useState(true);
  const onCloseClick = (e) => {
    e.stopPropagation();
    removeTask(task);
  };
  return (
    <Draggable draggableId={task.name} index={index}>
      {(provided) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
          }}
        >
          <div
            className={styles.Todo_Container_Task_Item}
            onClick={() => setHidden(!hidden)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <span className={styles.Todo_Container_Task_Item_Name}>
              {task.name}
              <div
                className={styles.Todo_Container_Task_Item_Name_Close}
                onClick={onCloseClick}
              >
                X
              </div>
            </span>
            {!hidden && (
              <span className={styles.Todo_Container_Task_Item_Content}>
                {task.content}
              </span>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
