import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class GetEmails extends React.Component {
  render() {
    return (
      <section className="pd emailBox">
        <div className="row">
          <section>
            <div className="col s12 m5">
              <FormGroup >
                <Label  for="exampleName"></Label>
                <Input className="emailForm" type="name" name="name" id="exampleName" placeholder="*Full Name" />
              </FormGroup>
            </div>
              <div className="col s12 m5">
                <FormGroup >
                  <Label  for="exampleName"></Label>
                  <Input className="emailForm" type="email" name="email" id="exampleEmail" placeholder=" *Emails" />
               </FormGroup>
              </div>
              <div className="col s12 m2">
                <FormGroup className="send">
                  <Button >GET OUR EMAILS</Button>
                </FormGroup>
              </div>
            </section>   
          </div>
      </section>
      );
    }
  }

 