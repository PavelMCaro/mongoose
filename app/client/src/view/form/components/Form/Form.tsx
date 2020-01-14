import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Wrapper } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData } from '../../state/form/actions';

const Form: React.FC = () => {

  const dispatch = useDispatch();
  const handleSaveForm = React.useCallback(data => dispatch(saveFormData(data)), [
    dispatch
  ]);

  const valuesForm = useSelector(state => state.form.person);

  const handleSubmit = () => {
    const data = {
      name: {
        firstName: valuesForm.values.personName,
        lastName: valuesForm.values.personLastName
      },
      instagram: valuesForm.values.personSocial
    }
    handleSaveForm(data);
  }

  return(
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Field
          name="personName"
          component="input"
          placeholder="Ingrese nombres"
        />
        <Field
          name="personLastName"
          component="input"
          placeholder="Ingrese apellidos"
        />
        <Field
          name="personSocial"
          component="input"
          placeholder="Ingrese instagram"
        />
        <button type="submit">submit</button>
      </form>
    </Wrapper>
  )
}

export const PersonForm = reduxForm({
    form: 'person'
})(Form);
