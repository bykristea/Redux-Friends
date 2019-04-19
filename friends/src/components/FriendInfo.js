import React from 'react';
import { Link } from 'react-router-dom';
import happy from '../components/img/happy.png';
import styled from 'styled-components';

export const FriendImage = styled.img`
    
`;

export const FriendLayout = styled.div`
    display: flex;
    flex-direction: row;
    ${'' /* width: 50%; */}
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`;

const Friend = (props) => {
    return (
    <Link to ={`/friend/${props.friend.id}`}>
        <FriendLayout>
            <FriendImage src={happy} alt='friend' />
            <h1>{props.friend.name}</h1>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button>Update Friend 😀</button>
            <button>Unfriend😭</button>
        </FriendLayout>
    </Link>
    )
}

export default Friend;