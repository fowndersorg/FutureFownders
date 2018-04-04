import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class VolunteerForm extends React.Component {
  render() {
    return (
      <Form className="volunteerFormColor">
       <h2 className="volunteerFormTitle">VOLUNTEER FORM</h2>
       <div className="container">
        <FormGroup>
          <Label for="exampleName" className="white-text formTxt">Your Name (required)</Label>
          <Input type="name" name="name" id="exampleName" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" className="white-text formTxt">Your Email (required)</Label>
          <Input type="name" name="name" id="exampleEmail"/>
        </FormGroup>
         <FormGroup>
          <Label for="exampleSubject" className="white-text formTxt"> Subject</Label>
          <Input type="subject" name="subject" id="exampleSubject" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText" className="white-text formTxt">Your Message</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button className="submitColor">Submit</Button>
       </div>
      </Form>
    );
  }
}