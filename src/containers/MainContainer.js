import React from 'react'
import { Layout } from 'antd';

import Routes from '../config/routes';
import Footer from '../components/Footer';
import Header from '../components/Header';

import styles from './styles/MainContainer';

const MainContainer = () => (
  <Layout>
    <Header/>
    <Layout.Content style={styles.container}>
      <Routes/>
    </Layout.Content>
    <Footer/>
  </Layout>
)

export default MainContainer;
