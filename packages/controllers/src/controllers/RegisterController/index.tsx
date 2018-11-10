import * as React from 'react';

export class RegisterController extends React.PureComponent {
  submit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return (
      <div>Hello!</div>
    );
  }
}