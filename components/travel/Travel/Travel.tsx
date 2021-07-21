import React, { Component } from "react";
import styles from "./Travel.module.scss";
import RootStore from "stores/RootStore";
import { inject, observer } from "mobx-react";
import {
  Clusterer,
  GeolocationControl,
  Map,
  Placemark,
  RouteButton,
  RouteEditor,
  SearchControl,
  TrafficControl,
  TypeSelector,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";

@inject("travelStore")
@observer
class Travel extends Component<RootStore, any> {
  componentDidMount() {
    this.props.travelStore.getPlaceMarks();
  }
  render() {
    return (
      <div className={styles.Travel}>
        <YMaps
          query={{
            apikey: "b2853f43-c2a2-437b-a1b7-9671d2fdd5ca",
          }}
        >
          <Map
            width={"100%"}
            height={"500px"}
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
      </div>
    );
  }
}

export default Travel;
