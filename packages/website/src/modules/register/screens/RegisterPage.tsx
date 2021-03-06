import * as React from 'react';
import * as Antd from 'antd';
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { validUserSchema } from '@airbnb/shared';
import { InputField } from '../../shared/components/InputField';

const { Form: AntForm, Icon, Button } = Antd;
const FormItem = AntForm.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class MainComponent extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <Form style={{ display: 'flex' }}>
        <div style={{ width: 400, margin: 'auto' }}>
          <Field
            name='email'
            // tslint:disable-next-line:jsx-no-multiline-js
            prefix={
              <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              // tslint:disable-next-line:jsx-curly-spacing
            }
            placeholder='Email'
            component={InputField}
          />
          <Field
            name='password'
            type='password'
            // tslint:disable-next-line:jsx-no-multiline-js
            prefix={
              <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              // tslint:disable-next-line:jsx-curly-spacing
            }
            placeholder='Password'
            component={InputField}
          />
          <FormItem>
            <a className='login-form-forgot' href=''>
              Forgot password
            </a>
          </FormItem>
          <FormItem>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <a href=''>login now!</a>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export const RegisterPage = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values: any, { props, setErrors }: any) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(MainComponent);
