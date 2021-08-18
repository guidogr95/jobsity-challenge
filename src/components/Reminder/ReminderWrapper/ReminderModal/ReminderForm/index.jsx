// utils
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ReminderSchema } from 'src/utils/formSchemas';
import { fetchCities } from 'src/helpers/reminders';
// assets
import { AiOutlineCheck } from 'react-icons/ai';
// components
import FormFieldWrapper from 'src/components/shared/forms/FormFieldWrapper';
import FormFieldBody from 'src/components/shared/forms/FormFieldBody';
import FormLabel from 'src/components/shared/forms/FormLabel';
import FormTextInput from 'src/components/shared/forms/FormTextInput';
import FormErrorMessage from 'src/components/shared/forms/FormErrorMessage';
import FormDatePicker from 'src/components/shared/forms/FormDatePicker';
import FormTimePicker from 'src/components/shared/forms/FormTimePicker';
import FormAsyncCreatableSelect from 'src/components/shared/forms/FormAsyncCreatableSelect';
import FormFooter from 'src/components/shared/forms/FormFooter';
import PrimaryButton from 'src/components/shared/buttons/PrimaryButton';
import ForecastContainer from 'src/components/shared/ForecastContainer';

import './reminderform.scss'

export default function ReminderForm ({ getFormInitialValues, onSubmit }) {
  return (
    <Formik
      initialValues={getFormInitialValues()}
      validationSchema={ReminderSchema}
      onSubmit={onSubmit}
    >
      <Form className="w-full flex flex-col gap-3 reminder-form" >
        <FormFieldWrapper>
          <FormLabel htmlFor="description" >
            Reminder note
          </FormLabel>
          <FormFieldBody>
            <Field
              name="description"
              id="description"
              component={FormTextInput}
              placeholder="Enter description"
              className="flex-grow"
            />
          </FormFieldBody>
          <ErrorMessage dataTestid="descriptionError" component={FormErrorMessage} name="description" />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <FormLabel htmlFor="date">
            Date
          </FormLabel>
          <FormFieldBody>
            <Field
              id="date"
              name="date"
              component={FormDatePicker}
              className="flex-grow"
              />
          </FormFieldBody>
          <FormLabel htmlFor="time">
            Time
          </FormLabel>
          <FormFieldBody>
            <Field
              id="time"
              name="time"
              component={FormTimePicker}
              className="w-full sm:w-44"
              />
          </FormFieldBody>
          <ErrorMessage dataTestid="dateError" component={FormErrorMessage} name="date" />
          <ErrorMessage dataTestid="timeError" component={FormErrorMessage} name="time" />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <FormLabel htmlFor="city">Location</FormLabel>
          <FormFieldBody>
            <Field
              id="city"
              name="city"
              component={FormAsyncCreatableSelect}
              promiseOptions={fetchCities}
              placeholder="e.g.: Atlanta City"
            />
          </FormFieldBody>
          <ErrorMessage component={FormErrorMessage} name="city" />
        </FormFieldWrapper>

        <FormFooter>
          <Field
            component={ForecastContainer}
          />
          <PrimaryButton
            type="submit"
            className="bg-blue-700 hover:bg-blue-500 text-white"
          >
            <AiOutlineCheck />
            Confirm
          </PrimaryButton>
        </FormFooter>
      </Form>
    </Formik>
  );
};