import React from 'react';
import {Layout} from 'antd';
import styles from './styles/Footer.js';

const Footer = (props) => (<Layout.Footer {...props} style={styles.footer}>
  Udacity React Nanodegree ©2017-2018 Created by Leonardo Falk
</Layout.Footer>);

export default Footer;
