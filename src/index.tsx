import * as React from 'react'
import styles from './styles.module.css'

interface IProps {
  text: string
}

export const Predictable = ({ text }: IProps) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
