import { Button, Statistic, Icon } from "semantic-ui-react";

const Header = () => (
    <div className="headerApp">
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <Button color="twitter" icon>
                <Icon name='sync alternate' />
            </Button>
        </div>
        <div>
            <Statistic color='green' size='tiny'>
                <Statistic.Value>02</Statistic.Value>
                <Statistic.Label>Resistência</Statistic.Label>
            </Statistic>
            <Statistic color='red' size='tiny'>
                <Statistic.Value>00</Statistic.Value>
                <Statistic.Label>Espiões</Statistic.Label>
            </Statistic>
        </div>
    </div>
);

export default Header;