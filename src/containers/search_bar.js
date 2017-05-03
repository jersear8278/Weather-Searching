import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
import {connect} from 'react-redux';

 class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        //whenever callback "this" and there also has "this", then you have to bind it.
    }

 onInputChange(event){
   this.setState({term: event.target.value});
}

onFormSubmit(event){
  event.preventDefault();

  this.props.fetchWeather(this.state.term);
  this.setState({term: ''});
}

    render(){
        return (
            //clicking submit and pressing enter are the same (Submit) by using form onSubmit
            <form onSubmit={this.onFormSubmit} className ="input-group">
                <input 
                placeholder="Get a five day forecast in your favorite cities."
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect (null, mapDispatchToProps)(SearchBar);
//null because we don't care about initail state at all, we just present result when we submit.