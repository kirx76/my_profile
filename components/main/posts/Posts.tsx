import React, { Component } from "react";
import styles from "./Posts.module.scss";
import post_img1 from "/public/post1.png";
import post_img2 from "/public/post2.png";
import post_img3 from "/public/post3.png";
import post_img4 from "/public/post4.png";

export default class Posts extends Component<any, any> {
  render() {
    return (
      <div className={styles.Posts}>
        <div className={styles.Posts_Header}>
          <div className={styles.Posts_Header_Title}>My projects</div>
          <div className={styles.Posts_Header_Description}>
            Work that I’ve done for the past 8 years
          </div>
        </div>
        {posts.map((item) => (
          <Post key={item.id} item={item} />
        ))}
        <div className={styles.Posts_Button}>
          <span>VIEW ALL PROJECTS</span>
        </div>
      </div>
    );
  }
}

const Post = ({ item }) => {
  return (
    <div className={styles.Posts_Item}>
      <div className={styles.Posts_Item_Container}>
        <div className={styles.Posts_Item_Container_Image}>
          <img src={item.img.src} alt="post" />
        </div>
        <div className={styles.Posts_Item_Container_Text}>
          <div className={styles.Posts_Item_Container_Text_Title}>
            {item.title}
          </div>
          <div className={styles.Posts_Item_Container_Text_Description}>
            {item.description}
          </div>
        </div>
      </div>
    </div>
  );
};

const posts = [
  {
    id: 1,
    img: post_img1,
    title: "Restaurant Website Design",
    description:
      "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.",
  },
  {
    id: 2,
    img: post_img2,
    title: "Mobile Dashboard",
    description:
      "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.",
  },
  {
    id: 3,
    img: post_img3,
    title: "CoinView Mobile App Design",
    description:
      "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.",
  },
  {
    id: 4,
    img: post_img4,
    title: "T-Box Mobile Design",
    description:
      "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.",
  },
];
