import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const FollowersCard = (props) => (
    <Card>
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.header}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.meta}</span>
        </Card.Meta>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={`https://github.com/${props.followersUrl}/followers`} target="_blank">
          <Icon name='user' />
          {props.extra} Followers
        </a>
      </Card.Content>
    </Card>
)
  
export default FollowersCard;