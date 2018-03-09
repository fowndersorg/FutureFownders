import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class GetEmails extends React.Component {
  render() {
    return (
      <section className="pd-2 emailBox">
        <div className="row">
            <section className="col s12 m12 l5">
                <FormGroup >
                  <Label  for="exampleName"></Label>
                  <Input className="emailForm" type="name" name="name" id="exampleName" placeholder="*Full Name" />
               </FormGroup>
              </section>
            <section className="col s12 m12 l5">
                <FormGroup >
                  <Label  for="exampleName"></Label>
                  <Input className="emailForm" type="email" name="email" id="exampleEmail" placeholder=" *Emails" />
               </FormGroup>
            </section>
            <section className="col s12 m12 l2">
              <FormGroup className="send">
               <Button >GET OUR EMAILS</Button>
              </FormGroup>
            </section>   
          </div>
      </section>
       
            
         
       
      );
    }
  }

 