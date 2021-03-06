import { Fragment } from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button/standard-button';
import { Checkbox } from '@atlaskit/checkbox';
import TextField from '@atlaskit/textfield';

import { History } from 'history';

import Form, {
  CheckboxField,
  ErrorMessage,
  Field,
  FormFooter,
  HelperMessage,
  ValidMessage,
} from '@atlaskit/form';

import fakeAuth from '../fake-auth';
import { Redirect } from 'react-router';

const formContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}

const loginFormStyles = {
  width: '320px',
};

type LoginFormProps = {
  history: History;
}

const LoginForm = ({ history }: LoginFormProps) => {
  if(fakeAuth.isAuthenticated) {
    return <Redirect to="/home" />
  }

  return (
    <div
      style={formContainerStyles}
    >
      <div style={loginFormStyles}>
        <h2>Create a new account</h2>
        <Form<{ username: string; password: string; remember: boolean }>
          onSubmit={() => {
            fakeAuth.login(() => {
              history.push('/');
            });
          }}
        >
          {({ formProps, submitting }) => (
            <form {...formProps}>
              <Field
                name="username"
                label="User name"
                isRequired
                defaultValue="Donald"
              >
                {({ fieldProps, error }) => (
                  <Fragment>
                    <TextField autoComplete="off" {...fieldProps} />
                    {!error && (
                      <HelperMessage>
                        You can use letters, numbers & periods.
                      </HelperMessage>
                    )}
                    {error && (
                      <ErrorMessage>
                        This user name is already in use, try another one.
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>
              <Field
                name="password"
                label="Password"
                defaultValue=""
                isRequired
                validate={value =>
                  value && value.length < 8 ? 'TOO_SHORT' : undefined
                }
              >
                {({ fieldProps, error, valid, meta }) => {
                  return (
                    <Fragment>
                      <TextField type="password" {...fieldProps} />
                      {error && !valid && (
                        <HelperMessage>
                          Use 8 or more characters with a mix of letters, numbers &
                          symbols.
                        </HelperMessage>
                      )}
                      {error && (
                        <ErrorMessage>
                          Password needs to be more than 8 characters.
                        </ErrorMessage>
                      )}
                      {valid && meta.dirty ? (
                        <ValidMessage>Awesome password!</ValidMessage>
                      ) : null}
                    </Fragment>
                  );
                }}
              </Field>
              <CheckboxField name="remember" label="Remember me" defaultIsChecked>
                {({ fieldProps }) => (
                  <Checkbox {...fieldProps} label="Always sign in on this device" />
                )}
              </CheckboxField>
              <FormFooter>
                <ButtonGroup>
                  <Button appearance="subtle">Cancel</Button>
                  <LoadingButton
                    type="submit"
                    appearance="primary"
                    isLoading={submitting}
                  >
                    Sign up
                  </LoadingButton>
                </ButtonGroup>
              </FormFooter>
            </form>
          )}
        </Form>
      </div>
    </div>
  )
};

export default LoginForm;