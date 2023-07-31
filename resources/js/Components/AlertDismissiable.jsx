import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertDismissible(message, showAlert) {
  const [show, setShow] = useState(showAlert);

  if (show) {
    return (
      <Alert variant='success' onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>
    );
  }
}

export default AlertDismissible;