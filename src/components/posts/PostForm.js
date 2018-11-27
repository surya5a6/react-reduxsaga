import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllPosts from './AllPosts';
import { Button, Layout, Row, Col, Input } from 'antd';
import { ADD_POST } from './actions';

const { TextArea } = Input
class PostForm extends Component {
  handleSubmit = (e) => {
    console.log("cominggg")
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    }
    this.props.dispatch({
      type: ADD_POST,
      data
    })
    this.getTitle.value='';
    this.getMessage.value='';
  }
render() {
return (
        <Row gutter={0}>
          <Col className="gutter-row" span={12}>
            <h1 className="post_heading" style={{fontSize:'16px'}}>Create Post</h1>
            <form className="form" onSubmit={this.handleSubmit} style={{marginLeft:"50px"}}>
            <input style={{borderRadius:"4px"}}required type="text" ref={(Input)=>this.getTitle = Input} 
              placeholder="Enter Post Title"/>
            <br /><br />
            <textarea style={{borderRadius:"4px"}} size="small" autosize={{ minRows: 5, maxRows: 10}} ref={(input)=>this.getMessage = input} cols="28" 
              placeholder="Enter Post" />
            <br /><br />
            <button style={{padding:"5px 15px",fontSize:"15px",cursor:"pointer",backgroundColor:"1890ff"}}>Post a Comment</button>
            </form>
          </Col>
          <Col className="gutter-row" span={12}>
            <AllPosts/>
          </Col>
      </Row>

    );
  }
}
export default connect()(PostForm);




