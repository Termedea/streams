import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import { Field, reduxForm } from 'redux-form';
import { formTypes } from '../../constants';

import Button from '../Button/Button';

class StreamCreate extends React.Component {
    renderInput = ({ input, label, meta }) => {
        let outline =
            meta.error && meta.touched
                ? 'border-red-200 focus:border-red-400'
                : 'border-blue-200 focus:border-blue-500';
        return (
            <div className="Form__input-group mb-4">
                <label className="text-blue-900 mb-3" htmlFor={input.name}>{`${label}:`}</label>
                <input
                    className={`rounded-md border-2 p-1 font-sans  focus:outline-none focus:shadow-md flex flex-col w-full ${outline}`}
                    {...input}
                />
                {this.renderError(meta)}
            </div>
        );
    };

    renderError = ({ error, touched }) => {
        if (touched && error) return <div className="italic text-red-500">{error}</div>;
    };

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            <form
                className="Form w-full lg:mx-auto lg:w-2/3"
                onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label="Enter description" />

                <Button>Submit</Button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title.';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
};

const formWrapped = reduxForm({
    form: formTypes.STREAM_CREATE,
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
