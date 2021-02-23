import React, {Component} from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments){
        if(comments!=null){
            const commentss=comments.map((comment) => {
                return(
                    <div>
                    <p>{comment.comment} </p>
                    <p>-- {comment.author}, {comment.date}</p>
                    </div>
                );
            });
            return(
                <div>
                    <h2>Comments</h2>
                    <div>{commentss}</div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {
        if(this.props.dish!=null){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width ="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;