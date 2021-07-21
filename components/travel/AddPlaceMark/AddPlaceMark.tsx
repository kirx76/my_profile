import React, { Component, createRef } from "react";
import styles from "./AddPlaceMark.module.scss";
import RootStore from "stores/RootStore";
import { inject, observer } from "mobx-react";
import {
  Clusterer,
  GeolocationControl,
  ListBox,
  ListBoxItem,
  Map,
  Placemark,
  RouteButton,
  RouteEditor,
  RoutePanel,
  SearchControl,
  TrafficControl,
  TypeSelector,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";
import { TPlaceMark } from "stores/TravelStore";

@inject("notificationStore")
@inject("travelStore")
@observer
class AddPlaceMark extends Component<RootStore, any> {
  componentDidMount() {
    this.props.travelStore.getPlaceMarks();
  }

  formRef: { current: HTMLFormElement } = createRef();
  submitForm = (e) => {
    e.preventDefault();
    if (!this.state.placeMark) {
      this.props.notificationStore.createNotification(
        "error",
        "Выберите точку на карте",
        "Ашыбка"
      );
      return;
    }
    const formData = new FormData(this.formRef.current);
    const data: TPlaceMark = {
      lat: this.state.placeMark.lat as number,
      long: this.state.placeMark.long as number,
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      extraData: formData.get("extraData") as string,
    };
    this.props.travelStore.addPlaceMark(data);
    this.setState({
      selectedMark: null,
      placeMark: null,
    });
  };

  addMark = (e) => {
    this.setState({
      ...this.state,
      placeMark: {
        lat: e.get("coords")[0],
        long: e.get("coords")[1],
      },
    });
  };

  dragMark = (e) => {
    this.setState({
      ...this.state,
      placeMark: {
        lat: e.get("target").geometry.getCoordinates()[0],
        long: e.get("target").geometry.getCoordinates()[1],
      },
    });
  };

  selectMark = (placeMark) => {
    this.setState({
      ...this.state,
      selectedMark: placeMark,
    });
    console.log(this.state);
  };

  deleteMark = () => {
    this.props.travelStore.removeMark(this.state.selectedMark.id).then(() => {
      this.setState({ ...this.state, selectedMark: null });
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      placeMark: null,
      selectedMark: null,
    };
  }

  render() {
    return (
      <div className={styles.AddPlaceMark}>
        <h3>Добавление точки на карту</h3>
        <form
          className={styles.AddPlaceMark_Form}
          onSubmit={this.submitForm}
          style={{ width: "100%" }}
          ref={this.formRef}
        >
          <YMaps
            query={{
              apikey: "b2853f43-c2a2-437b-a1b7-9671d2fdd5ca",
            }}
          >
            <Map
              width={"100%"}
              height={"500px"}
              onClick={this.addMark}
              defaultState={{
                center: [59.95, 30.19],
                zoom: 10,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              modules={[
                "control.ZoomControl",
                "control.FullscreenControl",
                "control.SearchControl",
                "control.ListBox",
                "control.ListBoxItem",
                "control.Manager",
                "control.RouteButton",
                "control.RouteEditor",
                "control.RoutePanel",
                "control.RulerControl",
                "control.SearchControl",
                "control.storage",
                "control.TrafficControl",
                "control.TypeSelector",
                "control.ZoomControl",
              ]}
            >
              <RouteButton />
              <RouteEditor />
              <TrafficControl />
              <TypeSelector />
              <ZoomControl options={{ float: "right" }} />
              <GeolocationControl options={{ float: "left" }} />
              <SearchControl />

              {this.state.placeMark && (
                <Placemark
                  onDragEnd={this.dragMark}
                  geometry={[
                    this.state.placeMark.lat,
                    this.state.placeMark.long,
                  ]}
                  options={{
                    draggable: true,
                    preset: "islands#circleDotIcon",
                    iconColor: "red",
                  }}
                />
              )}
              <Clusterer
                options={{
                  preset: "islands#invertedBlueClusterIcons",
                  groupByCoordinates: false,
                  zoomMargin: 150,
                }}
              >
                {this.props.travelStore.placeMarks?.map((placeMark) => {
                  return (
                    <Placemark
                      onClick={() => this.selectMark(placeMark)}
                      geometry={[placeMark.lat, placeMark.long]}
                      key={placeMark.id}
                      properties={{
                        hintContent: placeMark.name,
                        balloonContentHeader: placeMark.name,
                        balloonContentBody: `${
                          placeMark.description
                        } ${"<br/>"} ${placeMark?.extraData}`,
                        objectId: placeMark.id,
                      }}
                      modules={[
                        "geoObject.addon.balloon",
                        "geoObject.addon.hint",
                      ]}
                      options={{
                        preset: "islands#circleDotIcon",
                      }}
                    />
                  );
                })}
              </Clusterer>
            </Map>
          </YMaps>
          <div className={styles.AddPlaceMark_Form_Input}>
            <label htmlFor="name">Название</label>
            <input type="text" id={"name"} name={"name"} required />
          </div>
          <div className={styles.AddPlaceMark_Form_Input}>
            <label htmlFor="description">Описание</label>
            <textarea
              rows={5}
              id={"description"}
              name={"description"}
              required
              cols={4}
            />
          </div>
          <div className={styles.AddPlaceMark_Form_Input}>
            <label htmlFor="extraData">Дополнительная информация</label>
            <textarea rows={5} id={"extraData"} name={"extraData"} />
          </div>
          <button className={styles.AddPlaceMark_Form_Button} type={"submit"}>
            Добавить точку
          </button>
        </form>
        {this.state.selectedMark && (
          <div style={{ position: "absolute", top: 0 }}>
            <span>Хотите удалить точку?</span>
            <button onClick={this.deleteMark}>Удалить</button>
          </div>
        )}
      </div>
    );
  }
}

export default AddPlaceMark;
