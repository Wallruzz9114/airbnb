import * as React from 'react';
import { RegisterPage } from './screens/RegisterPage';
import { RegisterController } from '@airbnb/controllers';

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return(
      <React.Fragment>
        <RegisterController />
        <RegisterPage submit={this.dummySubmit} />
      </React.Fragment>
    );
  }
}