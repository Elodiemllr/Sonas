// == Import npm
import React from 'react';
// == Import
import { Card, Image, Button } from 'semantic-ui-react';
import './styles.scss';

// == Composant
const Proposition = () => (
  <div className="proposition">
    <Card className="proposition__card">
      <Image src="https://images.pexels.com/photos/7354476/pexels-photo-7354476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
      <Card.Content>
        <Card.Header>Logiciel personnalisé</Card.Header>
        <Card.Description>
          <span className="proposition__description">Nos logiciels de caisse sont personnalisés pour votre métier et s'adapteront à l'évolution de votre entreprise.</span>
        </Card.Description>
        <Button>En savoir +</Button>
      </Card.Content>
    </Card>
    <Card className="proposition__card">
      <Image src="https://images.pexels.com/photos/7354476/pexels-photo-7354476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
      <Card.Content>
        <Card.Header>Logiciel personnalisé</Card.Header>
        <Card.Description>
          <span className="proposition__description">Nos logiciels de caisse sont personnalisés pour votre métier et s'adapteront à l'évolution de votre entreprise.</span>
        </Card.Description>
        <Button>En savoir +</Button>
      </Card.Content>
    </Card>
    <Card className="proposition__card">
      <Image src="https://images.pexels.com/photos/7354476/pexels-photo-7354476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
      <Card.Content>
        <Card.Header>Logiciel personnalisé</Card.Header>
        <Card.Description>
          <span className="proposition__description">Nos logiciels de caisse sont personnalisés pour votre métier et s'adapteront à l'évolution de votre entreprise.</span>
        </Card.Description>
        <Button>En savoir +</Button>
      </Card.Content>
    </Card>
  </div>
);

// == Export
export default Proposition;
