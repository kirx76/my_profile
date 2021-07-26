import { AxiosInstance } from "axios";
import { action, computed, makeObservable, observable, toJS } from "mobx";

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

export default class TodoStore {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    makeObservable(this);
    this.client = client;
  }

  @observable _days: TDay[];
  @observable _selectedDay: number = 1;
  @observable isAddNewDay = false;
  @observable isEditDay = false;

  @action setIsAddNewDay = (value: boolean) => (this.isAddNewDay = value);
  @action setIsEditDay = (value: boolean) => (this.isEditDay = value);

  @computed get selectedDay() {
    return toJS(this._selectedDay);
  }

  @action setSelectedDay = (day: number) => {
    console.log(day);
    this._selectedDay = day;
  };

  @computed get currentDay() {
    return this._days?.find((days) => days.id === this.selectedDay);
  }

  @computed get days() {
    return this._days;
  }

  @action setDays = (days: TDay[]) => {
    this._days = days;
  };

  @action getDays = () => {
    return this.client.get("/day").then((response) => {
      this.setDays(response.data);
      return this.days;
    });
  };

  @action updateCurrentDayTasks = (tasks: TTask[]) => {
    this.currentDay.tasks = tasks;
  };

  @action addTaskToCurrentDay = (task: TTask) => {
    const currentTasks = toJS(this.currentDay.tasks);
    currentTasks.push(task);
    this.updateCurrentDayTasks(currentTasks);
    this.updateDay();
  };

  @action updateDay = () => {
    return this.client
      .patch(`/day/${this.selectedDay}`, this.currentDay)
      .then((response) => {
        this.getDays();
      });
  };

  @action removeTaskFromDay = (item) => {
    const removedTask = this.currentDay.tasks.find((task) => task === item);
    const newTasks = this.currentDay.tasks.filter(
      (task) => task !== removedTask
    );
    this.updateCurrentDayTasks(toJS(newTasks));
    this.updateDay();
  };

  @action addNewDay = (day: TDay) => {
    console.log(day);
    this.client.post("/day/", day).then((response) => {
      this.getDays();
    });
  };

  @action changeDayByKey = (data) => {
    this.currentDay[data.id] = data.value;
  };

  @action updateCurrentDay = (day: TDay) => {
    const idInArray = this.days.findIndex((days) => days === this.currentDay);
    console.log(idInArray);
    this._days[idInArray] = day;
    this.setIsEditDay(false);
    // this.currentDay = day;
    this.updateDay();
  };
}
