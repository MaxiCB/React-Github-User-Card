import React from 'react';
import {
    Card, Button, CardText, CardBody
} from 'reactstrap';


const FollowerCard = (props) => {

    const userData = props.userData;

    return (
        <Card style={{ width: '33%' }}>
            <img src={userData.avatar_url} alt={`Image of` + userData.login} style={{ borderRadius: '40px' }} />
            <CardBody>
                <CardText>{userData.login}</CardText>
                <Button href={userData.html_url}>View</Button>
            </CardBody>
        </Card>
    );
};

export default FollowerCard;