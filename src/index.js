import React from 'react';
import ReactDOM from 'react-dom';

class SelamatPagi extends React.Component{
  render() {
    return <h1>Selamat Pagi {this.props.name}</h1>;
  }
}

class ApaKabar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      kondisi: 'Sehat'
    };

    this.ubahKondisi = this.ubahKondisi.bind(this);
  }

  ubahKondisi() {
    let currentKondisi = this.state.kondisi;
    if (currentKondisi === 'Sehat') {
      currentKondisi = 'Bahagia';
    }  else {
      currentKondisi = 'Sehat';
    }

    this.setState(
      {
        kondisi: currentKondisi
      }
    );
  }

  render() {
    return (
      <div>
        <SelamatPagi {...this.props} />
        <p>Bagaimana kabarmu? Semoga dalam keadaan {this.state.kondisi}</p>
        <button onClick={this.ubahKondisi}>Ubah Kondisi</button>
      </div>
    );
  }
} 

ReactDOM.render(<ApaKabar name='Budi' />, document.getElementById('root'));

