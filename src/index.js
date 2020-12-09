import './styles.css';

const body = document.querySelector(`body`);
const btnStart = document.querySelector(`[data-action="start"]`);
const btnStop = document.querySelector(`[data-action="stop"]`);

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const min = 0;
const max = colors.length;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeTheme = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
    }, 1000);
  },

  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
    body.style.backgroundColor = '';
  },
};

btnStart.addEventListener('click', changeTheme.start.bind(changeTheme));
btnStop.addEventListener('click', changeTheme.stop.bind(changeTheme));
