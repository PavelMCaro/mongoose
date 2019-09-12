import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Wrapper } from './styled';

interface Props {
    handleSubmit: any;
}

export const Form: React.FC<Props> = ({ handleSubmit }) => (
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
);

export const PersonForm = reduxForm({
    form: 'person'
})(Form);