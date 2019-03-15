import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Select } from '@material-ui/core';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';
// import SelectField from '@material-ui/core/SelectField';

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '11879996-a4b40e8239336e310afd87ac6',
    images: []
  }
  onTextChange = (e) => {
    if(e.target.value === ''){
      this.setState({[e.target.name] : '', images : ''});
    }else {
      this.setState({[e.target.name]: [e.target.value]}, async () => {
        await axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res => this.setState({ images : res.data.hits }))
        .catch(err => console.log(err));
      });
    }
  }
  onAmountChange = (e, index, value) => this.setState({ amount : e.target.value });
  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField 
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          helperText="search for images"
          fullWidth={true}
        />
        <Select
          name="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          fullWidth={true}
          variant="filled"
        >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
          {console.log(Object.keys(this.state.images).length)}
          { Object.keys(this.state.images).length > 0 ? (<ImageResults images={this.state.images} abc="hello" />) : null}
      </div>
    )
  }
}

export default Search;