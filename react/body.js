

  class Body extends React.Component {
    constructor(props) {
      super(props)
      this.state = { pw : '', hash : 'hash' }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
      //this.activateLasers = this.activateLasers.bind(this)

    }


    handleSubmit(e) {
      e.preventDefault()
    }

    handleChange(e) {
      this.setState({pw: event.target.value})
      this.setState({hash : this.state.pw.toUpperCase() })
      console.log(this.state.pw)
    }

    render() { 
  
      return <form onSubmit={this.handleSubmit}>
        <h1>Brain Wallet</h1>
      <hr/>
      PW : 
      <input type="text" placeholder="I am a teapot" 
      value={this.state.pw}
      onChange={this.handleChange} />
      <hr/>
      Hash : 
      <input placeholder="Sha2 Hash of a teapot!"
      value={this.state.hash}/>
      <hr/>
      <button>
      Compressed
      </button>      
      </form>
    }
  }