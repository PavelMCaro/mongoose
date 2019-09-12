import * as React from 'react';
import { PersonForm } from './Form';
import { connect } from 'react-redux';
import { fetchData, saveFormData } from '../../state/form/actions';
import { getFormValues } from 'redux-form';

interface Props {
    fetchData: Function;
    valuesForm: any;
    saveFormData: Function;
}

class Container extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchData();
    }
    onSubmit =() => {
        console.log('submit');
        console.log('VALUES', this.props.valuesForm);
        const data = {
            name: {
                firstName: this.props.valuesForm.personName,
                lastName: this.props.valuesForm.personLastName
            },
            instagram: this.props.valuesForm.personSocial
        }
        this.props.saveFormData(data);
    }
    render(): JSX.Element {
        return <PersonForm onSubmit={this.onSubmit} />
    }
}

const mapStateToProps = state => ({
    valuesForm: getFormValues('person')(state)
})

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData()),
    saveFormData: (data) => dispatch(saveFormData(data))
});

export const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);