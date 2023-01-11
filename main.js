import { getThoughts } from './thoughts/thoughtsData.js';
import { renderThoughts, setupListeners } from './thoughts/thoughtsDom.js';
import './styles.css';

const init = () => {
  setupListeners();
  renderThoughts(getThoughts());
};

init();
