import React, { useReducer } from 'react';

import { Jumbotron, Button, Container, Row, Col, CardGroup } from 'reactstrap';
import FollowerCard from './FollowerCard';

const UserCard = (props) => {

    const userData = props.userData;
    const userFollowers = props.userFollowers;

    return (
        <div>
            <Jumbotron style={{textAlign: 'center'}}>
                <Container>
                    <Row>
                        <Col><h1 className="display-3">{userData.name}</h1></Col>
                        <Col><img src={userData.avatar_url} alt={`Image of` + userData.name} style={{ borderRadius: '40px' }} /></Col>
                    </Row>
                </Container>
                <p className="lead">{userData.bio}</p>
                <hr className="my-2" />
                <p>{`Email: ` + userData.email}</p>
                <p>{`Hireable` + userData.hireable && 'Hireable'}</p>
                <p>{`Public Repos: ` + userData.public_repos}</p>
                <p className="lead">
                    <Button color="primary" href={userData.html_url}>View</Button>
                </p>
            </Jumbotron>
            <Row xs='4'>
                {userFollowers.map((user) => {
                    return <FollowerCard userData={user}/>
                })}
            </Row>
        </div>
    )
}

export default UserCard;