import { useContext, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Label, Image, Button } from 'semantic-ui-react';

function PlayerLabel({ player, onClick }) {
    const [ color, setColor ] = useState("gray");

    return (
        <div style={{ margin: "10px 0" }}>
            <Label className="disable-select" as='a' color={color} onClick={() => setColor(onClick())}>
                <Image avatar spaced='right' src={require('../images/user.png')} />
                {player}
            </Label>                
        </div>
    );
}

export default PlayerLabel;
