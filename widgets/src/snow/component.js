import './style.scss'
import Flake from '../flake/component'
import { randInt, randColor } from "../utils/generators";
import { useEffect, useState } from 'react';


const Snow = ({quantity}) => {

    let color = `rgb(50,50,255)`
    let [top,setTop] = useState([0])
    let [flakes, setFlakes] = useState([
        <Flake key={1} size={20} top={0} color={color}/>,
        <Flake key={1} size={20} left={50} color={color}/>,
    ])
    const TOP_LIMIT = 80
    const FLAKE_COUNT_LIMIT = 10

    useEffect(()=>{
        setTimeout(()=>{
            setFlakes(
            [
                ...flakes,
                ...new Array(FLAKE_COUNT_LIMIT-flakees.length)
                .fill()
                .map(() => <Flake
                    key={1}
                    size={10}
                    top={0}
                    left={randInt(0, 100)}
                    color={randColor()}
                />)
            ]
                .filter((flake) => flake.props.top < TOP_LIMIT)
                .map((flake) => (
                  <Flake
                    key={flake.props.key}
                    size={flake.props.size}
                    top={flake.props.top + 0.5}
                    left={flake.props.left}
                    color={flake.props.color}
                  />
                ))
            );
        }, 500)
    })

    return (
        flakes
    )
}


export default Snow


//  {
//    showChild && (
//      <Flake
//        side={randInt(20, 40)}
//        color={randColor()}
//        top={0}
//        left={randInt(0, 100)}
//        whenDone={() => {
//          setShowChild(false);
//        }}
//      />
//    );
//  }