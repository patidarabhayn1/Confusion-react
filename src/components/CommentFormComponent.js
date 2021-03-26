import React , { Component } from "react";
import { Button, Modal ,ModalHeader, ModalBody, Row, Label, Col } from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentFormComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            isModalOpen:false
        }
        this.toggleModal=this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        this.toggleModal();
    }

    render() {
        return(
            <>
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil fa-lg"></span> Submit Comment
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control" defaultValue={1}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author" className="form-control" validators={{
                                    minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                />
                                <Errors 
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" rows={6} className="form-control" /> 
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button type="submit" color="primary">Submit</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </>
        );
    }
}

export default CommentFormComponent;