import React, {Component} from "react";
import styles from './Experience.module.scss'

export default class Experience extends Component<any, any> {
  render() {
    return (
      <div className={styles.Experience}>
        <div className={styles.Experience_Header}>
          <span className={styles.Experience_Header_Title}>Work experience</span>
          <span className={styles.Experience_Header_Content}>Companies I have worked for in the past.</span>
        </div>
        <div className={styles.Experience_Body}>
          {ExperienceItems.map(info => <ExperienceItem info={info} key={info.id}/>)}
        </div>
      </div>
    )
  }
}


const ExperienceItem = ({info}) => {
  return (
    <div className={styles.Experience_Body_Item}>
      <span className={styles.Experience_Body_Item_Number}>0{info.id}</span>
      <div className={styles.Experience_Body_Item_Company}>
        <span style={{color: info.color}}>{info.company}</span>
        <span>, {info.workType}</span>
      </div>
      <span className={styles.Experience_Body_Item_Description}>{info.description}</span>
    </div>
  )
}

const ExperienceItems = [
  {
    id: 1,
    company: 'Google',
    color: '#3CC74E',
    workType: 'Front-end developer',
    description: 'I currently am the lead designer on the interaction design team for Google Play.'
  },
  {
    id: 2,
    company: 'FaceBook',
    color: '#609BFF',
    workType: 'Front-end developer',
    description: 'I currently am the lead designer on the interaction design team for Google Play.'
  },
  {
    id: 3,
    company: 'Dribble',
    color: '#E95D90',
    workType: 'Front-end developer',
    description: 'I currently am the lead designer on the interaction design team for Google Play.'
  },
]
