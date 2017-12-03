import React from 'react';
import { render } from 'react-dom'

import RootContainer from './containers/root-container.jsx';

render(<RootContainer now={new Date().toString()}/>, document.getElementById('react-root'));