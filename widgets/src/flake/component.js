import './style.scss';
import {randInt, randColor} from '../utils/generators'

const Flake = ({ 
    size = randInt(20, 40),
    color = randColor(),
    }) => {
        
  const style = {
    '--size': size,
    '--color': color,
  };

  return <div style={style} className="flake"></div>;
};

export default Flake