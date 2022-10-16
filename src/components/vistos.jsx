import { Image, List } from 'semantic-ui-react';

const Vistos = ({ atores }) => (
    <List selection horizontal>
        {
            atores.map(ator => (
                <List.Item key={ator.name}>
                    <List.Header as={'a'}>{ator.name}</List.Header>
                </List.Item>
            ))
        }
    </List>   
);

export default Vistos;