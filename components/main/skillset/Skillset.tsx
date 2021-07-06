import React, {Component} from "react";
import styles from './Skillset.module.scss';

export default class Skillset extends Component<any, any> {
  render() {
    return (
      <div className={styles.Skillset}>
        <div className={styles.Skillset_Content}>
          <div className={styles.Skillset_Content_Left}>
            <div className={styles.Skillset_Content_Left_Title}>
              <span>Skillset</span>
            </div>
            <div className={styles.Skillset_Content_Left_Description}>
              <span>With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</span>
            </div>
          </div>
          <div className={styles.Skillset_Content_Right}>
            {skillsetitems.map(item => <SkillSetItem item={item} key={item.title}/>)}
          </div>
        </div>
        <div className={styles.Skillset_Footer}>
          {skillsetlogos.map(item=> <SkillSetLogos item={item} key={item}/>)}
        </div>
      </div>
    )
  }
}

const SkillSetItem = ({item}) => {
  return (
    <div className={styles.Skillset_Content_Right_Item}>
      {/*icon*/}
      <div className={styles.Skillset_Content_Right_Item_Title}>
        <span>{item.title}</span>
      </div>
      <div className={styles.Skillset_Content_Right_Item_Description}>
        <span>{item.description}</span>
      </div>
    </div>
  )
}

const skillsetitems = [
  {
    title: 'Product Design',
    description: 'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'
  },
  {
    title: 'Visual Design',
    description: 'My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package.'
  },
  {
    title: 'Motion Design',
    description: 'I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling. '
  },
  {
    title: 'Photography',
    description: 'Clicking pictures really brings out the creative in me. Phtography really makes you look and percieve things in a different way.'
  },
]

const SkillSetLogos = ({item}) => {
  return (
    <div className={styles.Skillset_Footer_Item}>{item}</div>
  )
}


const skillsetlogos = [
  'CBRE',
  'EPIQ',
  'Fast',
  'Linux',
  'SMTH',
  'ELSE'
]
