import React from 'react'
import { fetchCurrency } from '../actions'
import {connect} from 'react-redux'
import { curReducer } from '../reducers/curReducer'

class Convertor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          currencies: [],
          base: "USD",
          amount: "",
          convertTo: "EUR",
          result: "",
          date: ""
        };
      }
    componentDidMount(){
        this.props.fetchCurrency()
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.currencies !== this.props.currencies) {
          const { currencies } = this.props
          this.setState({
            currencies
          })
        }
      }
    render(){
        const { currencies, base, amount, convertTo, result, date } = this.state;
        return(
            <div className="container my-5">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="card card-body">
                  <h5>
                    {amount} {base} is equevalent to
                  </h5>
                  <h2>
                    {amount === ""
                      ? "0"
                      : result === null
                      ? "Calculating..."
                      : result}{" "}
                    {convertTo}
                  </h2>
                  <p>As of {amount === "" ? "/ / /" : date === null ? "" : date}</p>
                  <div className="row">
                    <div className="col-lg-10">
                      <form className="form-inline mb-4">
                        <input
                          type="number"
                          value={amount}
                          onChange={this.handleInput}
                          className="form-control form-control-lg mx-3"
                        />
                        <select
                          name="base"
                          value={base}
                          onChange={this.handleSelect}
                          className="form-control form-control-lg"
                        >
                          {this.state.currencies.map(currency => (
                            <option key={currency} value={currency}>
                              {currency}
                            </option>
                          ))}
                        </select>
                      </form>
    
                      <form className="form-inline mb-4">
                        <input
                          disabled={true}
                          value={
                            amount === ""
                              ? "0"
                              : result === null
                              ? "Calculating..."
                              : result
                          }
                          className="form-control form-control-lg mx-3"
                        />
                        <select
                          name="convertTo"
                          value={convertTo}
                          onChange={this.handleSelect}
                          className="form-control form-control-lg"
                        >
                     {currencies.map((option,dc) => (
                 <option key={option} value={option}>{option.rates}</option>
              ))}
                        </select>
                      </form>
                    </div>
    
                    <div className="col-lg-2 align-self-center">
                      <h1 onClick={this.handleSwap} className="swap">
                        &#8595;&#8593;
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )
    }
}
const mapStateToProps=(state)=>({
    currencies:state.curReducer.currList
})
export default connect( mapStateToProps,{fetchCurrency})(Convertor);