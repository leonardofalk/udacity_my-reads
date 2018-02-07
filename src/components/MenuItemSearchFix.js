import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { toClass } from 'recompose';

const MenuItemSearchFix = (props) => <Menu.Item {...props}/>;

// NOTE: when clicking directly on select inside a menu, inside a router's Link
// ant design's select button triggers but the router isn't detected, which can
// be fixed by attaching withRouter history and changing it manually, however
// withRouter transforms the HOC into a stateless component, which can't be
// used with the Header component I've designed. This fixes the problem.

export default toClass(withRouter(MenuItemSearchFix));
