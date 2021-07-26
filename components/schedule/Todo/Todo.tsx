import React, { Component, useState } from "react";
import styles from "./Todo.module.scss";
import RootStore from "stores/RootStore";
import { inject, observer } from "mobx-react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { FaPencilAlt, FaTimesCircle } from "react-icons/fa";

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

  submitFormDay = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newDay = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      tasks: [
        {
          name: formData.get("name") as string,
          order: null,
          content: formData.get("description") as string,
        },
      ],
    };
    this.props.todoStore.addNewDay(newDay);
    // this.props.todoStore.addTaskToCurrentDay(newDay);
  };

  editFormDay = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newDay = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      tasks: this.props.todoStore?.currentDay?.tasks
        ? this.props.todoStore.currentDay.tasks
        : [
            {
              name: formData.get("name") as string,
              order: null,
              content: formData.get("description") as string,
            },
          ],
    };
    this.props.todoStore.updateCurrentDay(newDay);
  };

  handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(this.props.todoStore.currentDay.tasks);

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    this.props.todoStore.updateCurrentDayTasks(items);
    this.props.todoStore.updateDay();
  };

  render() {
    const { todoStore } = this.props;
    const { currentDay } = todoStore;
    return (
      <div className={styles.Todo}>
        <div className={styles.Todo_Tabs}>
          {todoStore.days?.map((day) => (
            <Tab
              key={day.id}
              day={day}
              selectDay={todoStore.setSelectedDay}
              selectedDay={todoStore.selectedDay}
              editDay={todoStore.setIsEditDay}
              isEdited={todoStore.isEditDay}
            />
          ))}
          <div
            onClick={() => todoStore.setIsAddNewDay(!todoStore.isAddNewDay)}
            className={styles.Todo_Tabs_Plus}
          >
            {todoStore.isAddNewDay ? "X" : "+"}
          </div>
        </div>

        {todoStore.isAddNewDay && (
          <div className={styles.Todo_Container}>
            <form
              onSubmit={this.submitFormDay}
              className={styles.Todo_Container_Form}
            >
              <div className={styles.Todo_Container_Form_Input}>
                <label htmlFor="name">Напишите название дня</label>
                <input type="text" id={"name"} name={"name"} />
              </div>
              <div className={styles.Todo_Container_Form_Input}>
                <label htmlFor="description">Введите описание дня</label>
                <input type="text" id={"description"} name={"description"} />
              </div>
              <button type={"submit"}>Добавить день</button>
            </form>
          </div>
        )}

        {todoStore.isEditDay && (
          <div className={styles.Todo_Container}>
            <form
              onSubmit={this.editFormDay}
              className={styles.Todo_Container_Form}
            >
              <div className={styles.Todo_Container_Form_Input}>
                <label htmlFor="name">Напишите название дня</label>
                <input
                  type="text"
                  id={"name"}
                  name={"name"}
                  value={currentDay?.name || ""}
                  onChange={(e) => todoStore.changeDayByKey(e.target)}
                />
              </div>
              <div className={styles.Todo_Container_Form_Input}>
                <label htmlFor="description">Введите описание дня</label>
                <input
                  type="text"
                  id={"description"}
                  name={"description"}
                  value={currentDay?.description || ""}
                  onChange={(e) => todoStore.changeDayByKey(e.target)}
                />
              </div>
              <button type={"submit"}>Изменить день</button>
              <button
                style={{ marginTop: "16px" }}
                type={"button"}
                onClick={todoStore.deleteDay}
              >
                Удалить день
              </button>
            </form>
          </div>
        )}

        {!todoStore.isAddNewDay && !todoStore.isEditDay && (
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
                      {currentDay?.tasks.map((task, index) => (
                        <Day
                          key={task.name}
                          task={task}
                          index={index}
                          removeTask={todoStore.removeTaskFromDay}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const Tab = ({ day, selectDay, selectedDay, editDay, isEdited }) => {
  const isSelected = selectedDay === day.id;
  const toggleEdit = (e, value) => {
    e.stopPropagation();
    editDay(value);
  };
  return (
    <div
      className={isSelected ? styles.Todo_Tabs_TabActive : styles.Todo_Tabs_Tab}
      onClick={() => selectDay(day.id)}
    >
      {day.name}
      <div>
        {isSelected && !isEdited && (
          <FaPencilAlt onClick={(e) => toggleEdit(e, true)} />
        )}
        {isSelected && isEdited && (
          <FaTimesCircle onClick={(e) => toggleEdit(e, false)} />
        )}
      </div>
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
