export {default as Clock} from './componentys/Layout';
import * as React from 'react';
import {Button} from 'material-ui/core';


const clock: React.FC = () => {
    return(
        <Button variant="outlined">-</Button> <Button variant="outlined">+</Button>
    
    );

};


export default clock;